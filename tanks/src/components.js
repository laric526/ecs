import { Component } from "../../src/component.js"

export const positionComponent = new Component("position", {
    x: Number,
    y: Number
});

export const rotationComponent = new Component("rotation", {
    angle: Number
})

export const velocityComponent = new Component("velocity", {
    x: Number,
    y: Number
});

export const inputComponent = new Component("input", {
    axes: { 
        type: Object,
        schema: {
            longitudinal: Number,
            lateral: Number
        }
    },
    fire: Boolean,
    bomb: Boolean
});

export const renderComponent = new Component("render", {});

export const spriteComponent = new Component("sprite", {
    sprite: String
});