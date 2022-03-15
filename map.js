const groundTileWidth = 96;
const groundTileYPosLvl0 = window.innerHeight - 112;
const groundTileYPosLvl1 = window.innerHeight - 180;
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
export const drawEnvironment = (ctx) => {
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
export const paintGrid = (sqmSize, ctx, grid) => {
    grid.forEach((element, index, array) => {
        element.forEach((elem, id, arr) => {
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
