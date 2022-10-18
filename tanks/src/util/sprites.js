export const sprites = {};



export function loadSprites(callback) {
    const imageUrls = [
        "http://placekitten.com/85/150",
        "http://placekitten.com/85/130",
        "http://placekitten.com/85/110",
    ];
    Promise.all(imageUrls.map(loadImage)).then(images => {
        const canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        images.forEach((image, i) => {
            const url = imageUrls[i];
            alert(`Loaded image: ${url}`);
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


