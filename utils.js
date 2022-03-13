export const drawAnim = (x, y, width, height, src, framesNumber, interval, ctx) => {
    let image = new Image();
    image.src = src;
    const thisFrame = Math.round(interval % ((framesNumber - 1) * 10) / 10);
    ctx.drawImage(image, width * thisFrame, 0, width, height, x, y, width, height);
};
