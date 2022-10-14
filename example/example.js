import { Component } from "../src/component.js";
import { Entity } from "../src/entity.js";
import { System } from "../src/system.js";
import { World } from "../src/world.js";

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
    console.log(`move: ${entities.map((entity) => entity.id)}`);
    entities.forEach((entity, i) => {
        entity.components.position.x += entity.components.velocity.x;
        entity.components.position.y += entity.components.velocity.y;
    });
});

const renderName = new System("renderName", ["name"], (entities) => {
    console.log(`renderName: ${entities.map((entity) => entity.id)}`);
    entities.forEach((entity, i) => {
        console.log(`Entity Name: ${entity.components.name.name}`);
    });
});


const player = new Entity(["position", "velocity", "name"]);
const player2 = new Entity(["position", "velocity", "name"]);
const testent = new Entity(["position", "velocity"]);
const otherent = new Entity(["position"]);

console.log(`player id: ${player.id}`);
console.log(`player2 id: ${player.id}`);
console.log(`testent id: ${testent.id}`);
console.log(`otherent id: ${otherent.id}`);

world.registerComponent(position);
world.registerComponent(velocity);
world.registerComponent(name);

world.registerSystem(move);
world.registerSystem(renderName);

world.registerEntity(player);
world.registerEntity(player2);
world.registerEntity(testent);
world.registerEntity(otherent);

player2.components.name.name = "player 2";
//console.log(JSON.stringify(player2));

world.tick();