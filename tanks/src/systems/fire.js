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

        missile.components.velocity.x = Math.sin(angle);
        missile.components.velocity.y = -Math.cos(angle);

        missile.components.rotation.angle = angle;

        fired = true;
    }
});