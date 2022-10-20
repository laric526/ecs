const BACKGROUND_COLOR = "bisque"

var ctx;

const width = 256;
const height = 256;

const renderScale = 4;
export var canvasScale = 1;

export function initializeCanvas(canvas) {
    canvas.width = width;
    canvas.height = height;

    canvasScale = canvas.scrollHeight / height;

    canvas.style.backgroundColor = "red";

    ctx = canvas.getContext("2d");
}

export function drawSprite(sprite, x, y, angle) {
    const width = sprite.width;
    const height = sprite.height;

    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.drawImage(sprite, -width / 2, -height / 2, width, height);
    ctx.rotate(-angle);
    ctx.translate(-x, -y);
}

export function clearCanvas() {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, width, height);
}