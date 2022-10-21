const BACKGROUND_COLOR = "bisque"

var ctx;

const renderScale = 4;

const width = 256;
const height = 256;

export var canvasScale = 1;

var renderQueue = [];

export function initializeCanvas(canvas) {
    canvas.width = width * renderScale;
    canvas.height = height * renderScale;

    canvasScale = canvas.scrollHeight / canvas.height;

    canvas.style.backgroundColor = "red";

    ctx = canvas.getContext("2d");

    ctx.imageSmoothingEnabled = false;
}

export function addToRenderQueue(sprite, x, y, angle, zIndex) {
    renderQueue[zIndex].push({
        sprite: sprite,
        x: x,
        y: y,
        angle: angle
    });
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
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, width, height);
}

export function renderCanvas() {
    if (renderQueue.length > 0) {
        renderQueue.forEach((zIndex, i) => {
            zIndex.forEach((sprite, i) => {
                drawSprite(sprite.sprite, sprite.x, sprite.y, sprite.angle);
            });
        });
    }

    renderQueue = [];
}