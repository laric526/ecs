import { World } from "../../src/world.js";
import { positionComponent } from "./components.js";
import { velocityComponent } from "./components.js";
import { rotationComponent } from "./components.js";
import { inputComponent } from "./components.js";
import { inputSystem } from "./systems.js";
import { velocitySystem } from "./systems.js";
import { initializeKeyboard } from "./util/keyboard.js";

const world = new World();

world.registerComponent(positionComponent);
world.registerComponent(rotationComponent)
world.registerComponent(velocityComponent);
world.registerComponent(inputComponent);

world.registerSystem(velocitySystem);
world.registerSystem(inputSystem);

initializeKeyboard();