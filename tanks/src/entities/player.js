import { Entity } from "../../../src/entity.js";

export const playerEntity = new Entity(
    ["collider", "input", "position", "rotation", "speed", "rotation_speed", "sprite", "velocity", "rotation_velocity", "tank", "player_controlled", "render"],
    (entity, world) => {
        entity.components.sprite.sprite = "tanks/red";

        entity.components.position.x = 32;
        entity.components.position.y = 32;

        entity.components.collider.x = 16;
        entity.components.collider.y = 16;

        entity.components.speed.speed = 1;
        entity.components.rotation_speed.speed = 3;

        const cannon = world.createEntity(playerCannonEntity);
        cannon.components.attachment.parent = entity.id;
        entity.components.tank.cannon = cannon.id;

        entity.components.collider.type = "tank"
    }
);

const playerCannonEntity = new Entity(
    ["attachment", "position", "rotation", "sprite", "attached", "player_controlled", "point_at_mouse", "render"],
    (entity) => {
        entity.components.sprite.sprite = "tanks/red_cannon";
        entity.components.sprite.zIndex = 2;
    }
);