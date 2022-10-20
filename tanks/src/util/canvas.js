const BACKGROUND_COLOR = "bisque"

var ctx;

const renderScale = 4;

const width = 256;
const height = 256;

const renderWidth = width * renderScale;
const renderHeight = height * renderScale;

export var canvasScale = 1;

export function initializeCanvas(canvas) {
    canvas.width = renderWidth;
    canvas.height = renderHeight;

    canvasScale = canvas.scrollHeight / height;

    canvas.style.backgroundColor = "red";

    ctx = canvas.getContext("2d");
}

export function drawSprite(sprite, x, y, angle) {
    const width = sprite.width * renderScale;
    const height = sprite.height * renderScale;

    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.drawImage(sprite, -width / 2, -height / 2, width, height);
    ctx.rotate(-angle);
    ctx.translate(-x, -y);
}

export function clearCanvas() {
    const width = renderWidth;
    const height = renderHeight;

    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, width, height);
}