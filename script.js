import * as THREE from 'three';

// Configuración básica de Three.js
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffc0cb); // Color rosa

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('world') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear un objeto 3D (ejemplo: cubo)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff69b4 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animación
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Minijuegos (lógica básica)
document.getElementById('play-uno').addEventListener('click', () => {
    alert('¡Jugar Uno no está implementado aún! Pero se verá aquí.');
});

document.getElementById('play-tictactoe').addEventListener('click', () => {
    alert('¡Jugar 3 en Raya no está implementado aún! Pero se verá aquí.');
});

// Ajustar el canvas al tamaño de la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});