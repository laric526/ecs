const SPRITES_FOLDER = "./img/sprites/"

export const sprites = {};

const files = [
    "32"
];

export function loadSprites(callback) {
    Promise.all(files.map((file) => {
        const url = SPRITES_FOLDER + file + ".png";
        return loadImage(url);
    })).then(images => {
        images.forEach((image, i) => {
            const name = files[i];
            sprites[name] = image;
            console.log(image.width);
        });

        callback();
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


