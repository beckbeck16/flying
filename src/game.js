import component from "./component";
import Balloon from "./Balloon";
import Bubble from "./Bubble";

export default class Game {
    constructor(){
        // Canvas setup
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.canvas.width = 800;
        this.canvas.height = 500;

        this.player = new Balloon(this.canvas);
        this.bubblesArray = [];

        this.gameFrame = 0;
        this.score = 0;
    }

    startGame(){
        // DRAW        
        this.draw(this.ctx); 
    }

    draw(ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.handleBubbles();
        this.player.drawBalloon(ctx);
        this.drawScore();
        requestAnimationFrame(() => this.draw(ctx));
    }

    handleBubbles(){
        if(this.gameFrame % 50 == 0){
            this.bubblesArray.push(new Bubble(this.canvas));
        }
        this.bubblesArray.forEach((bubble, index) => {
            bubble.update(this.player.playerX, this.player.playerY);
            bubble.drawBubble(this.ctx);
            if(bubble.x > this.canvas.width + this.canvas.offsetLeft){
                this.bubblesArray.splice(index, 1);
            }
            this.detectColision(bubble, index);
            });
            
        this.gameFrame++;
    }

    detectColision(bubble, index){
        if(bubble.distance < bubble.radius + this.player.radius){
            if (!bubble.counted) {
                this.score++;
                bubble.counted = true; 
                this.bubblesArray.splice(index, 1);               
            }
        }
    }

    drawScore(){
        this.ctx.fillStyle = 'Black';
        this.ctx.font = "30px Verdana";
        this.ctx.fillText('Score: ' + this.score, 20, 50);
    }
}
