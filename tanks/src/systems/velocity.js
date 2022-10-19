import { System } from "../../../src/system.js";

export const velocitySystem = new System("velocity", ["position", "velocity"], (entity) => {
    entity.components.position.x += entity.components.velocity.x;
    entity.components.position.y += entity.components.velocity.y;
});

export const rotationVelocitySystem = new System("rotation_velocity", ["rotation", "rotation_velocity"], (entity) => {
    entity.components.rotation.angle += entity.components.rotation_velocity.velocity;
});