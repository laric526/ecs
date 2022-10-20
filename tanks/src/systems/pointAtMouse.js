import { System } from "../../../src/system.js";
import { mouse } from "../util/mouse.js";

export const pointAtMouseSystem = new System("point_at_mouse", ["position", "rotation", "point_at_mouse"], (entity) => { 
    const x = entity.components.position.x;
    const y = entity.components.position.y;

    const angle = Math.atan2(mouse.pos.y - y, mouse.pos.x - x) + Math.PI / 2;

    entity.components.rotation.angle = angle;
});