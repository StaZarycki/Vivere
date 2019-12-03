function Block(type) {
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const materials = [];

	let objectName = "Not Defined";
	let texturesPath = "/textures/block/";

	// LOAD TEXTURES
	const grassTopTexture = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texturesPath + "grass_block_top.png") });
	const grassSideTexture = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texturesPath + "grass_block_side.png") });
	const dirtTexture = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texturesPath + "dirt.png") });

	grassTopTexture.color.setHex(0xc9ff95);
	// BLOCK TYPES

	if (type == "grass") {
		for (let i = 0; i < 6; i++) {
			if (i == 2) {
				materials.push(grassTopTexture);

			} else if (i == 3) {
				materials.push(dirtTexture);
			} else {
				materials.push(grassSideTexture);
			}
		}
		objectName = "Grass Block";
	}
	else if (type == "dirt") {
		for (let i = 0; i < 6; i++) {
			materials.push(dirtTexture);
		}
		objectName = "Dirt Block";
	}

	materials.forEach((material) => {
		material.map.magFilter = THREE.NearestFilter;
		material.map.minFilter = THREE.LinearFilter;
	});

	const mesh = new THREE.Mesh(geometry, materials);
	mesh.name = objectName;

	this.getMesh = function() {
		return mesh;
	}
}