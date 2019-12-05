function Chunk(x, z, textureLoader, geometryLoader) {
	const size = 10;
	const perlinValue = 0.25;
	const mapHeight = 5;
	const realX = x * size;
	const realZ = z * size;
	noise.seed(Math.random());

	const group = new THREE.Group();

	let originalGrass = new Block("grass", textureLoader, geometryLoader).getMesh();
	let originalDirt = new Block("dirt", textureLoader, geometryLoader).getMesh();
	let originalTree = new Tree(textureLoader, geometryLoader).getTree();

	let treePosition = new THREE.Vector3(Math.floor(Math.random() * size) - (size / 2) + realX, 0, Math.floor(Math.random() * size) - (size / 2) + realZ);

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {

			// Set top layer
			let yPosTop = Math.floor(noise.perlin2(i / size * perlinValue, j / size * perlinValue) * mapHeight); // Set height
			let xPos = (-size / 2 + i) + realX;
			let zPos = (-size / 2 + j) + realZ;

			if (treePosition.x == xPos && treePosition.z == zPos) {
				treePosition.y = yPosTop + 1;
			}

			let grassBlock = originalGrass.clone();
			grassBlock.position.x = xPos;
			grassBlock.position.z = zPos;
			grassBlock.position.y = yPosTop;

			group.add(grassBlock);

			// Set dirt layer
			for (let k = 1; k < size; k++) {
				let dirtBlock = originalDirt.clone();
				dirtBlock.position.x = xPos;
				dirtBlock.position.z = zPos;
				dirtBlock.position.y = Math.max(yPosTop - k, -8);

				group.add(dirtBlock);
			}
		}
	}

	let tree = originalTree.clone();
	tree.position.x = treePosition.x;
	tree.position.y = treePosition.y;
	tree.position.z = treePosition.z;
	group.add(tree);

	originalGrass.remove();
	originalDirt.remove();
	originalTree.remove();

	this.getChunk = function() {
		return group;
	}
}