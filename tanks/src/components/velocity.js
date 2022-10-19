import { Component } from "../../../src/component.js";

export const velocityComponent = new Component("velocity", {
    x: Number,
    y: Number
});

export const rotationVelocityComponent = new Component("rotation_velocity", {
    velocity: Number
});