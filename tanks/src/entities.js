import { Entity } from "../../src/entity.js";

export const playerEntity = new Entity(
    ["input", "position", "rotation", "speed", "rotation_speed", "sprite", "velocity", "rotation_velocity", "tank", "player_controlled", "render"],
    (entity) => {
        entity.components.sprite.sprite = "tanks/red";
        entity.components.position.x = 48;
        entity.components.position.y = 24;
        entity.components.speed.speed = 2;
        entity.components.rotation_speed.speed = 3.5;
    }
);

export const playerCannonEntity = new Entity(
    ["attachment", "position", "rotation", "sprite", "attached", "point_at_mouse", "render"],
    (entity) => {
        entity.components.attachment.parent = playerEntity.id;
        entity.components.sprite.sprite = "tanks/red_cannon";

        playerEntity.components.tank.cannon = entity.id;
    }
);

export const missileEntity = new Entity(
    ["position", "rotation", "sprite", "velocity", "render"],
    (entity) => {
        entity.components.sprite.sprite = "tanks/red";
    }
)