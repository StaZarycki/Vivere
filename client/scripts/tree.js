function Tree(textureLoader, geometryLoader) {
	const group = new THREE.Group();
	const height = Math.floor(Math.random() * 3) + 3;
	const radius = Math.floor(height / 2);
	const woodenOriginalBlock = new Block("wood", textureLoader, geometryLoader).getMesh();
	const leavesOriginalBlock = new Block("leaves", textureLoader, geometryLoader).getMesh();
	
	for (let i = 0; i < height; i++) {
		let woodBlock = woodenOriginalBlock.clone();
		woodBlock.position.y += i;
		group.add(woodBlock);
	}

	for (let i = 0; i < 2; i++) {
		let leavesBlock = leavesOriginalBlock.clone();
		leavesBlock.position.y = height + i;
		group.add(leavesBlock);
	}

	for (let i = 0; i < radius + 1; i++) {
		for (let j = 0; j < 8; j++) {
			let leavesBlock = leavesOriginalBlock.clone();
			leavesBlock.position.y = height - (i);
			if (j == 0) {
				leavesBlock.position.x += 1;
			} else if (j == 1) {
				leavesBlock.position.x -= 1;
			} else if (j == 2) {
				leavesBlock.position.z += 1;
			} else if (j == 3) {
				leavesBlock.position.z -= 1;
			} else if (j == 4) {
				leavesBlock.position.x += 1;
				leavesBlock.position.z += 1;
			} else if (j == 5) {
				leavesBlock.position.x -= 1;
				leavesBlock.position.z += 1;
			} else if (j == 6) {
				leavesBlock.position.z -= 1;
				leavesBlock.position.x += 1;
			} else if (j == 7) {
				leavesBlock.position.z -= 1;
				leavesBlock.position.x -= 1;
			}
			group.add(leavesBlock);
		}
	}

	woodenOriginalBlock.remove();
	leavesOriginalBlock.remove();

	this.getTree = function() {
		return group;
	}
}