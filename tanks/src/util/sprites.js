const SPRITES_FOLDER = "../../img/sprites/"

export const sprites = {};

const files = [
    "../../img/sprites/32.png"
];

export function loadSprites(callback) {
    const imageUrls = [
        "http://placekitten.com/85/150",
        "http://placekitten.com/85/130",
        "http://placekitten.com/85/110",
    ];
    Promise.all(files.map(loadImage)).then(images => {
        const canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        images.forEach((image, i) => {
            const url = imageUrls[i];
            console.log(`Loaded image: ${url}`);
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


