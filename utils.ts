export const drawAnim = (x: number, y: number, width: number, height: number, src: string, framesNumber: number, interval:number, ctx:CanvasRenderingContext2D): void => {
    let image: HTMLImageElement = new Image();
    image.src = src;
    const thisFrame: number = Math.round(interval % ((framesNumber - 1) * 10) / 10)
    ctx.drawImage(image, width * thisFrame, 0, width, height, x, y, width, height);
}
