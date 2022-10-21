import { System } from "../../../src/system.js";
import { duplicateEntity } from "../../../src/entity.js";
import { missileEntity } from "../entities.js";

export const fireSystem = new System("fire", ["input", "position", "rotation", "tank", "player_controlled"], (entity, world) => {
    const reloadTimer = entity.components.tank.reloadTimer;

    if (reloadTimer == 0 && entity.components.input.fire) {
        const cannon = world.getEntity(entity.components.tank.cannon);
        const angle = cannon.components.rotation.angle;

        const missile = world.createEntity(duplicateEntity(missileEntity));

        missile.components.velocity.x = Math.sin(angle);
        missile.components.velocity.y = -Math.cos(angle);

        missile.components.position.x = missile.components.velocity.x + entity.components.position.x;
        missile.components.position.y = missile.components.velocity.y + entity.components.position.y;

        missile.components.rotation.angle = angle;

        entity.components.tank.reloadTimer = 60; // move to tank comp
    } else if (reloadTimer > 0) {
        entity.components.tank.reloadTimer--;
    }
});