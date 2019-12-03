function WorldManager(scene) {
	const chunks = [];
	let worldSize = 2;

	this.setWorldSize = function(size) {
		worldSize = size;
	}

	this.generateChunks = function() {
		for (let i = 0; i < worldSize; i++) {
			for (let j = 0; j < worldSize; j++) {
				let chunk = new Chunk(i, j).getChunk();
				chunks.push(chunk);
			}
		}
	}

	this.loadChunks = function() {

		// Oh boy
		chunks.forEach((chunk) => {
			chunk.forEach((smallChunk) => {
				smallChunk.forEach((smallerChunk) => {
					smallerChunk.forEach((block) => {
						block.position.x -= (worldSize * 10) / 2;
						block.position.z -= (worldSize * 10) / 2;
						scene.add(block);
					});
				});
			});
		});
	}
}