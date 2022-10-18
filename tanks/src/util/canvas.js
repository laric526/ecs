var ctx;

export function initializeCanvas(canvas) {
    ctx = canvas.getContext("2d");
    console.log(ctx);
}

export function drawSprite(sprite, x, y, angle) {
    const width = sprite.width;
    const height = sprite.height;

    ctx.translate(x, y);
    context.rotate(angle);
    context.drawImage(sprite, -width / 2, -height / 2, width, height);
    context.rotate(-angle);
    context.translate(-x, -y);
}