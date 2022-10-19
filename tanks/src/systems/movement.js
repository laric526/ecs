import { System } from "../../../src/system.js";

export const movementSystem = new System("movement",
    ["rotation", "velocity", "input", "player_controlled"],
    (entity) => {
        const x = Math.sin(entity.components.rotation.angle) * entity.components.input.axes.longitudinal;
        const y = -Math.cos(entity.components.rotation.angle) * entity.components.input.axes.longitudinal;

        entity.components.velocity.x = x;
        entity.components.velocity.y = y;
    }
);