function draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // KEYBOARD
    if(this.rightPressed) {
        this.playerX += 5;
    }
    else if(this.leftPressed) {
        this.playerX -= 5;
    }
    if(this.downPressed) {
        this.playerY += 5;
    }
    else if(this.upPressed) {
        this.playerY -= 5;
    }

    this.bubblesArray = [];
    this.handleBubbles();
    this.ctx.drawImage(this.img, this.playerX, this.playerY);
    this.gameFrame++;
    requestAnimationFrame(this.draw);
}