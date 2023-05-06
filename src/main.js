import * as THREE from "three";
import Movements from "./movement";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf1ed11);
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const area_geometry = new THREE.BoxGeometry(50, 0.5, 50);
const area_material = new THREE.MeshPhongMaterial({ color: 0xf1edff });
const area = new THREE.Mesh(area_geometry, area_material);
scene.add(area);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshPhongMaterial({ color: 0xf1ed11 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const cylinder_geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
const cylinder_material = new THREE.MeshPhongMaterial({ color: 0x1f3f00 });
const cylinder = new THREE.Mesh(cylinder_geometry, cylinder_material);
scene.add(cylinder);
cylinder.position.set(20, 5, 0);

camera.position.z = 5;
camera.position.set(10, 5, 40);

const ambient_light = new THREE.AmbientLight(0x4040);
const direction_light = new THREE.DirectionalLight(0x00ff00, 1);
ambient_light.add(direction_light);
scene.add(ambient_light);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.05;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  cylinder.rotation.z += 0.01;

  //for left key
  if (Movements.isPressed(37)) {
    camera.position.x -= 0.5;
  }

  //for up key

  if (Movements.isPressed(38)) {
    camera.position.x += 0.5;
    camera.position.y += 0.5;
  }
  //for right key
  if (Movements.isPressed(39)) {
    camera.position.x += 0.5;
  }
  //for down key
  if (Movements.isPressed(40)) {
    camera.position.x -= 0.5;
    camera.position.y -= 0.5;
  }
  camera.lookAt(area.position);
  renderer.render(scene, camera);
}

animate();
