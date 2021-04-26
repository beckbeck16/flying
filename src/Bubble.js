// Bubbles
export default class Bubble{
    constructor(canvas){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.radius = 30;
        this.speed = Math.random() * 5 + 2;
        this.distance;
        this.counted = false;
    }
    update(pX, pY){
        this.y += this.speed; 
        const dx = this.x - pX;
        const dy = this.y - pY;
        this.distance = Math.sqrt(dx*dx + dy*dy); 
    }
    drawBubble(ctx){
        this.img = new Image();
        this.img.src = "../src/img/kids1.png";
        ctx.drawImage(this.img, this.x - 50, this.y - 25);
    }
}
