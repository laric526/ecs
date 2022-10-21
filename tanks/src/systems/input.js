import { System } from "../../../src/system.js";
import { keymap } from "../util/keyboard.js";
import { mouse } from "../util/mouse.js";

export const inputSystem = new System("input", ["input", "player_controlled"], (entity) => {
    let longitudinal = 0;
    if (keymap.w) { longitudinal++ }
    if (keymap.s) { longitudinal-- }

    let lateral = 0;
    if (keymap.a) { lateral-- }
    if (keymap.d) { lateral++ }

    entity.components.input.axes.longitudinal = longitudinal;
    entity.components.input.axes.lateral = lateral;

    entity.components.input.fire = keymap.space || mouse.left;
    entity.components.input.bomb = keymap.shift || mouse.right;
});