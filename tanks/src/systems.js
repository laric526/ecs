import { System } from "../../src/system.js";
import { drawSprite } from "./util/canvas.js";
import { keymap } from "./util/keyboard.js";
import { sprites } from "./util/sprites.js";

export const velocitySystem = new System("velocity", ["position", "velocity"], (entity) => {
    entity.components.position.x += entity.components.velocity.x;
    entity.components.position.y += entity.components.velocity.y;
});

export const inputSystem = new System("input", ["input"], (entity) => {
    let longitudinal = 0;
    if (keymap.w) { longitudinal++ }
    if (keymap.s) { longitudinal-- }

    let lateral = 0;
    if (keymap.a) { longitudinal-- }
    if (keymap.d) { longitudinal++ }

    entity.components.input.axes.longitudinal = longitudinal;
    entity.components.input.axes.lateral = lateral;

    entity.components.input.fire = keymap.space;
    entity.components.input.bomb = keymap.shift;
});

export const renderSpriteSystem = new System("render_sprite", ["sprite", "position"], (entity) => {
    const sprite = sprites[entity.components.sprite.sprite];
    const x = entity.components.position.x;
    const y = entity.components.position.y;

    var angle = 0;
    if (entity.components.rotation) { angle = entity.components.rotation.angle }

    drawSprite(sprite, x, y, angle);
});