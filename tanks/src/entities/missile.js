import { Entity } from "../../../src/entity.js";

export const missileEntity = new Entity(
    ["collider", "position", "rotation", "sprite", "velocity", "render"],
    (entity) => {
        entity.components.sprite.sprite = "missile";
        entity.components.sprite.zIndex = 1;
        entity.components.collider.x = 4;
        entity.components.collider.y = 6;
        entity.components.collider.type = "missile";
    }
);