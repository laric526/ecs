export const keymap = {};

export function initializeKeyboard() {
    window.addEventListener("keydown", (event) => {
        let key = event.key.toLowerCase();
        if (key == " ") { key = "space" }
        keymap[key] = true;
    });

    window.addEventListener("keyup", (event) => {
        let key = event.key.toLowerCase();
        if (key == " ") { key = "space" }
        keymap[key] = false;
    });
}