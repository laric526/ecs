export function populateComponentDefaultValues(component) {

}

function populateObjectDefaultValues(obj) {
    const entries = Object.entries(obj);
    entries.forEach((kv, i) => {
        if (typeof kv[1] == "object") {
            populateComponentDefaultValues(keys[1]);
        } else {
            
        }
    });
}