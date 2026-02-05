function startPong() {
    const canvas = document.getElementById('pongCanvas');
    const ctx = canvas.getContext('2d');
    
    let paddle1 = {x: 10, y: 250, w: 10, h: 100};
    let paddle2 = {x: 580, y: 250, w: 10, h: 100};
    let ball = {x: 300, y: 300, dx: 5, dy: 5, r: 8};
    let score1 = 0, score2 = 0;
    let wPressed = false, sPressed = false;

    document.onkeydown = (e) => {
        if (currentGame !== 'pong') return;
        if (e.key === 'w') wPressed = true;
        if (e.key === 's') sPressed = true;
    };

    document.onkeyup = (e) => {
        if (currentGame !== 'pong') return;
        if (e.key === 'w') wPressed = false;
        if (e.key === 's') sPressed = false;
    };

    function draw() {
        if (!gameRunning || currentGame !== 'pong') return;

        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#fff';
        ctx.fillRect(paddle1.x, paddle1.y, paddle1.w, paddle1.h);
        ctx.fillRect(paddle2.x, paddle2.y, paddle2.w, paddle2.h);

        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.closePath();

        if (wPressed && paddle1.y > 0) paddle1.y -= 6;
        if (sPressed && paddle1.y < canvas.height - paddle1.h) paddle1.y += 6;

        if (ball.y < paddle2.y + paddle2.h/2) paddle2.y -= 4;
        if (ball.y > paddle2.y + paddle2.h/2) paddle2.y += 4;

        ball.x += ball.dx;
        ball.y += ball.dy;

        if (ball.y + ball.r > canvas.height || ball.y - ball.r < 0) ball.dy *= -1;

        if (ball.x - ball.r < paddle1.x + paddle1.w && ball.y > paddle1.y && ball.y < paddle1.y + paddle1.h) {
            ball.dx *= -1;
        }

        if (ball.x + ball.r > paddle2.x && ball.y > paddle2.y && ball.y < paddle2.y + paddle2.h) {
            ball.dx *= -1;
        }

        if (ball.x < 0) {
            score2++;
            ball.x = 300;
            ball.y = 300;
        }

        if (ball.x > canvas.width) {
            score1++;
            ball.x = 300;
            ball.y = 300;
        }

        document.getElementById('gameInfo').textContent = 'Player: ' + score1 + ' | AI: ' + score2;

        requestAnimationFrame(draw);
    }

    document.getElementById('gameInfo').textContent = 'Player: 0 | AI: 0';
    draw();
}
