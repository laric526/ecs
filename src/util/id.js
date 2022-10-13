export function generateId() {
    const bytes = new Uint8Array(4);
    crypto.getRandomValues(bytes);
    const id = btoa(bytes).slice(0, 8);

    return id;
}