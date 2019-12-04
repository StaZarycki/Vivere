function Block(type, textureLoader, geometryLoader) {
	const geometry = geometryLoader.getGeometry("block");
	const material = textureLoader.getMaterial(type);
	const objectName = type;
	// BLOCK TYPES

	const mesh = new THREE.Mesh(geometry, material);
	mesh.name = objectName;

	this.getMesh = function() {
		return mesh;
	}
}