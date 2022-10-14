function generateId() {
    const bytes = new Uint8Array(4);
    crypto.getRandomValues(bytes);
	
	let id = "";
	bytes.forEach((byte) => {
		id += byte.toString(16);
	});

    return id;
}