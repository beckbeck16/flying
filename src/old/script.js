export default class GameLoop {
    constructor(){
        // Canvas setup
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.canvas.width = 800;
        this.canvas.height = 500;

        this.playerHeight = 100;
        this.playerWidth = 92;
        this.playerX = (this.canvas.width - this.playerWidth) / 2;
        this.playerY = (this.canvas.height - this.playerHeight) / 2;
        this.img = new Image();
        this.img.src = "../img/player.png";

        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
        this.downPressed = false;

        // KEYBOARD
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
        
        // MOUSE
        document.addEventListener("mousemove", this.mouseMoveHandler);

        // TOUCH
        document.addEventListener("touchstart", this.touchHandler);
        document.addEventListener("touchmove", this.touchHandler);

        this.gameFrame = 0;
        this.bubblesArray = [];

        // DRAW        
        // this.draw();
    }

    draw() {
        // let canvas = document.getElementById('canvas');
        // let ctx = canvas.getContext('2d');
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        
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
        window.requestAnimationFrame(this.draw);
    }

    keyDownHandler(e) {
        if ("code" in e) {
            switch(e.code) {
                case "Unidentified":
                    break;
                case "ArrowRight":
                case "Right":
                case "KeyD":
                    this.rightPressed = true;
                    return;
                case "ArrowLeft":
                case "Left":
                case "KeyA":
                    this.leftPressed = true;
                    return;
                case "ArrowUp":
                case "Up":
                case "KeyW":
                    this.upPressed = true;
                    return;
                case "ArrowDown":
                case "Down":
                case "KeyS":
                    this.downPressed = true;
                    return;
                default:
                    return;
            }
        }

        if(e.keyCode == 39) {
            this.rightPressed = true;
        }
        else if(e.keyCode == 37) {
            this.leftPressed = true;
        }
        if(e.keyCode == 40) {
            this.downPressed = true;
        }
        else if(e.keyCode == 38) {
            this.upPressed = true;
        }
    }

    keyUpHandler(e) {
        if ("code" in e) {
            switch(e.code) {
                case "Unidentified":
                    break;
                case "ArrowRight":
                case "Right":
                case "KeyD":
                    this.rightPressed = false;
                    return;
                case "ArrowLeft":
                case "Left":
                case "KeyA":
                    this.leftPressed = false;
                    return;
                case "ArrowUp":
                case "Up":
                case "KeyW":
                    this.upPressed = false;
                    return;
                case "ArrowDown":
                case "Down":
                case "KeyS":
                    this.downPressed = false;
                    return;
                default:
                    return;
            }
        }

        if(e.keyCode == 39) {
            this.rightPressed = false;
        }
        else if(e.keyCode == 37) {
            this.leftPressed = false;
        }
        if(e.keyCode == 40) {
            this.downPressed = false;
        }
        else if(e.keyCode == 38) {
            this.upPressed = false;
        }
    }
    
    mouseMoveHandler(e) {
        console.log(this.canvas.offsetLeft);
        console.log(this.canvas);
        this.playerX = e.pageX - this.canvas.offsetLeft - this.playerWidth / 2;
        this.playerY = e.pageY - this.canvas.offsetTop - this.playerHeight / 2;
        // output.innerHTML = "Mouse:  <br />"+ " x: " + playerX + ", y: " + playerY;
    }
    
    touchHandler(e) {
        if(e.touches) {
            this.playerX = e.touches[0].pageX - this.canvas.offsetLeft - this.playerWidth / 2;
            this.playerY = e.touches[0].pageY - this.canvas.offsetTop - this.playerHeight / 2;
            // output.innerHTML = "Touch:  <br />"+ " x: " + playerX + ", y: " + playerY;
            // e.preventDefault(); 
        }
    }

    handleBubbles(){
        if(this.gameFrame % 50 == 0){
            this.bubblesArray.push(new Bubble(this.canvas));
        }
        this.bubblesArray.forEach(bubble => {
            bubble.update();
            bubble.drawBubble();
            });
    }
}

// Bubbles
    class Bubble{
        constructor(canvas){
            this.ctx = canvas.getContext('2d');
            this.x = Math.random() * canvas.width - canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = 30;
            this.speed = Math.random() * 5 + 1;
            this.distance;
        }
        update(){
            this.x += this.speed; 
        }
        drawBubble(){
            this.ctx.fillStyle = 'yellow';
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.closePath();
            // ctx.stroke();
        }
    }