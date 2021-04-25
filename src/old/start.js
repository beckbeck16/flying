export function startGame() {
    // Canvas setup
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 500;

    var playerHeight = 100;
    var playerWidth = 92;
    var playerX = (canvas.width - playerWidth) / 2;
    var playerY = (canvas.height - playerHeight) / 2;
    var img = new Image();
    img.src = "../img/player.png";

    var rightPressed = false;
    var leftPressed = false;
    var upPressed = false;
    var downPressed = false;

    // KEYBOARD
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        if ("code" in e) {
            switch(e.code) {
                case "Unidentified":
                    break;
                case "ArrowRight":
                case "Right":
                case "KeyD":
                    rightPressed = true;
                    return;
                case "ArrowLeft":
                case "Left":
                case "KeyA":
                    leftPressed = true;
                    return;
                case "ArrowUp":
                case "Up":
                case "KeyW":
                    upPressed = true;
                    return;
                case "ArrowDown":
                case "Down":
                case "KeyS":
                    downPressed = true;
                    return;
                default:
                    return;
            }
        }

        if(e.keyCode == 39) {
            rightPressed = true;
        }
        else if(e.keyCode == 37) {
            leftPressed = true;
        }
        if(e.keyCode == 40) {
            downPressed = true;
        }
        else if(e.keyCode == 38) {
            upPressed = true;
        }
    }

    function keyUpHandler(e) {
        if ("code" in e) {
            switch(e.code) {
                case "Unidentified":
                    break;
                case "ArrowRight":
                case "Right":
                case "KeyD":
                    rightPressed = false;
                    return;
                case "ArrowLeft":
                case "Left":
                case "KeyA":
                    leftPressed = false;
                    return;
                case "ArrowUp":
                case "Up":
                case "KeyW":
                    upPressed = false;
                    return;
                case "ArrowDown":
                case "Down":
                case "KeyS":
                    downPressed = false;
                    return;
                default:
                    return;
            }
        }

        if(e.keyCode == 39) {
            rightPressed = false;
        }
        else if(e.keyCode == 37) {
            leftPressed = false;
        }
        if(e.keyCode == 40) {
            downPressed = false;
        }
        else if(e.keyCode == 38) {
            upPressed = false;
        }
    }

    // MOUSE
    document.addEventListener("mousemove", mouseMoveHandler);
    function mouseMoveHandler(e) {
        playerX = e.pageX - canvas.offsetLeft - playerWidth / 2;
        playerY = e.pageY - canvas.offsetTop - playerHeight / 2;
        // output.innerHTML = "Mouse:  <br />"+ " x: " + playerX + ", y: " + playerY;
    }

    // TOUCH
    document.addEventListener("touchstart", touchHandler);
    document.addEventListener("touchmove", touchHandler);
    function touchHandler(e) {
        if(e.touches) {
            playerX = e.touches[0].pageX - canvas.offsetLeft - playerWidth / 2;
            playerY = e.touches[0].pageY - canvas.offsetTop - playerHeight / 2;
            // output.innerHTML = "Touch:  <br />"+ " x: " + playerX + ", y: " + playerY;
            // e.preventDefault(); 
        }
    }

    // Bubbles
    const bubblesArray = [];
    class Bubble{
        constructor(){
            this.x = Math.random() * canvas.width - canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = 30;
            this.speed = Math.random() * 5 + 1;
            this.distance;
        }
        update(){
            this.x += this.speed; 
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
    }

    // DRAW
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // KEYBOARD
        if(rightPressed) {
            playerX += 5;
        }
        else if(leftPressed) {
            playerX -= 5;
        }
        if(downPressed) {
            playerY += 5;
        }
        else if(upPressed) {
            playerY -= 5;
        }

        handleBubbles();
        ctx.drawImage(img, playerX, playerY);
        gameFrame++;
        requestAnimationFrame(draw);
    }
    draw();
}