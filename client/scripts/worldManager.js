function WorldManager(scene, textureLoader, geometryLoader) {
	const chunks = [];
	let worldSize = 2;

	this.setWorldSize = function(size) {
		worldSize = size;
	}

	this.generateChunks = function() {
		for (let i = 0; i < worldSize; i++) {
			for (let j = 0; j < worldSize; j++) {
				let chunk = new Chunk(i, j, textureLoader, geometryLoader).getChunk();
				chunks.push(chunk);
			}
		}
	}

	this.loadChunks = function() {
		chunks.forEach((chunk) => {
			chunk.position.x -= 10 * (worldSize - 1) / 2;
			chunk.position.z -= 10 * (worldSize - 1) / 2;
			scene.add(chunk);
		});
	}
}