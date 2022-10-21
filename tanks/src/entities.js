import { Entity } from "../../src/entity.js";

export const playerEntity = new Entity(
    ["input", "position", "rotation", "speed", "rotation_speed", "sprite", "velocity", "rotation_velocity", "player_controlled", "render"],
    (entity, world) => {
        entity.components.sprite.sprite = "tanks/red";
        entity.components.position.x = 48;
        entity.components.position.y = 24;
        entity.components.speed.speed = 2;
        entity.components.rotation_speed.speed = 3.5;

        console.log("created player");
        console.log(this);

        world.createEntity(playerCannonEntity);
    }
);

export const playerCannonEntity = new Entity(
    ["attachment", "position", "rotation", "sprite", "attached", "point_at_mouse", "render"],
    (entity) => {
        entity.components.attachment.parent = playerEntity.id;
        entity.components.sprite.sprite = "tanks/red_cannon";

        console.log("created cannon");
        console.log(this);
    }
);