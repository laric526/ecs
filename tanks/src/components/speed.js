import { Component } from "../../../src/component.js";

export const speedComponent = new Component("speed", {
    speed: { type: Number, default: 1 }
});

export const rotationSpeedComponent = new Component("rotation_speed", {
    speed: { type: Number, default: 1 }
});