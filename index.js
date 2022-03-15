const player = document.querySelector('.player');
let playerLeftPos = '';
let playerBottomPos = '';
let prevPlayerX;
let interval = 0;
let playerFaceRight = null;
let playerMoves = false;
let playerChangedState = false;
let treasureChestOpened = false;
let grid = [];
let gridCloudsPos;
let gridSeaPos;
const playerRunLeft = 'https://i.postimg.cc/K8W8XYbr/runLeft.gif';
const playerRunRight = 'https://i.postimg.cc/1tGmNcqJ/runRight.gif';
const playerIdleLeft = 'https://i.postimg.cc/vBmHRdnd/idleLeft.gif';
const playerIdleRight = 'https://i.postimg.cc/K8fttBnc/idle-Right.gif';
const designBar = document.querySelector('.designBar');
const codeBar = document.querySelector('.codeBar');
const creativityBar = document.querySelector('.creativityBar');
const treasureChest = document.querySelector('.treasureChest');
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
const createGrid = (sqmSize, parentArray) => {
    const width = canvas.width;
    const height = window.innerHeight;
    const gridX = Math.ceil(width / sqmSize);
    const gridY = Math.ceil(height / sqmSize);
    for (let i = 0; i < gridY; i++) {
        const newRow = Array.from(Array(gridX));
        for (let y = 0; y < newRow.length; y++) {
            newRow[y] = 0;
        }
        parentArray.push(newRow);
    }
};
const sky1 = new Image();
sky1.src = "https://i.postimg.cc/ZnvJWvXj/sky1.png";
const sky2 = new Image();
sky2.src = "https://i.postimg.cc/5jcbLNVJ/sky2.png";
const sky3 = new Image();
sky3.src = "https://i.postimg.cc/DZM2fPp8/sky3.png";
const sea1 = new Image();
sea1.src = "https://i.postimg.cc/nzgNXR49/sea1.png";
const sea2 = new Image();
sea2.src = "https://i.postimg.cc/NFXSm6DJ/sea2.png";
const clouds = new Image();
clouds.src = "https://i.postimg.cc/ZYHFT7Sw/clouds.png";
const leftGround = new Image();
leftGround.src = "https://i.postimg.cc/Xq8Ykpw9/ground-Left.png";
const middleGroundEmpty = new Image();
middleGroundEmpty.src = "https://i.postimg.cc/hPDjP1Bs/ground-Middle-Empty.png";
const middleGroundNotEmpty = new Image();
middleGroundNotEmpty.src = "https://i.postimg.cc/bYHrhFKd/ground-Middle-Not-Empty.png";
const rightGround = new Image();
rightGround.src = "https://i.postimg.cc/cCZJ3Q8s/ground-Right.png";
const blankEarth = new Image();
blankEarth.src = "https://i.postimg.cc/NFQShxn2/earth-Blank.png";
const paintGrid = (sqmSize) => {
    grid.forEach((element, index, array) => {
        element.forEach((elem, id, arr) => {
            if (index === 15)
                gridCloudsPos = id;
            if (index === array.length - 1)
                gridSeaPos = id;
            if (index === array.length - 25 || index === array.length - 24 || index === array.length - 23 || index === array.length - 22 || index === array.length - 21 || index === array.length - 20 || index === array.length - 19 || index === array.length - 18 || index === array.length - 17 || index === array.length - 16 || index === array.length - 15 || index === array.length - 14 || index === array.length - 13) {
                ctx.drawImage(sky1, sqmSize * id, sqmSize * index);
            }
            else if (index === array.length - 12) {
                ctx.drawImage(sky2, sqmSize * id, sqmSize * index);
            }
            else if (index === array.length - 11 || index === array.length - 10 || index === array.length - 9 || index === array.length - 8 || index === array.length - 7 || index === array.length - 6) {
                ctx.drawImage(sky3, sqmSize * id, sqmSize * index);
            }
            else if (index === array.length - 1 || index === array.length - 2 || index === array.length - 3 || index === array.length - 4) {
                ctx.drawImage(sea2, sqmSize * id, sqmSize * index);
            }
            else if (index === array.length - 5) {
                ctx.drawImage(sea1, sqmSize * id, sqmSize * index);
            }
        });
    });
};
function throttle(func, interval) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = false;
        };
        if (!timeout) {
            func.apply(context, args);
            timeout = true;
            setTimeout(later, interval);
        }
    };
}
const cameraController = () => {
    window.scrollTo({
        left: (parseInt(playerLeftPos) - 132 / 2 - window.innerWidth / 3),
    });
};
function scrollTo(element, duration) {
    var e = document.documentElement;
    if (e.scrollLeft === 0) {
        var t = e.scrollLeft;
        ++e.scrollLeft;
        e = t + 1 === e.scrollLeft-- ? e : document.body;
    }
    scrollToC(e, e.scrollLeft, element, duration);
}
function scrollToC(element, from, to, duration) {
    if (duration <= 0)
        return;
    if (typeof from === "object")
        from = from.offsetLeft - window.innerWidth / 4;
    if (typeof to === "object")
        to = to.offsetLeft - window.innerWidth / 4;
    scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}
function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
    if (t01 < 0 || t01 > 1 || speed <= 0) {
        element.style.left = xTo;
        return;
    }
    element.style.left = xFrom - (xFrom - xTo) * motion(t01);
    t01 += speed * step;
    setTimeout(function () {
        scrollToX(element, xFrom, xTo, t01, speed, step, motion);
    }, step);
}
function easeOutCuaic(t) {
    t--;
    return t * t * t + 1;
}
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
    else if (parseInt(playerLeftPos) > 2010) {
        creativityBar.style.height = `${333}px`;
    }
};
const drawEnvironment = () => {
    const groundTileWidth = 96;
    const groundTileYPosLvl0 = window.innerHeight - 112;
    const groundTileYPosLvl1 = window.innerHeight - 180;
    console.log(groundTileYPosLvl0, groundTileYPosLvl1);
    ctx.drawImage(leftGround, 0, groundTileYPosLvl0);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 1, groundTileYPosLvl0);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 2, groundTileYPosLvl0);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 3, groundTileYPosLvl0);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 4, groundTileYPosLvl0);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 5, groundTileYPosLvl0);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 6, groundTileYPosLvl0);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 7, groundTileYPosLvl0);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 8, groundTileYPosLvl0);
    ctx.drawImage(leftGround, groundTileWidth * 9 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 9 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 10 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 10 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 11 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 11 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 12 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 12 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 13 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 13 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 14 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 14 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 15 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 15 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 16 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 16 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 17 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 17 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 18 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 18 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 19 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 19 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 20 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 20 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 21 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 21 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 22 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 22 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 23 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 23 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 24 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 24 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 25 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 25 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 26 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 26 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 27 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 27 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 28 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 28 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 29 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 29 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 30 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 30 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 31 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 31 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 32 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 32 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 33 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 33 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 34 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 34 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 35 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 35 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 36 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 36 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 37 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 37 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 38 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 38 - 20, groundTileYPosLvl1 + 108);
    ctx.drawImage(middleGroundEmpty, groundTileWidth * 39 - 20, groundTileYPosLvl1);
    ctx.drawImage(blankEarth, groundTileWidth * 39 - 20, groundTileYPosLvl1 + 108);
};
createGrid(48, grid);
paintGrid(48);
for (let i = 0; i < canvas.width; i++) {
    ctx.drawImage(clouds, i * 544, window.innerHeight - 453);
}
drawEnvironment();
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
