const BACKGROUND_COLOR = "bisque"

var ctx;

const size = 16; // how many sprites/tiles wide the canvas should be

const pixelResolution = size * 16; // 16 = sprite/tile size
export var pixelSize;

var renderQueue = [];

export function initializeCanvas(canvas) {
    pixelSize = canvas.scrollHeight / pixelResolution;

    canvas.width = pixelResolution * pixelSize;
    canvas.height = pixelResolution * pixelSize;

    canvas.style.backgroundColor = "red";

    ctx = canvas.getContext("2d");

    ctx.imageSmoothingEnabled = false;
}

export function addToRenderQueue(sprite, x, y, angle, zIndex) {
    zIndex += 100;
    
    if (!renderQueue[zIndex]) { renderQueue[zIndex] = []; }
    
    renderQueue[zIndex].push({
        sprite: sprite,
        x: x,
        y: y,
        angle: angle
    });
}

export function drawSprite(sprite, x, y, angle) {
    const width = sprite.width * pixelSize;
    const height = sprite.height * pixelSize;

    ctx.translate(x * pixelSize, y * pixelSize);
    ctx.rotate(angle);
    ctx.drawImage(sprite, -width / 2, -height / 2, width, height);
    ctx.rotate(-angle);
    ctx.translate(-x * pixelSize, -y * pixelSize);
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