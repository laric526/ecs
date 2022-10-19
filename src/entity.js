import { generateId } from "./util/id.js";

export function Entity(components, callback) {
    this.id = generateId();
    this.components = components;
    this.callback = callback;
}