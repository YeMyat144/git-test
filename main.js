const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

document.addEventListener('keydown', (event) => {
    const playerSpeed = 10;

    switch (event.key) {
        case 'ArrowLeft':
            movePlayer(player1, -playerSpeed);
            break;
        case 'ArrowRight':
            movePlayer(player1, playerSpeed);
            break;
        case 'a':
            movePlayer(player2, -playerSpeed);
            break;
        case 'd':
            movePlayer(player2, playerSpeed);
            break;
        case 'Control':
            attack(player1);
            break;
        case 'Shift':
            attack(player2);
            break;
    }
});

function movePlayer(player, speed) {
    const playerPosition = player.offsetLeft + speed;

    if (playerPosition >= 0 && playerPosition + player.offsetWidth <= window.innerWidth) {
        player.style.left = playerPosition + 'px';
    }
}

function attack(player) {
    player.classList.add('attack');
    setTimeout(() => {
        player.classList.remove('attack');
    }, 500); // Adjust the duration of the attack animation
}
