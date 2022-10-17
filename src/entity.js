import { generateId } from "./util/id.js";

export function Entity(components) {
    this.id = generateId();
    this.components = components;
}