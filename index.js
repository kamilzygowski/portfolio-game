const player = document.querySelector('.player');
console.log(player.style.left);
console.log('xd');
document.addEventListener('keydown', (e) => {
    console.log(e.key);
    let playerLeftPos = '';
    console.log(Array.from(player.style.left));
    for (let i = 0; i < Array.from(player.style.left).length - 2; i++) {
        playerLeftPos += Array.from(player.style.left)[i];
    }
    console.log(playerLeftPos);
    switch (e.key) {
        case 'd': {
            player.style.left = `${parseInt(playerLeftPos) + 50}px`;
            console.log('it fired');
            break;
        }
        case 'a': {
            player.style.left = `${parseInt(playerLeftPos) - 50}px`;
            console.log('it fired');
            break;
        }
    }
});
