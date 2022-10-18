import { System } from "../../src/system.js";
import { drawSprite } from "./util/canvas.js";
import { sprites } from "./util/sprites.js";

export const renderSystem = new System("render", ["sprite", "position"], (entity) => {
    const sprite = sprites[entity.components.sprite.sprite];
    const x = entity.components.position.x;
    const y = entity.components.position.y;

    var angle = 0;
    if (entity.components.rotation) { angle = entity.components.rotation.angle }

    drawSprite(sprite, x, y, angle);
});