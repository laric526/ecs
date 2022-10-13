export function World() {
    this.entities = {};
    this.components = {};
    this.systems = {};

    this.registerComponent = function(name, schema) {
        this.components[name] = schema;
    }

    this.getEntities = function(components) {
        const out = [];

        for (const entityName in this.entities) {
			const entity = this.entities[entityName];
            const entityComponents = Object.getOwnPropertyNames(entity.components);
            const valid = components.every(i => entityComponents.includes(i));
            
            if (valid) {
                out.push(entity);
            }
        }

        return out;
    }
}