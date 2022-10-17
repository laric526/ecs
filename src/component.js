export function Component(name, schema) {
    this.name = name;
    this.schema = schema;
}

export function instantiateComponent(component) {
    return populateValues(component.schema);
}

function populateValues(obj) {
    const out = {};

    const entries = Object.entries(obj);
    entries.forEach((kv, i) => {
        const schema = kv[1];
        var value;

        if (schema.default != undefined) {
            value = schema.default;
        } else {
            var type;
            if (!(typeof schema == "object" && schema != Array)) {
                type = schema;
            } else {
                type = schema.type;
            }

            switch(type) {
                case Object:
                    value = populateValues(schema.schema);
                    break;
                case Number:
                    value = 0;
                    break;
                case String:
                    value = "";
                    break;
                default:
                    console.error(`Invalid data type: ${type} on ${kv[0]}.`);
                    break;
            }
        }

        out[kv[0]] = value;
    });

    return out;
}
export function Component(name, schema) {
    this.name = name;
    this.schema = schema;
}

export function instantiateComponent(component) {
    return populateValues(component.schema);
}

function populateValues(obj) {
    const out = {};

    const entries = Object.entries(obj);
    entries.forEach((kv, i) => {
        const schema = kv[1];
        var value;

        if (schema.default != undefined) {
            value = schema.default;
        } else {
            var type;
            if (!(typeof schema == "object" && schema != Array)) {
                type = schema;
            } else {
                type = schema.type;
            }

            switch(type) {
                case Object:
                    value = populateValues(schema.schema);
                    break;
                case Number:
                    value = 0;
                    break;
                case String:
                    value = "";
                    break;
                default:
                    console.error(`Invalid data type: ${type} on ${kv[0]}.`);
                    break;
            }
        }

        out[kv[0]] = value;
    });

    return out;
}