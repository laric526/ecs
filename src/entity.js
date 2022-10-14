import { generateId } from "./util/id.js";

export function Entity() {
    this.id = generateId();
    this.components = {};
}