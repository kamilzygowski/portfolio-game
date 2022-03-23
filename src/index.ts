import '@/styles/index.scss'

import { paintGrid } from './map';
import { throttle, createGrid, scrollToModified } from './utils';

const player: HTMLElement = document.querySelector('.player');
let playerLeftPos: string = '';
let playerBottomPos: string = '';
let interval: number = 0;
let playerFaceRight: boolean | null = null;
let playerMoves: boolean = false;
let playerFly: boolean = false;
let playerChangedState: boolean = false;
let treasureChestOpened: boolean = false;
let grid = [];
let playerScrollPos: number = 0;
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
const bat: HTMLImageElement = document.querySelector('.bat');
const skillsBars: HTMLElement = document.querySelector('.skillsBars');
const skillsLabels: HTMLElement = document.querySelector('.skillsLabels');
const marioPlant: HTMLElement = document.querySelector('.marioPlant');
const canvas: any = document.getElementById('canvas');
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
canvas.width = 10400;
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
                if (parseInt(playerLeftPos) <= 7750) {
                    if (!playerFaceRight || playerFaceRight === null) {
                        playerMoves = true;
                        playerFaceRight = true;
                        playerChangedState = true;
                    }
                    playerScrollPos = parseInt(playerLeftPos) + 3150
                    player.style.left = `${parseInt(playerLeftPos) + 22}px`;

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
                    playerScrollPos = parseInt(playerLeftPos) - 6150
                    player.style.left = `${parseInt(playerLeftPos) - 22}px`;

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
const fromPxToIntConveter = (px) => {
    let res = '';
    for (let i: number = 0; i < Array.from(px).length - 2; i++) {
        res += Array.from(player.style.left)[i]
    }
    return parseInt(res);
}
function cameraController() {
    window.scroll({
        left: playerScrollPos - 400,
        top: 0,
        behavior: 'smooth'
    });
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
        player.style.bottom = `${227}px`;
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
        player.style.bottom = `${290}px`;
    } else if (parseInt(playerLeftPos) > 1890 && parseInt(playerLeftPos) < 1960) {
        designBar.style.height = `${340}px`
    } else if (parseInt(playerLeftPos) > 1960 && parseInt(playerLeftPos) < 2010) {
        codeBar.style.height = `${283}px`
    } else if (parseInt(playerLeftPos) > 2010 && parseInt(playerLeftPos) < 3150) {
        bat.style.bottom = `${2000}px`
        creativityBar.style.height = `${374}px`
    } else if (parseInt(playerLeftPos) > 3150 && parseInt(playerLeftPos) < 3180) {
        playerFly = false;
        bat.style.bottom = `${533}px`
        player.style.bottom = `${290}px`
    } else if (parseInt(playerLeftPos) > 3180 && parseInt(playerLeftPos) < 4280) {
        playerFly = true;
        bat.style.bottom = `${parseInt(playerBottomPos) - 30}px`
        bat.style.left = `${playerLeftPos}px`
        player.style.bottom = `${530}px`
    } else if (parseInt(playerLeftPos) > 4280 && parseInt(playerLeftPos) < 4500) {
        playerFly = false;
        bat.style.bottom = `${2000}px`
        bat.style.left = `${4900}px`
        player.style.bottom = `${420}px`
        skillsBars.style.bottom = `${1500}px`;
        skillsLabels.style.bottom = `${-1000}px`;
    } else if (parseInt(playerLeftPos) > 4500 && parseInt(playerLeftPos) < 5750) {
        skillsBars.style.bottom = `${265}px`;
        skillsLabels.style.bottom = `${295}px`;
        player.style.bottom = `${420}px`
    } else if (parseInt(playerLeftPos) > 5750 && parseInt(playerLeftPos) < 5800) {
        //player.style.bottom = `${270}px`
        player.style.bottom = `${420}px`

    } else if (parseInt(playerLeftPos) > 5800 && parseInt(playerLeftPos) < 5825) {
        player.style.bottom = `${420}px`

    } else if (parseInt(playerLeftPos) > 5825 && parseInt(playerLeftPos) < 5850) {
        player.style.bottom = `${430}px`
    } else if (parseInt(playerLeftPos) > 5850 && parseInt(playerLeftPos) < 5875) {
        player.style.bottom = `${440}px`
    } else if (parseInt(playerLeftPos) > 5875 && parseInt(playerLeftPos) < 5900) {
        player.style.bottom = `${450}px`
        marioPlant.style.bottom = `${0}px`
    } else if (parseInt(playerLeftPos) > 5900 && parseInt(playerLeftPos) < 5925) {
        player.style.bottom = `${460}px`

    } else if (parseInt(playerLeftPos) > 5925 && parseInt(playerLeftPos) < 5950) {
        player.style.bottom = `${470}px`
        marioPlant.style.bottom = `${170}px`
    } else if (parseInt(playerLeftPos) > 5950 && parseInt(playerLeftPos) < 5975) {
        player.style.bottom = `${455}px`

    } else if (parseInt(playerLeftPos) > 5975 && parseInt(playerLeftPos) < 6000) {
        player.style.bottom = `${430}px`
        marioPlant.style.bottom = `${0}px`
    } else if (parseInt(playerLeftPos) > 6000 && parseInt(playerLeftPos) < 6025) {
        player.style.bottom = `${405}px`
    } else if (parseInt(playerLeftPos) > 6025 && parseInt(playerLeftPos) < 6050) {
        player.style.bottom = `${370}px`

    } else if (parseInt(playerLeftPos) > 6050 && parseInt(playerLeftPos) < 6075) {
        player.style.bottom = `${340}px`

    } else if (parseInt(playerLeftPos) > 6075 && parseInt(playerLeftPos) < 6100) {
        player.style.bottom = `${310}px`
        //player.style.transform = `rotate(${7200}deg)`
    } else if (parseInt(playerLeftPos) > 6100 && parseInt(playerLeftPos) < 6125) {
        player.style.bottom = `${285}px`
        player.style.transform = `rotate(${0}deg)`
    } else if (parseInt(playerLeftPos) > 6125) {
        player.style.bottom = `${285}px`
    }
    //console.log(playerLeftPos)
}

