export const keymap = {};

export function initializeKeyboard() {
    window.onkeydown = (event) => {
        let key = event.key.toLowerCase();
        if (key == " ") { key = "space" }
        keymap[key] = true;
    }

    window.onkeyup = (event) => {
        let key = event.key.toLowerCase();
        if (key == " ") { key = "space" }
        keymap[key] = false;
    }
}