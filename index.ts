const player: HTMLElement = document.querySelector('.player');
let playerLeftPos: string = '';
let playerBottomPos: string = '';
let prevPlayerX: number;
let interval: number = 0;
let playerFaceRight: boolean | null = null;
let playerMoves: boolean = false;
let playerChangedState: boolean = false;
// Player images
const playerRunLeft: string = 'https://i.postimg.cc/K8W8XYbr/runLeft.gif';
const playerRunRight: string = 'https://i.postimg.cc/1tGmNcqJ/runRight.gif';
const playerIdleLeft: string = 'https://i.postimg.cc/vBmHRdnd/idleLeft.gif';
const playerIdleRight: string = 'https://i.postimg.cc/K8fttBnc/idle-Right.gif';

/*interface player {
    x: number;
    y: number;
    img: string;
}

const player = {
    x: 50,
    y:50,
    img: 'https://i.postimg.cc/t4gXZksq/Idle-34x44.png',
}*/
const canvas: any = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const playerImg = document.createElement('img');
playerImg.src = 'https://i.postimg.cc/K8fttBnc/idle-Right.gif';

player.appendChild(playerImg);

document.addEventListener('keydown', (e: KeyboardEvent): void => {
    getPlayerPos();
    // Moving left/right
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
                //player.x -= 15;
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
})

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

const drawAnim = (x: number, y: number, width: number, height: number, src: string, framesNumber: number, interval: number, ctx: CanvasRenderingContext2D): void => {
    let image: HTMLImageElement = new Image();
    image.src = src;
    const thisFrame: number = Math.round(interval % ((framesNumber - 1) * 10) / 10)
    ctx.drawImage(image, width * thisFrame, 0, width, height, x, y, width, height);
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
    if (parseInt(playerLeftPos) < 650) {
        player.style.bottom = `${50}px`;
    } else if (parseInt(playerLeftPos) > 650) {
        player.style.bottom = `${250}px`;
    }
}
const gameLoop = (): void => {
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
    ctx.save();
    interval++;
    getPlayerPos();
    controllPlayerPosition();
    document.body.scrollIntoView();
    ctx.restore();
}

const render = setInterval((): void => {
    gameLoop();
}, 1000 / 60)