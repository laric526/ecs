import { System } from "../../../src/system.js";

export const collisionSystem = new System("collision", ["collider", "position"], (entity, world, others) => { 
    others.forEach((other) => {
        if (other.id == entity.id) { return; }

        const left = entity.components.position.x - entity.components.collider.x / 2;
        const right = entity.components.position.x + entity.components.collider.x / 2;
        const top = entity.components.position.y - entity.components.collider.y / 2;
        const bottom = entity.components.position.y + entity.components.collider.y / 2;

        const otherLeft = other.components.position.x - other.components.collider.x / 2;
        const otherRight = other.components.position.x + other.components.collider.x / 2;
        const otherTop = other.components.position.y - other.components.collider.y / 2;
        const otherBottom = other.components.position.y + other.components.collider.y / 2;

        const vertical = (otherLeft > left && otherLeft < right) || (otherRight > left && otherRight < right) || (left > otherLeft && left < otherRight) || (right > otherLeft && right < otherRight);
        const horizotal = (otherTop > top && otherTop < bottom) || (otherBottom > top && otherBottom < bottom) || (top > otherTop && top < otherBottom) || (bottom > otherTop && bottom < otherBottom);
        
        if (horizotal && vertical) {
            console.log(`Collision between ${entity.id} and ${other.id}`);
        }
    });
});