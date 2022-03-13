const player = document.querySelector('.player');
let playerLeftPos = '';
let playerBottomPos = '';
let prevPlayerX;
let interval = 0;
let playerFaceRight = null;
let playerMoves = false;
let playerChangedState = false;
const playerRunLeft = 'https://i.postimg.cc/K8W8XYbr/runLeft.gif';
const playerRunRight = 'https://i.postimg.cc/1tGmNcqJ/runRight.gif';
const playerIdleLeft = 'https://i.postimg.cc/vBmHRdnd/idleLeft.gif';
const playerIdleRight = 'https://i.postimg.cc/K8fttBnc/idle-Right.gif';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const playerImg = document.createElement('img');
playerImg.src = 'https://i.postimg.cc/K8fttBnc/idle-Right.gif';
player.appendChild(playerImg);
document.addEventListener('keydown', (e) => {
    getPlayerPos();
    switch (e.key) {
        case 'd' || 'ArrowRight': {
            if (!playerFaceRight || playerFaceRight === null) {
                playerMoves = true;
                playerFaceRight = true;
                playerChangedState = true;
            }
            player.style.left = `${parseInt(playerLeftPos) + 15}px`;
            break;
        }
        case 'a': {
            if (playerFaceRight === null) {
                playerFaceRight = undefined;
            }
            if (parseInt(playerLeftPos) >= 0) {
                if (playerFaceRight || playerFaceRight === undefined || playerFaceRight === undefined) {
                    playerMoves = true;
                    playerFaceRight = false;
                    playerChangedState = true;
                }
                player.style.left = `${parseInt(playerLeftPos) - 15}px`;
                break;
            }
        }
    }
});
document.addEventListener('keyup', (e) => {
    if (e.key === 'd') {
        playerMoves = false;
        playerChangedState = true;
        playerFaceRight = null;
    }
    else if (e.key === 'a') {
        playerMoves = false;
        playerChangedState = true;
        playerFaceRight = undefined;
    }
});
const drawAnim = (x, y, width, height, src, framesNumber, interval, ctx) => {
    let image = new Image();
    image.src = src;
    const thisFrame = Math.round(interval % ((framesNumber - 1) * 10) / 10);
    ctx.drawImage(image, width * thisFrame, 0, width, height, x, y, width, height);
};
const getPlayerPos = () => {
    playerLeftPos = '';
    for (let i = 0; i < Array.from(player.style.left).length - 2; i++) {
        playerLeftPos += Array.from(player.style.left)[i];
    }
    playerBottomPos = '';
    for (let i = 0; i < Array.from(player.style.bottom).length - 2; i++) {
        playerBottomPos += Array.from(player.style.bottom)[i];
    }
};
const controllPlayerPosition = () => {
    if (parseInt(playerLeftPos) < 650) {
        player.style.bottom = `${50}px`;
    }
    else if (parseInt(playerLeftPos) > 650) {
        player.style.bottom = `${250}px`;
    }
};
const gameLoop = () => {
    if (playerChangedState) {
        playerChangedState = false;
        if (playerFaceRight && playerMoves) {
            playerImg.src = playerRunRight;
        }
        else if (!playerFaceRight && playerMoves) {
            playerImg.src = playerRunLeft;
        }
        else if ((playerFaceRight === true || playerFaceRight === null) && !playerMoves) {
            playerImg.src = playerIdleRight;
        }
        else if ((playerFaceRight === false || playerFaceRight === undefined) && !playerMoves) {
            playerImg.src = playerIdleLeft;
        }
    }
    ctx.save();
    interval++;
    getPlayerPos();
    controllPlayerPosition();
    document.body.scrollIntoView();
    ctx.restore();
};
const render = setInterval(() => {
    gameLoop();
}, 1000 / 60);
