// Bubbles
const bubblesArray = [];
class Bubble{
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * canvas.height;
        this.radius = 30;
        this.speed = Math.random() * 5 + 1;
        this.distance;
    }
    update(){
        this.y -= this.speed; 
    }
    draw(){
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        // ctx.stroke();
    }
}

let gameFrame = 0;

function handleBubbles(){
    if(gameFrame % 50 == 0){
        bubblesArray.push(new Bubble());
    }
    bubblesArray.forEach(bubble => {
        bubble.update();
        bubble.draw();
        });

    // New loop to fix the blinking of the bubbles when one bubble was deleted
    for(let i= 0 ; i<bubblesArray.length ; i++){
        if(bubblesArray[i].y < 0 - bubblesArray[i].radius){
            bubblesArray.splice(i, 1);
        }
    }
}
