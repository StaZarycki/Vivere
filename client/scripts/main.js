const stats = new Stats();
document.body.appendChild(stats.dom);
const scene = new THREE.Scene();

let renderDistance = 30;

const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	renderDistance
);
const renderer = new THREE.WebGLRenderer();
const textureLoader = new TextureLoader();
const geometryLoader = new GeometryLoader();
const worldManager = new WorldManager(scene, textureLoader, geometryLoader);

const controls = new THREE.OrbitControls(camera, renderer.domElement); // Orbit controls

// RENDERER
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xc10fb7, 1);
document.body.appendChild(renderer.domElement);

// SCENE
scene.background = new THREE.Color(0xaaaadd);
scene.fog = new THREE.FogExp2(0xaaaadd, 1 / renderDistance * 2);

// WORLD MANAGER
worldManager.setWorldSize(8);
worldManager.generateChunks();
worldManager.loadChunks();

camera.position.y = 10;
camera.lookAt(new THREE.Vector3(0, 0, 0))
controls.update(); // Orbit controls

const animate = function() {
	requestAnimationFrame(animate);

	controls.update(); // Orbit controls

	renderer.render(scene, camera);
	stats.update();
};
animate();