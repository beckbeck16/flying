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
        this.lives = 3;
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
        this.drawLives();
        if(this.lives > 0){
            requestAnimationFrame(() => this.draw(ctx));
        }
        else{
            this.gameOver();
        }
    }

    gameOver(){
        this.ctx.fillStyle = 'Black';
        this.ctx.font = "100px Arial Bold";
        this.ctx.fillText('GAME OVER', 100, 280);
    }

    handleBubbles(){
        if(this.gameFrame % 40 == 0){
            this.bubblesArray.push(new Bubble(this.canvas));
        }
        for(let i = 0 ; i < this.bubblesArray.length ; i++){
            this.bubblesArray[i].update(this.player.playerX, this.player.playerY);
            this.bubblesArray[i].drawBubble(this.ctx);
            if(this.bubblesArray[i].y > this.canvas.height + this.canvas.offsetTop){
                this.bubblesArray.splice(i, 1);
                this.lives--;
                if(this.lives <= 0){
                    break;
                }
            }
            this.detectColision(this.bubblesArray[i], i);
        } 

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
        this.ctx.fillStyle = 'White';
        this.ctx.font = "30px Arial";
        this.ctx.fillText('נקודות: ' + this.score, 660, 50);
    }

    drawLives(){
        this.ctx.fillStyle = 'White';
        this.ctx.font = "30px Arial";
        this.ctx.fillText('חיים: ' + this.lives, 686, 90);
    }
}
