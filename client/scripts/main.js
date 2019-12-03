const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
const renderer = new THREE.WebGLRenderer();
const worldManager = new WorldManager(scene);

const controls = new THREE.OrbitControls(camera, renderer.domElement); // Orbit controls

// RENDERER
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xc10fb7, 1);
document.body.appendChild(renderer.domElement);

// SCENE
scene.background = new THREE.Color(0xaaaadd);

worldManager.loadChunks();

camera.position.z = 5;
camera.position.y = 5;
camera.lookAt(new THREE.Vector3(0, 0, 0))
controls.update(); // Orbit controls

const animate = function() {
	requestAnimationFrame(animate);

	controls.update(); // Orbit controls

	renderer.render(scene, camera);
};
animate();
