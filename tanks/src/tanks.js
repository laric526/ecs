console.error("error catching test");

import { World } from "../../src/world.js";

import { inputComponent } from "./components/input.js";
import { positionComponent } from "./components/position.js";
import { rotationComponent } from "./components/rotation.js";
import { spriteComponent } from "./components/sprite.js";
import { tankComponent } from "./components/tank.js";
import { velocityComponent } from "./components/velocity.js";
import { renderComponent, playerControlledComponent } from "./components/tags.js";

import { inputSystem } from "./systems/input.js";
import { renderSystem } from "./systems/render.js";
import { velocitySystem } from "./systems/velocity.js";

import { testrender } from "./entities.js";

import { initializeCanvas } from "./util/canvas.js";
import { initializeKeyboard } from "./util/keyboard.js";
import { sprites, loadSprites } from "./util/sprites.js";

export const world = new World();

world.registerComponent(inputComponent);
world.registerComponent(positionComponent);
world.registerComponent(rotationComponent)
world.registerComponent(spriteComponent);
world.registerComponent(tankComponent);
world.registerComponent(velocityComponent);

world.registerComponent(renderComponent);
world.registerComponent(playerControlledComponent);

world.registerSystem(velocitySystem);
world.registerSystem(renderSystem);
world.registerSystem(inputSystem);

world.createEntity(testrender);
testrender.components.sprite.sprite = "32";
testrender.components.position.x = "48";
testrender.components.position.y = "24";


initializeCanvas(document.getElementById("canvas"));
initializeKeyboard();

loadSprites(main);

function main() {
    console.log(sprites);
    world.tick();
}