function startSnake() {
    const canvas = document.getElementById('snakeCanvas');
    const ctx = canvas.getContext('2d');
    const box = 20;
    let snake = [{x: 10*box, y: 10*box}];
    let food = {x: Math.floor(Math.random()*29)*box, y: Math.floor(Math.random()*29)*box};
    let dx = box, dy = 0;
    let score = 0;

    document.onkeydown = (e) => {
        if (!gameRunning || currentGame !== 'snake') return;
        if (e.key === 'ArrowLeft' && dx === 0) { dx = -box; dy = 0; }
        if (e.key === 'ArrowUp' && dy === 0) { dx = 0; dy = -box; }
        if (e.key === 'ArrowRight' && dx === 0) { dx = box; dy = 0; }
        if (e.key === 'ArrowDown' && dy === 0) { dx = 0; dy = box; }
    };

    function draw() {
        if (!gameRunning || currentGame !== 'snake') return;

        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < snake.length; i++) {
            ctx.fillStyle = i === 0 ? '#00ff00' : '#00cc00';
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
        }

        ctx.fillStyle = '#ff0000';
        ctx.fillRect(food.x, food.y, box, box);

        let newX = snake[0].x + dx;
        let newY = snake[0].y + dy;

        if (newX === food.x && newY === food.y) {
            score += 10;
            document.getElementById('gameInfo').textContent = 'Score: ' + score;
            food = {x: Math.floor(Math.random()*29)*box, y: Math.floor(Math.random()*29)*box};
        } else {
            snake.pop();
        }

        if (newX < 0 || newX >= canvas.width || newY < 0 || newY >= canvas.height || collision(newX, newY)) {
            gameRunning = false;
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.font = '40px Arial';
            ctx.fillText('GAME OVER', 180, 300);
            return;
        }

        snake.unshift({x: newX, y: newY});
        setTimeout(draw, 100);
    }

    function collision(x, y) {
        for (let i = 0; i < snake.length; i++) {
            if (snake[i].x === x && snake[i].y === y) return true;
        }
        return false;
    }

    document.getElementById('gameInfo').textContent = 'Score: 0';
    draw();
}
