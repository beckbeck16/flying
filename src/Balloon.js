export default class Balloon{
    constructor(canvas){
        this.canvas = canvas;

        this.playerHeight = 100;
        this.playerWidth = 92;
        this.radius = 75;
        this.playerX = (this.canvas.width - this.playerWidth) / 2;
        this.playerY = (this.canvas.height - this.playerHeight) / 2;

        this.img = new Image();
        this.img.src = "../src/img/balloon.png";

        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
        this.downPressed = false;

        this.gameFrame = 0;

        // KEYBOARD
        document.addEventListener("keydown", this.keyDownHandler.bind(this));
        document.addEventListener("keyup", this.keyUpHandler.bind(this));
        
        // MOUSE
        document.addEventListener("mousemove", this.mouseMoveHandler.bind(this));

        // TOUCH
        document.addEventListener("touchstart", this.touchHandler.bind(this));
        document.addEventListener("touchmove", this.touchHandler.bind(this));
    }

    drawBalloon(ctx){
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
        
        ctx.drawImage(this.img, this.playerX - 75, this.playerY - 70);
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
        this.playerX = e.pageX - canvas.offsetLeft - this.playerWidth / 2;
        this.playerY = e.pageY - canvas.offsetTop - this.playerHeight / 2;
    }
    
    touchHandler(e) {
        if(e.touches) {
            this.playerX = e.touches[0].pageX - canvas.offsetLeft - this.playerWidth / 2;
            this.playerY = e.touches[0].pageY - canvas.offsetTop - this.playerHeight / 2;
            // e.preventDefault(); 
        }
    }
}