createGrid(48, grid, canvas);
paintGrid(48, ctx, grid)

const gameLoop = (): void => {
    ctx.save();
    interval++;
    //window.scrollX = parseInt(playerLeftPos)
    //console.log(window.scrollY)
    //ctx.translate(parseInt(playerLeftPos) - canvas.width / 2, parseInt(playerBottomPos) - canvas.height / 2);
    if (interval > 150) {
        cameraController()
    }
    // Check player state to attach correct anim to it every frame
    if (playerChangedState) {
        playerScrollPos = parseInt(playerLeftPos);
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
    ctx.restore();
}

const render = setInterval((): void => {
    gameLoop();
}, 1000 / 60)

const about: any = document.querySelector('.about')
about.style.display = "block";

const iframesUl: NodeListOf<Element> = document.querySelectorAll('.iframeLi');
const projectsHeader: HTMLElement = document.querySelector('.projectsHeader');
const projectsParagraph: HTMLElement = document.querySelector('.projectsParagraph');
const projectsInfoUl: HTMLElement = document.querySelector('.projectsInfoUl');
const visitWebsite: HTMLLinkElement = document.querySelector('.projectsLinks');
for (let i = 0; i < iframesUl.length; i++) {
    iframesUl[i].addEventListener('click', function () {
        const iframe: HTMLIFrameElement = document.querySelector('.planetarium');
        for (let y = 0; y < iframesUl.length; y++) {
            iframesUl[y].classList.remove('planetariumLi');
        }
        if (i === 0) {
            iframe.src = "https://swedishsailor.github.io/planetarium/";
            iframesUl[i].classList.add('planetariumLi');
            projectsHeader.textContent = 'Planetarium'
            projectsParagraph.textContent = 'Planetarium is a solar system model. You can freely manipulate the view by grabbing window or by scrolling '
            projectsInfoUl.innerHTML = '<li class="projectsInfoLi">JavaScript</li>';
            projectsInfoUl.innerHTML += '<li class="projectsInfoLi">THREE.js</li>';
            visitWebsite.href = "https://swedishsailor.github.io/planetarium/";
        }
        else if (i === 1) {
            iframe.src = "https://deepintopic.pl/";
            iframesUl[i].classList.add('planetariumLi');
            projectsHeader.textContent = 'Depp in topic';
            projectsParagraph.textContent = 'Deep in topic is a personal pseudo-scientific blog'
            projectsInfoUl.innerHTML = '<li class="projectsInfoLi">React</li>';
            projectsInfoUl.innerHTML += '<li class="projectsInfoLi">Redux</li>';
            visitWebsite.href = "https://deepintopic.pl/";
        }
        else if (i === 2) {
            iframe.src = "https://swedishsailor.github.io/";
            iframesUl[i].classList.add('planetariumLi');
            projectsHeader.textContent = 'Old Portfolio'
            projectsParagraph.textContent = 'Old portfolio site with some unity projects in game section :)'
            projectsInfoUl.innerHTML = '<li class="projectsInfoLi">React</li>';
            visitWebsite.href = "https://swedishsailor.github.io/";
        }
        else if (i === 3) {
            iframe.src = "https://swedishsailor.github.io/frankyCars/";
            iframesUl[i].classList.add('planetariumLi');
            projectsHeader.textContent = "Franky Cars"
            projectsParagraph.textContent = 'a website created in 5 days. Simple car warehouse asortment demonstration'
            projectsInfoUl.innerHTML = '<li class="projectsInfoLi">React Typescript</li>';
            projectsInfoUl.innerHTML += '<li class="projectsInfoLi">Sqlite</li>';
            visitWebsite.href = "https://swedishsailor.github.io/frankyCars/";
        }
    })
}
// Always comeback to the start with camera ASAP and run it as a LAST CODE LINE
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
// Init first UL iframe item
iframesUl[0].classList.add('planetariumLi');