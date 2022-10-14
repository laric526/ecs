import { instantiateComponent } from "./component.js";

export function World() {
    this.entities = {};
    this.components = {};
    this.systems = {};

    this.registerEntity = function(entity) {
        const newcomponents = {};
        entity.components.forEach((componentName, i) => {
            const component = this.getComponent(componentName);
            newcomponents[component.name] = instantiateComponent(component);
        });

        console.log(JSON.stringify(entity));

        entity.components = newcomponents;

        console.log(JSON.stringify(entity));

        this.entities[entity.id] = entity;
        
        console.log(JSON.stringify(entity));
    }

    this.registerComponent = function(component) {
        this.components[component.name] = component;
    }

    this.registerSystem = function(system) {
        this.systems[system.name] = system;
    }

    this.getEntity = function(id) {
        return this.entities[id];
    }

    this.getComponent = function(name) {
        return this.components[name];
    }

    this.filterEntities = function(query) {
        const out = [];

        for (const entityId in this.entities) {
			const entity = this.entities[entityId];
            const components = Object.getOwnPropertyNames(entity.components);
            const valid = query.every(i => components.includes(i));
            
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
            system.callback(this.filterEntities(system.query));
        });
    }
}