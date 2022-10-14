import { Component } from "../src/component.js";
import { Entity } from "../src/entity.js";
import { System } from "../src/system.js";
import { World } from "../src/world.js";
/*
const world = new World();
world.entities = { 
    1: { components: { position: { data: "data" }, velocity: { data: "data" } } }, 
    2: { components: { position: { data: "data" } } }, 
    3: { components: { position: { data: "data" }, velocity: { data: "data" }, dummy: { data: "data" } } }
};

const positionComponent = {
    x: { type: Number, default:}
};


console.log(world.getEntities(["position", "velocity"]).length);*/

console.log("exec order is pain");
console.error("wait that worked??");

const world = new World();

const position = new Component("position", {
    x: { type: Number },
    y: Number
});

const velocity = new Component("velocity", {
    x: Number,
    y: Number
});

const name = new Component("name", {
    name: String
});


const move = new System("move", ["position", "velocity"], (entities) => {
    console.log(`move: ${JSON.stringify(entities)}`);
    entities.forEach((entity, i) => {
        entity.components.position.x += entity.components.velocity.x;
        entity.components.position.y += entity.components.velocity.y;
    });
});

const renderName = new System("renderName", ["name"], (entities) => {
    console.log(`renderName: ${JSON.stringify(entities)}`);
    entities.forEach((entity, i) => {
        console.log(`Entity Name: ${entity.components.name.name}`);
    });
});


const player = new Entity(["position", "velocity", "name"]);
const testent = new Entity(["position", "velocity"]);
const otherent = new Entity(["position"]);

world.registerComponent(position);
world.registerComponent(velocity);
world.registerComponent(name);

world.registerSystem(move);
world.registerSystem(renderName);

world.registerEntity(player);
world.registerEntity(testent);
world.registerEntity(otherent);

world.tick();