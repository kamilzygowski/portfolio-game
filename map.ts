const groundTileWidth = 96;
const stoneTileWidth = 64;
const groundTileYPosLvl0 = window.innerHeight - 112;
const groundTileYPosLvl1 = window.innerHeight - 180;
const groundTileYPosLvl2 = window.innerHeight - 308;

/* TILES */
const sky1 = new Image();
sky1.src = "https://i.postimg.cc/ZnvJWvXj/sky1.png";
const sky2 = new Image();
sky2.src = "https://i.postimg.cc/5jcbLNVJ/sky2.png";
const sky3 = new Image();
sky3.src = "https://i.postimg.cc/DZM2fPp8/sky3.png"
const sea1 = new Image();
sea1.src = "https://i.postimg.cc/nzgNXR49/sea1.png"
const sea2 = new Image();
sea2.src = "https://i.postimg.cc/NFXSm6DJ/sea2.png"

export const paintGrid = (sqmSize: number, ctx, grid): void => {
    window.onload = function () {

        grid.forEach((element: [], index: number, array: []): void => {
            element.forEach((elem: object, id: number, arr: []): void => {
                // Below comments checks if every squaremeter got correct position
                //ctx.fillStyle = 'red';
                //ctx.rect(sqmSize*id, sqmSize * index, sqmSize, sqmSize)
                //ctx.stroke()    


                if (index === array.length - 25 || index === array.length - 24 || index === array.length - 23 || index === array.length - 22 || index === array.length - 21 || index === array.length - 20 || index === array.length - 19 || index === array.length - 18 || index === array.length - 17 || index === array.length - 16 || index === array.length - 15 || index === array.length - 14 || index === array.length - 13) {
                    ctx.drawImage(sky1, sqmSize * id, sqmSize * index)
                }
                if (index === array.length - 12) {
                    ctx.drawImage(sky2, sqmSize * id, sqmSize * index)
                }
                if (index === array.length - 11 || index === array.length - 10 || index === array.length - 9 || index === array.length - 8 || index === array.length - 7 || index === array.length - 6) {
                    ctx.drawImage(sky3, sqmSize * id, sqmSize * index)
                }
                if (window.innerHeight <= 939) {
                    if (index === array.length - 1 || index === array.length - 2 || index === array.length - 3 || index === array.length - 4) {
                        ctx.drawImage(sea2, sqmSize * id, sqmSize * index)
                    }
                    if (index === array.length - 5) {
                        ctx.drawImage(sea1, sqmSize * id, sqmSize * index)
                    }
                } else if (window.innerHeight >= 960) {
                    if (index === array.length - 1 || index === array.length - 2 || index === array.length - 3 || index === array.length - 4 || index === array.length - 5) {
                        ctx.drawImage(sea2, sqmSize * id, sqmSize * index)
                    }
                    if (index === array.length - 6) {
                        ctx.drawImage(sea1, sqmSize * id, sqmSize * index)
                    }
                }else if (window.innerHeight >= 939){
                    if (index === array.length - 1 || index === array.length - 2 || index === array.length - 3 || index === array.length - 4 || index === array.length - 5 || index === array.length - 6) {
                        ctx.drawImage(sea2, sqmSize * id, sqmSize * index)
                    }
                    if (index === array.length - 7) {
                        ctx.drawImage(sea1, sqmSize * id, sqmSize * index)
                    }
                }
            })
        })
        const clouds = new Image();
        clouds.src = "https://i.postimg.cc/ZYHFT7Sw/clouds.png"
        clouds.onload = function () {
            for (let i = 0; i < 9200; i++) {
                ctx.drawImage(clouds, i * 544, window.innerHeight - 453)
            }
            ctx.drawImage(leftStone, groundTileWidth * 44, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 45 - 32, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 46 - 32 * 2, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 47 - 32 * 3, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 48 - 32 * 4, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 49 - 32 * 5, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 50 - 32 * 6, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 51 - 32 * 7, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 52 - 32 * 8, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 53 - 32 * 9, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 54 - 32 * 10, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 55 - 32 * 11, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 56 - 32 * 12, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 57 - 32 * 13, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 58 - 32 * 14, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 59 - 32 * 15, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 60 - 32 * 16, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 61 - 32 * 17, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 62 - 32 * 18, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 63 - 32 * 19, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 64 - 32 * 20, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 65 - 32 * 21, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 66 - 32 * 22, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 67 - 32 * 23, groundTileYPosLvl2);
            ctx.drawImage(middleStone, groundTileWidth * 68 - 32 * 24, groundTileYPosLvl2);
            ctx.drawImage(rightStone, groundTileWidth * 69 - 32 * 25, groundTileYPosLvl2);
        }
        ctx.drawImage(leftGround, 0, groundTileYPosLvl0)

        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 1, groundTileYPosLvl0)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 3, groundTileYPosLvl0)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 5, groundTileYPosLvl0)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 7, groundTileYPosLvl0)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 10 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 12 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 14 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 16 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 18 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 20 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 22 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 24 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 26 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 28 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 30 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 32 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundNotEmpty, groundTileWidth * 34 - 20, groundTileYPosLvl1)

        ctx.drawImage(middleGroundEmpty, groundTileWidth * 2, groundTileYPosLvl0)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 4, groundTileYPosLvl0)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 6, groundTileYPosLvl0)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 8, groundTileYPosLvl0)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 11 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 13 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 15 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 17 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 19 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 21 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 23 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 25 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 27 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 29 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 31 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 33 - 20, groundTileYPosLvl1)
        ctx.drawImage(middleGroundEmpty, groundTileWidth * 35 - 20, groundTileYPosLvl1)

        ctx.drawImage(leftGround, groundTileWidth * 9 - 20, groundTileYPosLvl1)

        for (let i = 9; i < 37; i++) {
            ctx.drawImage(blankEarth, groundTileWidth * i - 20, groundTileYPosLvl1 + 108)
        }
        ctx.drawImage(rightGround, groundTileWidth * 36 - 20, groundTileYPosLvl1);
        ctx.drawImage(rightGround, groundTileWidth * 37 - 50, groundTileYPosLvl1 + 88)

        ctx.drawImage(levitatingGround, 6176, groundTileYPosLvl2 + 180);
        ctx.drawImage(levitatingGround, 6176 + 300, groundTileYPosLvl2 + 180);
        ctx.drawImage(levitatingGround, 6176 + 300 * 2, groundTileYPosLvl2 + 180);
        ctx.drawImage(levitatingGround, 6176 + 300 * 3, groundTileYPosLvl2 + 180);
        ctx.drawImage(levitatingGround, 6176 + 300 * 4, groundTileYPosLvl2 + 180);
        ctx.drawImage(levitatingGround, 6176 + 300 * 5, groundTileYPosLvl2 + 180);

        ctx.drawImage(leftBarrier, 6176, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 2, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 3, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 4, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 5, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 6, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 7, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 8, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 9, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 10, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 11, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 12, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 13, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 14, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 15, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 16, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 17, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 18, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 19, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 20, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 21, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 22, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 23, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 24, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 25, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 26, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 27, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 28, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 29, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 30, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 31, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 32, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 33, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 34, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 35, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 36, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 37, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 38, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 39, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 40, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 41, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 42, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 43, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 44, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 45, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 46, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 47, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 48, groundTileYPosLvl2 + 155);
        ctx.drawImage(middleBarrier, 6176 + 41 + 32 * 49, groundTileYPosLvl2 + 155);
        ctx.drawImage(rightBarrier, 6176 + 41 + 32 * 50, groundTileYPosLvl2 + 155);

    }


    const leftGround = new Image();
    leftGround.src = "https://i.postimg.cc/Xq8Ykpw9/ground-Left.png"
    const middleGroundEmpty = new Image();
    middleGroundEmpty.src = "https://i.postimg.cc/hPDjP1Bs/ground-Middle-Empty.png"
    const middleGroundNotEmpty = new Image();
    middleGroundNotEmpty.src = "https://i.postimg.cc/bYHrhFKd/ground-Middle-Not-Empty.png"
    const rightGround = new Image();
    rightGround.src = "https://i.postimg.cc/cCZJ3Q8s/ground-Right.png"
    const blankEarth = new Image();
    blankEarth.src = "https://i.postimg.cc/NFQShxn2/earth-Blank.png";
    const leftStone = new Image();
    leftStone.src = "https://i.postimg.cc/VLH8t5tT/left-Stone.png";
    const middleStone = new Image();
    middleStone.src = "https://i.postimg.cc/Sx2pfq7K/middle-Stone.png";
    const rightStone = new Image();
    rightStone.src = "https://i.postimg.cc/zGsYdM0F/right-Stone.png"
    const levitatingGround = new Image();
    levitatingGround.src = "https://i.postimg.cc/SN0wVZcq/lebitating-Ground.png";
    const leftBarrier = new Image();
    leftBarrier.src = "https://i.postimg.cc/13B2ms25/left-Barrier.png"
    const middleBarrier = new Image();
    middleBarrier.src = "https://i.postimg.cc/NjBZv5Nz/middle-Barrier.png"
    const rightBarrier = new Image();
    rightBarrier.src = "https://i.postimg.cc/3JgzqgZG/right-Barrier.png";