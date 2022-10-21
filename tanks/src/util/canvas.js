const BACKGROUND_COLOR = "bisque"

var ctx;

const spriteScale = 1;

const width = 256;
const height = 256;
// TODO: use canvas scale insread of render scale in a lot of places
// previously w/h was 256 and html w/h was 512, 2x scale means they were equal, and i used the wrong one often
export var canvasScale = 1;
export const renderScale = 2;

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
    const width = sprite.width * renderScale * spriteScale;
    const height = sprite.height * renderScale * spriteScale;

    ctx.translate(x * renderScale, y * renderScale);
    ctx.rotate(angle);
    ctx.drawImage(sprite, -width / 2, -height / 2, width, height);
    ctx.rotate(-angle);
    ctx.translate(-x * renderScale, -y * renderScale);
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