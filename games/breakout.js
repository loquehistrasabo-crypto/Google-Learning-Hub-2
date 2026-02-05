function startBreakout() {
    const canvas = document.getElementById('breakoutCanvas');
    const ctx = canvas.getContext('2d');
    
    let paddle = {x: 250, y: 560, w: 100, h: 15, speed: 8};
    let ball = {x: 300, y: 300, dx: 4, dy: -4, r: 8};
    let bricks = [];
    let score = 0;
    let leftPressed = false, rightPressed = false;

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 10; col++) {
            bricks.push({x: col*60, y: row*30 + 50, w: 55, h: 25, alive: true});
        }
    }

    document.onkeydown = (e) => {
        if (currentGame !== 'breakout') return;
        if (e.key === 'ArrowLeft') leftPressed = true;
        if (e.key === 'ArrowRight') rightPressed = true;
    };

    document.onkeyup = (e) => {
        if (currentGame !== 'breakout') return;
        if (e.key === 'ArrowLeft') leftPressed = false;
        if (e.key === 'ArrowRight') rightPressed = false;
    };

    function draw() {
        if (!gameRunning || currentGame !== 'breakout') return;

        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#fff';
        ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);

        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
        ctx.fillStyle = '#ff0';
        ctx.fill();
        ctx.closePath();

        bricks.forEach(brick => {
            if (brick.alive) {
                ctx.fillStyle = '#0099ff';
                ctx.fillRect(brick.x, brick.y, brick.w, brick.h);
            }
        });

        if (leftPressed && paddle.x > 0) paddle.x -= paddle.speed;
        if (rightPressed && paddle.x < canvas.width - paddle.w) paddle.x += paddle.speed;

        ball.x += ball.dx;
        ball.y += ball.dy;

        if (ball.x + ball.r > canvas.width || ball.x - ball.r < 0) ball.dx *= -1;
        if (ball.y - ball.r < 0) ball.dy *= -1;

        if (ball.y + ball.r > paddle.y && ball.x > paddle.x && ball.x < paddle.x + paddle.w) {
            ball.dy *= -1;
        }

        bricks.forEach(brick => {
            if (brick.alive && ball.x > brick.x && ball.x < brick.x + brick.w && 
                ball.y > brick.y && ball.y < brick.y + brick.h) {
                ball.dy *= -1;
                brick.alive = false;
                score += 10;
                document.getElementById('gameInfo').textContent = 'Score: ' + score;
            }
        });

        if (ball.y + ball.r > canvas.height) {
            gameRunning = false;
            ctx.fillStyle = '#fff';
            ctx.font = '40px Arial';
            ctx.fillText('GAME OVER', 180, 300);
            return;
        }

        requestAnimationFrame(draw);
    }

    document.getElementById('gameInfo').textContent = 'Score: 0';
    draw();
}
