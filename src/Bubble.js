// Bubbles
export default class Bubble{
    constructor(canvas){
        this.x = Math.random() * canvas.width - canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 30;
        this.speed = Math.random() * 5 + 1;
        this.distance;
        this.counted = false;
    }
    update(pX, pY){
        this.x += this.speed; 
        const dx = this.x - pX;
        const dy = this.y - pY;
        this.distance = Math.sqrt(dx*dx + dy*dy); 
    }
    drawBubble(ctx){
        this.img = new Image();
        this.img.src = "../img/kids1.png";

        // ctx.fillStyle = 'yellow';
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
        ctx.drawImage(this.img, this.x - 50, this.y - 25);
        // ctx.stroke();
    }
}
