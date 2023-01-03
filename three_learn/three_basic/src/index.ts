import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new Three.Scene();

const camera = new Three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

camera.position.set(0, 0, 10);
scene.add(camera);

const boxGeometry = new Three.BoxGeometry(1, 1, 1);
const boxMaterial = new Three.MeshBasicMaterial({ color: 0xffff00 });

const cube = new Three.Mesh(boxGeometry, boxMaterial);

// cube.position.x = 0.5;

scene.add(cube);

const axes = new Three.AxesHelper();
scene.add(axes);

const renderer = new Three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// control
const control = new OrbitControls(camera, renderer.domElement);

function render(time?: DOMHighResTimeStamp) {
  // console.log(time);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

// render();
requestAnimationFrame(render);
