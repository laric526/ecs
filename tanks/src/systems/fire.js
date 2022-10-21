import { System } from "../../../src/system.js";
import { duplicateEntity } from "../../../src/entity.js";
import { missileEntity } from "../entities.js";

var fired = false;

export const fireSystem = new System("fire", ["input", "position", "rotation", "tank", "player_controlled"], (entity, world) => {
    if (entity.components.input.fire && !fired) {
        const cannon = world.getEntity(entity.components.tank.cannon);
        const angle = cannon.components.rotation.angle;

        const missile = world.createEntity(duplicateEntity(missileEntity));
        missile.components.position.x = entity.components.position.x;
        missile.components.position.y = entity.components.position.y;
        missile.components.rotation.angle = angle;
        missile.components.velocity.y = 1;

        fired = true;
    }
});