import { System } from "../../../src/system.js";

export const attachmentSystem = new System("attachment", ["attachment", "position", "attached"], (entity, world) => {
    const parent = world.getEntity(entity.components.attachment.parent);

    entity.components.position.x = parent.components.position.x;
    entity.components.position.y = parent.components.position.y;
});