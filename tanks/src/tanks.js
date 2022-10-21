import { World } from "../../src/world.js";

import { attachmentComponent } from "./components/attachment.js";
import { inputComponent } from "./components/input.js";
import { positionComponent } from "./components/position.js";
import { rotationComponent } from "./components/rotation.js";
import { speedComponent, rotationSpeedComponent } from "./components/speed.js";
import { spriteComponent } from "./components/sprite.js";
import { tankComponent } from "./components/tank.js";
import { velocityComponent, rotationVelocityComponent } from "./components/velocity.js";
import { attachedComponent, playerControlledComponent, renderComponent, pointAtMouseComponent } from "./components/tags.js";

import { attachmentSystem } from "./systems/attachment.js";
import { inputSystem } from "./systems/input.js";
import { movementSystem } from "./systems/movement.js";
import { pointAtMouseSystem } from "./systems/pointAtMouse.js";
import { renderSystem } from "./systems/render.js";
import { fireSystem } from "./systems/fire.js";
import { velocitySystem, rotationVelocitySystem } from "./systems/velocity.js";

import { playerEntity, playerCannonEntity } from "./entities.js";

import { initializeCanvas, clearCanvas, renderCanvas } from "./util/canvas.js";
import { initializeKeyboard } from "./util/keyboard.js";
import { initializeMouse } from "./util/mouse.js";
import { sprites, loadSprites } from "./util/sprites.js";

import { duplicateEntity } from "../../src/entity.js";

export const world = new World();

world.registerComponent(attachmentComponent);
world.registerComponent(inputComponent);
world.registerComponent(positionComponent);
world.registerComponent(rotationComponent);
world.registerComponent(speedComponent);
world.registerComponent(rotationSpeedComponent);
world.registerComponent(spriteComponent);
world.registerComponent(tankComponent);
world.registerComponent(velocityComponent);
world.registerComponent(rotationVelocityComponent);

world.registerComponent(attachedComponent);
world.registerComponent(playerControlledComponent);
world.registerComponent(pointAtMouseComponent);
world.registerComponent(renderComponent);

world.registerSystem(attachmentSystem);
world.registerSystem(inputSystem);
world.registerSystem(movementSystem);
world.registerSystem(pointAtMouseSystem);
world.registerSystem(renderSystem);
world.registerSystem(fireSystem);
world.registerSystem(velocitySystem);
world.registerSystem(rotationVelocitySystem);

world.createEntity(playerEntity);
world.createEntity(playerCannonEntity);
playerEntity.components.tank.cannon = playerCannonEntity.id;

initializeCanvas(document.getElementById("canvas"));
initializeKeyboard();
initializeMouse();

loadSprites(main);

function main() {
    world.tick();
    clearCanvas();
    renderCanvas();

    requestAnimationFrame(main);
}