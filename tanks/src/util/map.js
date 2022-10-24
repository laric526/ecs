import { tileEntity } from "../entities/tile.js";
import { duplicateEntity } from "../../../src/entity.js";

export function loadMap(map, world) {
    map.forEach((row, y) => {
        row.forEach((tile, x) => {
            switch(tile) {
                case 1: // walll
                    const entity = world.createEntity(duplicateEntity(tileEntity));
                    entity.components.position.x = x * 16 + 8;
                    entity.components.position.y = y * 16 + 8;
            }
        });
    });
}