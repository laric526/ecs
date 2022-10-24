import { Entity } from "../../../src/entity.js";

export const tileEntity = new Entity(
    ["collider", "position", "sprite", "render"],
    (entity) => {
        entity.components.sprite.sprite = "tiles/base";
        entity.components.sprite.zIndex = 10;
        entity.components.collider.x = 16;
        entity.components.collider.y = 16;
        entity.components.collider.type = "wall";
    }
);