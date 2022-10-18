import { Component } from "../../../src/component.js";

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