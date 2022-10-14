import { instantiateComponent } from "./component.js";

export function World() {
    this.entities = {};
    this.components = {};
    this.systems = {};

    this.registerEntity = function(entity) {
        const components = {};
        entity.components.forEach((componentName, i) => {
            const component = this.getComponent(componentName);
            components[component.name] = instantiateComponent(component);
        });
        entity.components = components;

        this.entities[entity.id] = entity;
    }

    this.registerComponent = function(component) {
        this.components[component.name] = component;
    }

    this.registerSystem = function(system) {
        this.systems[system.name] = system;
    }

    this.getComponent = function(name) {
        return this.components["name"];
    }

    this.getEntities = function(query) {
        console.log(`Getting all entities with components ${query}`);
        const out = [];

        for (const entityName in this.entities) {
			const entity = this.entities[entityName];
            const components = Object.getOwnPropertyNames(entity.components);
            const valid = query.every(i => components.includes(i));

            console.log(`Entity ${entityName} has components ${components}. Match = ${valid}`);
            
            if (valid) {
                out.push(entity);
            }
        }

        return out;
    }

    this.tick = function() {
        const systemNames = Object.getOwnPropertyNames(this.systems);
        systemNames.forEach((name, i) => {
            const system = this.systems[name];
            system.callback(this.getEntities(system.query));
        });
    }
}