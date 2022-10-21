import { Component } from "../../../src/component.js";

export const tankComponent = new Component("tank", {
    cannon: String,
    reloadTime: { type: Number, default: 60 },
    reloadTimer: Number
});