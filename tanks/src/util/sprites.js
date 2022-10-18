const SPRITES_FOLDER = "./img/sprites/"

export const sprites = {};

const files = [
    "32"
];

export function loadSprites(callback) {
    Promise.all(files.map((file) => {
        const url = SPRITES_FOLDER + file + ".png";
        console.log(`Loading image: ${url}`);
        loadImage(url);
    })).then(images => {
        images.forEach((image, i) => {
            const name = files[i];
            sprites[name] = image;
            console.log(`Loaded image: ${name}`);
        });
    });
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}


