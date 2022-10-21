import { System } from "../../../src/system.js";
import { addToRenderQueue } from "../util/canvas.js";
import { sprites } from "../util/sprites.js";

export const renderSystem = new System("render", ["sprite", "position", "render"], (entity) => {
    const sprite = sprites[entity.components.sprite.sprite];

    const x = entity.components.position.x;
    const y = entity.components.position.y;

    var angle = 0;
    if (entity.components.rotation) { angle = entity.components.rotation.angle }

    const zIndex = entity.components.sprite.zIndex;

    addToRenderQueue(sprite, x, y, angle, zIndex);
});