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
        mouse.pos.x = event.x;
        mouse.pos.y = event.y;
    });

    window.addEventListener("mousedown", (event) => {
        switch(mouse.button) {
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
        switch(mouse.button) {
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