import { System } from "../../../src/system.js";

export const movementSystem = new System("movement",
 ["rotation", "velocity", "input", "player_controlled"],
 (entity) => {
    const direction = angle * entity.components.input.axes.longitudinal;

    entity.components.velocity.x = Math.sin(direction);
    entity.components.velocity.y = -Math.cos(direction);
 }
);