import { System } from "../../../src/system.js";
import { keymap } from "../util/keyboard.js";

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