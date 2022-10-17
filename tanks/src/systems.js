import { System } from "../../src/system.js";

export const velocitySystem = new System("velocity", ["position", "velocity"], (entity) => {
    entity.components.position.x += entity.components.velocity.x;
    entity.components.position.y += entity.components.velocity.y;
});