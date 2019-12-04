function TextureLoader() {
	const texturesPath = "/textures/block/";
	
	// TEXTURES
	const grassTopTexture = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texturesPath + "grass_block_top.png") });
	const grassSideTexture = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texturesPath + "grass_block_side.png") });
	const dirtTexture = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texturesPath + "dirt.png") });
	
	grassTopTexture.color.setHex(0xc9ff95);

	// MATERIALS
	const placeholderMaterial = new THREE.MeshBasicMaterial({ color: 0xc10fb7 });
	const grassMaterial = [];
	const dirtMaterial = [];
	
	
	// LOOPS
	// GRASS
	for (let i = 0; i < 6; i++) {
		if (i == 2) {
			grassMaterial.push(grassTopTexture);
		} else if (i == 3) {
			grassMaterial.push(dirtTexture);
		} else {
			grassMaterial.push(grassSideTexture);
		}
	}

	// DIRT
	for (let i = 0; i < 6; i++) {
		dirtMaterial.push(dirtTexture);
	}

	// END OF LOOPS
	// FILTERING
	grassMaterial.forEach((material) => {
		material.map.magFilter = THREE.NearestFilter;
		material.map.minFilter = THREE.LinearFilter;
	});
	dirtMaterial.forEach((material) => {
		material.map.magFilter = THREE.NearestFilter;
		material.map.minFilter = THREE.LinearFilter;
	});

	this.getMaterial = function(blockType) {
		switch (blockType) {
			case "grass":
				return grassMaterial;
			case "dirt":
				return dirtMaterial;
			default:
				return placeholderMaterial;
		}
	}
}