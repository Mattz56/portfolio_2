<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";

const threeContainer = ref(null);

onMounted(() => {
  if (!threeContainer.value) return;

  // 1. Création de la scène
  const scene = new THREE.Scene();

  // 2. Création de la caméra
  const camera = new THREE.PerspectiveCamera(
    75,
    threeContainer.value.clientWidth / threeContainer.value.clientHeight,
    0.1,
    1000
  );
  camera.position.setZ(32);

  // 3. Création du renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(
    threeContainer.value.clientWidth,
    threeContainer.value.clientHeight
  );
  threeContainer.value.appendChild(renderer.domElement);

  // 4. Ajout d'une forme
  const geometry = new THREE.TorusKnotGeometry(10, 2.5, 100, 30);
  //   const material = new THREE.MeshStandardMaterial({ color: 0xd9f2e1 });
  //   const material = new THREE.MeshStandardMaterial({ color: 0xb6e4c8 });
  const material = new THREE.MeshStandardMaterial({ color: 0x53b481 });
  const torusKnot = new THREE.Mesh(geometry, material);

  scene.add(torusKnot);

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(50, 50, 50);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  const light = new THREE.AmbientLight(0xffffff);

  scene.add(light, pointLight, directionalLight);

  // 5. Animation
  const animate = () => {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.005;
    torusKnot.rotation.z += 0.01;
    renderer.render(scene, camera);
  };

  animate();

  // Gestion de la mise à l'échelle
  window.addEventListener("resize", () => {
    camera.aspect =
      threeContainer.value.clientWidth / threeContainer.value.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(
      threeContainer.value.clientWidth,
      threeContainer.value.clientHeight
    );
  });
});
</script>
<style scoped>
.three-container {
  width: 500px;
  height: 500px;
}
</style>
