export function World() {
    this.entities = {};
    this.components = {};
    this.systems = {};

    this.registerComponent = function(name, schema) {
        this.components[name] = schema;
    }
}