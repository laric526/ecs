import { generateId } from "./util/id.js";

export function Entity(components, callback) {
    this.id = generateId();
    this.components = components;

    if (!callback) { callback = () => {} }
    this.callback = callback;
}

export function duplicateEntity(entity) {
    if (entity.components instanceof Array) {
        return new Entity(structuredClone(components), entity.callback);
    }

    const components = Object.getOwnPropertyNames(entity.components)

    return new Entity(components, entity.callback);
}