function GeometryLoader() {
	const boxGeometry = new THREE.BoxGeometry(1, 1 ,1);

	this.getGeometry = function(type) {
		switch (type) {
			case "block":
				return boxGeometry;
			default:
				return boxGeometry;
		}
	}
}