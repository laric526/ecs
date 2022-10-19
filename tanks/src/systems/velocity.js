import { System } from "../../../src/system.js";

export const velocitySystem = new System("velocity", ["position", "velocity"], (entity) => {
    entity.components.position.x += entity.components.velocity.x;
    entity.components.position.y += entity.components.velocity.y;
});

export const rotationVelocitySystem = new System("rotation_velocity", ["rotation", "rotation_velocity"], (entity) => {
    const degrees = entity.components.rotation.angle * 180 / Math.PI;

    entity.components.rotation.angle = (degrees + entity.components.rotation_velocity.velocity) * Math.PI / 180;
});