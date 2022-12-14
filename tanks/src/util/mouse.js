import { pixelSize } from "./canvas.js";

export const mouse = {
    pos: {
        x: 0,
        y: 0
    },
    left: false,
    right: false,
    middle: false
}

export function initializeMouse() {
    window.addEventListener("mousemove", (event) => {
        mouse.pos.x = event.x / pixelSize;
        mouse.pos.y = event.y / pixelSize;
    });

    window.addEventListener("mousedown", (event) => {
        switch(event.button) {
            case 0:
                mouse.left = true;
                break;
            case 1:
                mouse.middle = true;
                break;
            case 2:
                mouse.right = true;
                break;
        }
    });

    window.addEventListener("mouseup", (event) => {
        switch(event.button) {
            case 0:
                mouse.left = false;
                break;
            case 1:
                mouse.middle = false;
                break;
            case 2:
                mouse.right = false;
                break;
        }
    });
}