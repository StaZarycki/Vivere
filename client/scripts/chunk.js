function Chunk(x, z, textureLoader, geometryLoader) {
	const container = [];
	const size = 10;
	const perlinValue = 0.25;
	const mapHeight = 5;
	const realX = x * size;
	const realZ = z * size;

	noise.seed(Math.random());

	let originalGrass = new Block("grass", textureLoader, geometryLoader).getMesh();
	let originalDirt = new Block("dirt", textureLoader, geometryLoader).getMesh();

	for (let i = 0; i < size; i++) {
		container.push([]);
		for (let j = 0; j < size; j++) {
			container[i].push([]);

			// Set top layer

			let yPosTop = Math.floor(noise.perlin2(i / size * perlinValue, j / size * perlinValue) * mapHeight); // Set height
			let xPos = (-size / 2 + i) + realX;
			let zPos = (-size / 2 + j) + realZ;

			let grassBlock = originalGrass.clone();
			grassBlock.position.x = xPos;
			grassBlock.position.z = zPos;
			grassBlock.position.y = yPosTop;

			container[i][j].push(grassBlock);

			for (let k = 1; k < size; k++) {
				let dirtBlock = originalDirt.clone();
				dirtBlock.position.x = xPos;
				dirtBlock.position.z = zPos;
				dirtBlock.position.y = Math.max(yPosTop - k, -8);

				container[i][j].push(dirtBlock);
			}
		}
	}

	originalGrass = null;
	originalDirt = null;

	this.getChunk = function() {
		return container;
	}
}