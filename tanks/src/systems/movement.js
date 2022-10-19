import { System } from "../../../src/system.js";

export const movementSystem = new System("movement",
    ["rotation", "velocity", "input", "player_controlled"],
    (entity) => {
        const direction = entity.components.rotation.angle * entity.components.input.axes.longitudinal;

        entity.components.velocity.x = Math.sin(direction);
        entity.components.velocity.y = -Math.cos(direction);

        console.log(entity.components.input.axes.longitudinal);
        console.log(direction);
        console.log(entity.components.velocity);
    }
);