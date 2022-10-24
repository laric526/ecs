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

        const vertical = (otherLeft >= left && otherLeft <= right) || (otherRight >= left && otherRight <= right) || (left >= otherLeft && left <= otherRight) || (right >= otherLeft && right <= otherRight);
        const horizontal = (otherTop >= top && otherTop <= bottom) || (otherBottom >= top && otherBottom <= bottom) || (top >= otherTop && top <= otherBottom) || (bottom >= otherTop && bottom <= otherBottom);
        
        if (horizontal && vertical) {
            switch (entity.components.collider.type) {
                case "tank":
                    handleTankCollision(entity, other, world);
                    break;
                case "missile":
                    handleMissileCollision(entity, other, world);
                    break;
            }
        }
    });
});

function handleTankCollision(entity, other, world) {
    switch(other.components.collider.type) {
        case "tank":
        case "wall":
        case "hole":
            const x = entity.components.position.x;
            const y = entity.components.position.y;
            const xOther = other.components.position.x;
            const yOther = other.components.position.y;

            const angle = entity.components.rotation.angle;
            const xStep = Math.sin(angle);
            const yStep = -Math.cos(angle);

            const xSign = xStep != 0 ? Math.sign(xStep) : 1;
            const ySign = yStep != 0 ? Math.sign(yStep) : 1; 
            
            const xCount = (xOther + (xSign * 8) - x) / xStep;
            const yCount = (yOther + (ySign * 8) - y) / yStep;

            var count;
            if (Math.abs(xCount) < Math.abs(yCount)) { count = Math.abs(xCount); }
            else { count = Math.abs(yCount); }
            
            const xNew = x + xStep * count;
            const yNew = y + yStep * count;    
            
            entity.components.position.x = xNew;
            entity.components.position.y = yNew;

            console.log(`Previous Position: (${( Math.sin(entity.components.rotation.angle) * -entity.components.speed.speed ).toFixed(4)}, ${(-Math.cos(entity.components.rotation.angle) * -entity.components.speed.speed ).toFixed(4)})`);

            break;
    }
}

function handleTankCollisionold(entity, other, world) {
    switch(other.components.collider.type) {
        case "tank":
        case "wall":
        case "hole":
            const x = entity.components.position.x;
            const y = entity.components.position.y;
            const xOther = other.components.position.x;
            const yOther = other.components.position.y;

            const angle = Math.atan2(y - yOther, x - xOther) + Math.PI / 2;
            //const angle = entity.components.rotation.angle;
            const xStep = Math.sin(angle);
            const yStep = -Math.cos(angle);

            const xSign = xStep != 0 ? Math.sign(xStep) : 1;
            const ySign = yStep != 0 ? Math.sign(yStep) : 1; 
            
            const xCount = (xOther + (xSign * 16) - x) / xStep;
            const yCount = (yOther + (ySign * 16) - y) / yStep;

            var count;
            if (Math.abs(xCount) < Math.abs(yCount)) { count = Math.abs(xCount); }
            else { count = Math.abs(yCount); }
            
            const xNew = x + xStep * count;
            const yNew = y + yStep * count;    
            
            entity.components.position.x = xNew;
            entity.components.position.y = yNew;

            console.log(`Previous Position: (${( Math.sin(entity.components.rotation.angle) * -entity.components.speed.speed ).toFixed(4)}, ${(-Math.cos(entity.components.rotation.angle) * -entity.components.speed.speed ).toFixed(4)})`);

            break;
    }
}

function handleMissileCollision(entity, other, world) {
    switch(other.components.collider.type) {
        case "wall":
            world.removeEntity(entity.id);
            break;
    }
}