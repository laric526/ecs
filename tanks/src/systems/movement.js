import { System } from "../../../src/system.js";

export const movementSystem = new System("movement",
    ["rotation", "speed", "rotation_speed", "velocity", "rotation_velocity", "input", "player_controlled"],
    (entity) => {
        const x = Math.sin(entity.components.rotation.angle) * entity.components.input.axes.longitudinal;
        const y = -Math.cos(entity.components.rotation.angle) * entity.components.input.axes.longitudinal;

        entity.components.velocity.x = x * entity.components.speed.speed;
        entity.components.velocity.y = y * entity.components.speed.speed;

        entity.rotation_velocity.velocity = entity.components.input.axes.lateral * entity.components.rotation_speed.speed;
    }
);