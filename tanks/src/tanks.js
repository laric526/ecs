import { World } from "../../src/world.js";
import { positionComponent, velocityComponent } from "./components.js";
import { velocitySystem } from "./systems.js";

const world = new World();

world.registerComponent(positionComponent);
world.registerComponent(velocityComponent);

world.registerSystem(velocityComponent);