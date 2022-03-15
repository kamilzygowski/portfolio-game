import { drawEnvironment, paintGrid } from "./map.js";
import { throttle, createGrid } from "./utils.js";

const player: HTMLElement = document.querySelector('.player');
let playerLeftPos: string = '';
let playerBottomPos: string = '';
let interval: number = 0;
let playerFaceRight: boolean | null = null;
let playerMoves: boolean = false;
let playerChangedState: boolean = false;
let treasureChestOpened: boolean = false;
let grid = [];
// Player images
const playerRunLeft: string = 'https://i.postimg.cc/K8W8XYbr/runLeft.gif';
const playerRunRight: string = 'https://i.postimg.cc/1tGmNcqJ/runRight.gif';
const playerIdleLeft: string = 'https://i.postimg.cc/vBmHRdnd/idleLeft.gif';
const playerIdleRight: string = 'https://i.postimg.cc/K8fttBnc/idle-Right.gif';

// SELECTORS
const designBar: HTMLElement = document.querySelector('.designBar');
const codeBar: HTMLElement = document.querySelector('.codeBar');
const creativityBar: HTMLElement = document.querySelector('.creativityBar');
const treasureChest: HTMLImageElement = document.querySelector('.treasureChest')

const camera = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight
}

const canvas: any = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth * 8;
canvas.height = window.innerHeight;

const playerImg = document.createElement('img');
playerImg.src = playerIdleRight;

player.appendChild(playerImg);

const onKeyDown = (e: KeyboardEvent) => {
    {
        getPlayerPos();
        // Moving left/right
        switch (e.key) {
            case 'd': {
                if (playerFaceRight === undefined) {
                    playerFaceRight = null
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
                    //player.x -= 15;
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
}
// Attaching event listener to playerm ovement, throttled is used to not get too far on key continuously pressed
document.addEventListener('keydown', throttle((e: KeyboardEvent) => onKeyDown(e), 75))

document.addEventListener('keyup', (e: KeyboardEvent) => {
    if (e.key === 'd') {
        playerMoves = false;
        playerChangedState = true;
        playerFaceRight = null;
    } else if (e.key === 'a') {
        playerMoves = false;
        playerChangedState = true;
        playerFaceRight = undefined;
    }
})

const cameraController = () => {
    //scrollTo(player,1)
    window.scrollTo({
        left: (parseInt(playerLeftPos) - 132 / 2 - window.innerWidth / 3),
    });
    //if(parseInt(playerLeftPos) - 132/2 > window.innerWidth/2)
    // window.scroll(window.scrollX + 1890, 0);
}

const getPlayerPos = (): void => {
    // This func is getting player positions
    // It looks like that because we need values without px
    playerLeftPos = '';
    for (let i: number = 0; i < Array.from(player.style.left).length - 2; i++) {
        playerLeftPos += Array.from(player.style.left)[i]
    }
    playerBottomPos = '';
    for (let i: number = 0; i < Array.from(player.style.bottom).length - 2; i++) {
        playerBottomPos += Array.from(player.style.bottom)[i]
    }
}
const controllPlayerPosition = (): void => {
    if (parseInt(playerLeftPos) < 790) {
        player.style.bottom = `${232}px`;
    } else if (parseInt(playerLeftPos) > 790 && parseInt(playerLeftPos) < 1890) {
        if (parseInt(playerLeftPos) > 1190 && parseInt(playerLeftPos) < 1890) {
            if (treasureChestOpened === false) {
                treasureChestOpened = true;
                treasureChest.src = "https://i.postimg.cc/W1yqJXLG/DETreasure-Chest1.gif";
            }
        } else if (treasureChestOpened === true) {
            treasureChestOpened = false;
            treasureChest.src = "https://i.postimg.cc/8CbfcDHY/ezgif-com-gif-maker-25.gif";
        }
        designBar.style.height = `${0}px`
        codeBar.style.height = `${0}px`
        creativityBar.style.height = `${0}px`
        player.style.bottom = `${306}px`;
    } else if (parseInt(playerLeftPos) > 1890 && parseInt(playerLeftPos) < 1960) {
        designBar.style.height = `${295}px`
    } else if (parseInt(playerLeftPos) > 1960 && parseInt(playerLeftPos) < 2010) {
        codeBar.style.height = `${242}px`
    } else if (parseInt(playerLeftPos) > 2010) {
        creativityBar.style.height = `${333}px`
    }
}

createGrid(48, grid, canvas);
paintGrid(48, ctx, grid)
const clouds = new Image();
clouds.src = "https://i.postimg.cc/ZYHFT7Sw/clouds.png"
for (let i = 0; i < canvas.width; i++) {
    ctx.drawImage(clouds, i * 544, window.innerHeight - 453)
}

drawEnvironment(ctx);

const gameLoop = (): void => {
    ctx.save();
    //cameraController()
    /*window.onscroll = (e)=>{
        
        window.scroll({
            left:(parseInt(playerLeftPos) - 132 / 2 - window.innerWidth / 3),
            
        });
    }*/
    //ctx.translate(parseInt(playerLeftPos) - canvas.width / 2, parseInt(playerBottomPos) - canvas.height / 2);
    // Check player state to attach correct anim to it every frame
    if (playerChangedState) {
        playerChangedState = false;
        if (playerFaceRight && playerMoves) {
            playerImg.src = playerRunRight
        } else if (!playerFaceRight && playerMoves) {
            playerImg.src = playerRunLeft;
        } else if ((playerFaceRight === true || playerFaceRight === null) && !playerMoves) {
            playerImg.src = playerIdleRight
        } else if ((playerFaceRight === false || playerFaceRight === undefined) && !playerMoves) {
            playerImg.src = playerIdleLeft
        }
    }
    interval++;
    getPlayerPos();
    controllPlayerPosition();
    //document.body.scrollIntoView();
    ctx.restore();
}

const render = setInterval((): void => {
    gameLoop();
}, 1000 / 60)

const about: any = document.querySelector('.about')
about.style.display = "block";