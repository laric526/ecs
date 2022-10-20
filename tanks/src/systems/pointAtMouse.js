import { System } from "../../../src/system.js";
import { mouse } from "../util/mouse.js";

export const pointAtMouseSystem = new System("point_at_mouse", ["position", "rotation", "point_at_mouse"], (entity) => { 
    console.log(`Getting X and Y from entity...`);
    const x = entity.components.position.x;
    const y = entity.components.position.y;
    console.log(`Got (${x}, ${y})`);

    console.log(`Calculating angle...`);
    const angle = Math.atan2(mouse.pos.y - y, mouse.pos.x - x) + Math.PI / 2;
    console.log(`Calculated ${angle}`);

    console.log(`Applying angle...`);
    entity.components.rotation.angle = angle;
    console.log(`Applied. Entities angle is now ${entity.components.rotation.angle}`);
});