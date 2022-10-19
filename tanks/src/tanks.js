import { World } from "../../src/world.js";

import { inputComponent } from "./components/input.js";
import { positionComponent } from "./components/position.js";
import { rotationComponent } from "./components/rotation.js";
import { speedComponent, rotationSpeedComponent } from "./components/speed.js";
import { spriteComponent } from "./components/sprite.js";
import { tankComponent } from "./components/tank.js";
import { velocityComponent, rotationVelocityComponent } from "./components/velocity.js";
import { playerControlledComponent, renderComponent } from "./components/tags.js";

import { inputSystem } from "./systems/input.js";
import { movementSystem } from "./systems/movement.js";
import { renderSystem } from "./systems/render.js";
import { velocitySystem, rotationVelocitySystem } from "./systems/velocity.js";

import { testrender } from "./entities.js";

import { initializeCanvas, clearCanvas } from "./util/canvas.js";
import { initializeKeyboard } from "./util/keyboard.js";
import { sprites, loadSprites } from "./util/sprites.js";

export const world = new World();

world.registerComponent(inputComponent);
world.registerComponent(positionComponent);
world.registerComponent(rotationComponent);
world.registerComponent(speedComponent);
world.registerComponent(rotationSpeedComponent);
world.registerComponent(spriteComponent);
world.registerComponent(tankComponent);
world.registerComponent(velocityComponent);
world.registerComponent(rotationVelocityComponent);

world.registerComponent(playerControlledComponent);
world.registerComponent(renderComponent);

world.registerSystem(inputSystem);
world.registerSystem(movementSystem);
world.registerSystem(renderSystem);
world.registerSystem(velocitySystem);
world.registerSystem(rotationVelocitySystem);

world.createEntity(testrender);
testrender.components.sprite.sprite = "32";
testrender.components.position.x = 48;
testrender.components.position.y = 24;
testrender.components.speed.speed = 2;
testrender.components.rotation_speed.speed = 3.5;


initializeCanvas(document.getElementById("canvas"));
initializeKeyboard();

loadSprites(main);

function main() {
    clearCanvas();
    world.tick();

    requestAnimationFrame(main);
}