function TextureLoader() {
	const texturesPath = "/textures/block/";
	
	// TEXTURES
	const grassTopTexture = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texturesPath + "grass_block_top.png") });
	const grassSideTexture = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texturesPath + "grass_block_side.png") });
	const dirtTexture = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texturesPath + "dirt.png") });
	const woodSideTexture = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texturesPath + "oak_log.png") });
	const woodTopTexture = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texturesPath + "oak_log_top.png") });
	const leavesTexture = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texturesPath + "oak_leaves.png"), transparent: true });

	grassTopTexture.color.setHex(0xc9ff95);
	leavesTexture.color.setHex(0x90d557);
	// leavesTexture.color.setHSL(0, 1, 1);

	// MATERIALS
	const placeholderMaterial = new THREE.MeshBasicMaterial({ color: 0xc10fb7 });
	const grassMaterial = [];
	const dirtMaterial = [];
	const woodMaterial = [];
	const leavesMaterial = [];

	
	// LOOPS
	// GRASS
	for (let i = 0; i < 6; i++) {

		// ALL SIDES THE SAME
		dirtMaterial.push(dirtTexture);
		leavesMaterial.push(leavesTexture);

		// TOP
		if (i == 2) {
			grassMaterial.push(grassTopTexture);
			woodMaterial.push(woodTopTexture);
		} 
		// BOTTOM
		else if (i == 3) {
			grassMaterial.push(dirtTexture);
			woodMaterial.push(woodTopTexture);
		}
		// SIDES
		else {
			grassMaterial.push(grassSideTexture);
			woodMaterial.push(woodSideTexture);
		}

		
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
	woodMaterial.forEach((material) => {
		material.map.magFilter = THREE.NearestFilter;
		material.map.minFilter = THREE.LinearFilter;
	});
	leavesMaterial.forEach((material) => {
		material.map.magFilter = THREE.NearestFilter;
		material.map.minFilter = THREE.LinearFilter;
	});

	this.getMaterial = function(blockType) {
		switch (blockType) {
			case "grass":
				return grassMaterial;
			case "dirt":
				return dirtMaterial;
			case "wood":
				return woodMaterial;
			case "leaves":
				return leavesMaterial;
			default:
				return placeholderMaterial;
		}
	}
}