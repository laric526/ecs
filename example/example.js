import { World } from "../src/world.js";

const world = new World();
world.entities = { 
    1: { components: { position: { data: "data" }, "velocity": { data: "data" } } }, 
    2: { components: { position: { data: "data" } } }, 
    3: { components: { position: { data: "data" }, "velocity": { data: "data" }, "dummy": { data: "data" }  } }, 
}
alert(world.getEntities(["position", "velocity"]).length);