export const drawAnim = (x: number, y: number, width: number, height: number, src: string, framesNumber: number, interval: number, ctx: CanvasRenderingContext2D): void => {
    let image: HTMLImageElement = new Image();
    image.src = src;
    const thisFrame: number = Math.round(interval % ((framesNumber - 1) * 10) / 10)
    ctx.drawImage(image, width * thisFrame, 0, width, height, x, y, width, height);
}
export function scrollToModified(element, duration) {
    var e = document.documentElement;
    if (e.scrollLeft === 0) {
        var t = e.scrollLeft;
        ++e.scrollLeft;
        e = t + 1 === e.scrollLeft-- ? e : document.body;
    }
    scrollToC(e, e.scrollLeft, element, duration);
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
    if (duration <= 0) return;
    if (typeof from === "object") from = from.offsetLeft - window.innerWidth / 4;
    if (typeof to === "object") to = to.offsetLeft - window.innerWidth / 4;

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
    t++;
    return t === 0 ? 0 : Math.pow(2, 10 * t - 10);
}

export function throttle(func, interval) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = false;
        };
        if (!timeout) {
            func.apply(context, args)
            timeout = true;
            setTimeout(later, interval)
        }
    }
}
export const createGrid = (sqmSize: number, parentArray: Array<number[]>, canvas): void => {
    const width: number = canvas.width;
    const height: number = window.innerHeight;
    const gridX: number = Math.ceil(width / sqmSize);
    const gridY: number = Math.ceil(height / sqmSize);
    for (let i = 0; i < gridY; i++) {
        const newRow: Array<number> = Array.from(Array(gridX))
        for (let y = 0; y < newRow.length; y++) {
            newRow[y] = 0;
        }
        parentArray.push(newRow)
    }
}