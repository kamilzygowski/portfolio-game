import { drawEnvironment, paintGrid } from "./map.js";
import { throttle, createGrid } from "./utils.js";
const player = document.querySelector('.player');
let playerLeftPos = '';
let playerBottomPos = '';
let interval = 0;
let playerFaceRight = null;
let playerMoves = false;
let playerFly = false;
let playerChangedState = false;
let treasureChestOpened = false;
let grid = [];
const playerRunLeft = 'https://i.postimg.cc/K8W8XYbr/runLeft.gif';
const playerRunRight = 'https://i.postimg.cc/1tGmNcqJ/runRight.gif';
const playerIdleLeft = 'https://i.postimg.cc/vBmHRdnd/idleLeft.gif';
const playerIdleRight = 'https://i.postimg.cc/K8fttBnc/idle-Right.gif';
const designBar = document.querySelector('.designBar');
const codeBar = document.querySelector('.codeBar');
const creativityBar = document.querySelector('.creativityBar');
const treasureChest = document.querySelector('.treasureChest');
const bat = document.querySelector('.bat');
const skillsBars = document.querySelector('.skillsBars');
const skillsLabels = document.querySelector('.skillsLabels');
const camera = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight
};
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth * 8;
canvas.height = window.innerHeight;
const playerImg = document.createElement('img');
playerImg.src = playerIdleRight;
player.appendChild(playerImg);
const onKeyDown = (e) => {
    {
        getPlayerPos();
        switch (e.key) {
            case 'd': {
                if (playerFaceRight === undefined) {
                    playerFaceRight = null;
                }
                if (parseInt(playerLeftPos) <= canvas.width) {
                    if (!playerFaceRight || playerFaceRight === null) {
                        playerMoves = true;
                        playerFaceRight = true;
                        playerChangedState = true;
                    }
                    player.style.left = `${parseInt(playerLeftPos) + 30}px`;
                    break;
                }
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
                    player.style.left = `${parseInt(playerLeftPos) - 30}px`;
                    break;
                }
            }
        }
    }
};
document.addEventListener('keydown', throttle((e) => onKeyDown(e), 75));
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
const cameraController = () => {
    window.scrollTo({
        left: (parseInt(playerLeftPos) - 132 / 2 - window.innerWidth / 3),
    });
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
    if (parseInt(playerLeftPos) < 790) {
        player.style.bottom = `${232}px`;
    }
    else if (parseInt(playerLeftPos) > 790 && parseInt(playerLeftPos) < 1890) {
        if (parseInt(playerLeftPos) > 1190 && parseInt(playerLeftPos) < 1890) {
            if (treasureChestOpened === false) {
                treasureChestOpened = true;
                treasureChest.src = "https://i.postimg.cc/W1yqJXLG/DETreasure-Chest1.gif";
            }
        }
        else if (treasureChestOpened === true) {
            treasureChestOpened = false;
            treasureChest.src = "https://i.postimg.cc/8CbfcDHY/ezgif-com-gif-maker-25.gif";
        }
        designBar.style.height = `${0}px`;
        codeBar.style.height = `${0}px`;
        creativityBar.style.height = `${0}px`;
        player.style.bottom = `${306}px`;
    }
    else if (parseInt(playerLeftPos) > 1890 && parseInt(playerLeftPos) < 1960) {
        designBar.style.height = `${295}px`;
    }
    else if (parseInt(playerLeftPos) > 1960 && parseInt(playerLeftPos) < 2010) {
        codeBar.style.height = `${242}px`;
    }
    else if (parseInt(playerLeftPos) > 2010 && parseInt(playerLeftPos) < 3150) {
        bat.style.bottom = `${2000}px`;
        creativityBar.style.height = `${333}px`;
    }
    else if (parseInt(playerLeftPos) > 3150 && parseInt(playerLeftPos) < 3180) {
        playerFly = false;
        bat.style.bottom = `${533}px`;
        player.style.bottom = `${306}px`;
    }
    else if (parseInt(playerLeftPos) > 3180 && parseInt(playerLeftPos) < 4280) {
        playerFly = true;
        bat.style.bottom = `${parseInt(playerBottomPos) - 30}px`;
        bat.style.left = `${playerLeftPos}px`;
        player.style.bottom = `${545}px`;
    }
    else if (parseInt(playerLeftPos) > 4280 && parseInt(playerLeftPos) < 4500) {
        playerFly = false;
        bat.style.bottom = `${2000}px`;
        bat.style.left = `${4900}px`;
        player.style.bottom = `${420}px`;
        skillsBars.style.bottom = `${1500}px`;
        skillsLabels.style.bottom = `${-1000}px`;
    }
    else if (parseInt(playerLeftPos) > 4500) {
        skillsBars.style.bottom = `${250}px`;
        skillsLabels.style.bottom = `${280}px`;
    }
    console.log(playerLeftPos);
};
createGrid(48, grid, canvas);
paintGrid(48, ctx, grid);
const clouds = new Image();
clouds.src = "https://i.postimg.cc/ZYHFT7Sw/clouds.png";
for (let i = 0; i < canvas.width; i++) {
    ctx.drawImage(clouds, i * 544, window.innerHeight - 453);
}
drawEnvironment(ctx);
const gameLoop = () => {
    ctx.save();
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
    interval++;
    getPlayerPos();
    controllPlayerPosition();
    ctx.restore();
};
const render = setInterval(() => {
    gameLoop();
}, 1000 / 60);
const about = document.querySelector('.about');
about.style.display = "block";
