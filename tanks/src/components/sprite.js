import { Component } from "../../../src/component.js";

export const spriteComponent = new Component("sprite", {
    sprite: String,
    offset: {
        type: Object,
        schema: {
            x: Number,
            y: Number
        }
    }
});