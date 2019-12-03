function Block(type) {
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const materials = [];

	let objectName = "Not Defined";


	// BLOCK TYPES

	if (type == "grass") {
		materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load("/textures/block/grass_block_side.png") }));
		materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load("/textures/block/grass_block_side.png") }));
		materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load("/textures/block/grass_block_top.png") }));
		materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load("/textures/block/dirt.png") }));
		materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load("/textures/block/grass_block_side.png") }));
		materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load("/textures/block/grass_block_side.png") }));
		objectName = "Grass Block";
	} else if (type == "dirt") {
		materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load("/textures/block/dirt.png") }));
		materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load("/textures/block/dirt.png") }));
		materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load("/textures/block/dirt.png") }));
		materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load("/textures/block/dirt.png") }));
		materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load("/textures/block/dirt.png") }));
		materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load("/textures/block/dirt.png") }));
		objectName = "Dirt Block";
	}

	materials.forEach((material, index) => {
		// Grass coloring
		if (type == "grass" && index == 2) {
			material.color.setHex(0xc9ff95);
		}

		material.map.magFilter = THREE.NearestFilter;
		material.map.minFilter = THREE.NearestFilter;
	});

	const mesh = new THREE.Mesh(geometry, materials);
	mesh.name = objectName;

	this.getMesh = function() {
		return mesh;
	}
}