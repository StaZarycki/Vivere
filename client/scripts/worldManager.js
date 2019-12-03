function WorldManager(scene) {
	const chunks = [];
	const worldSize = 2;

	for (let i = 0; i < worldSize; i++) {
		for (let j = 0; j < worldSize; j++) {
			let chunk = new Chunk(i, j).getChunk();
			chunks.push(chunk);
		}
	}

	this.loadChunks = function() {

		// Oh boy
		chunks.forEach((chunk) => {
			chunk.forEach((smallChunk) => {
				smallChunk.forEach((smallerChunk) => {
					smallerChunk.forEach((block) => {
						scene.add(block);
					});
				});
			});
		});
	}
}