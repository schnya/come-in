"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  // シーンの設定
  const createScene = () => {
    const scene = new THREE.Scene();
    return scene;
  };

  // カメラの設定
  const createCamera = () => {
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 100, 20); // 高い位置にカメラを配置
    camera.rotation.x = -Math.PI / 2.2; // 真下に近い角度に設定
    return camera;
  };

  // レンダラーの設定
  const createRenderer = () => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    return renderer;
  };

  // ビルの作成（複数ビルを配置）
  const createBuildings = (
    scene: THREE.Scene,
    textureLoader: THREE.TextureLoader
  ) => {
    const buildingTexture = textureLoader.load(
      "/textures/square_tiled_wall_disp_4k.png"
    );
    const buildingMaterial = new THREE.MeshBasicMaterial({
      map: buildingTexture,
    });
    const buildings = [];

    // 複数ビルをランダムに配置
    for (let i = 0; i < 10; i++) {
      const buildingGeometry = new THREE.BoxGeometry(10, 200, 10);
      const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
      building.position.set(
        Math.random() * 100 - 50,
        100,
        Math.random() * 100 - 50
      ); // ランダムな位置に配置
      buildings.push(building);
      scene.add(building);
    }

    return buildings;
  };

  // 地面の作成
  const createGround = (
    scene: THREE.Scene,
    textureLoader: THREE.TextureLoader
  ) => {
    const groundTexture = textureLoader.load(
      "/textures/precast_stone_paving_disp_4k.png"
    );
    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set(10, 10);

    const groundMaterial = new THREE.MeshBasicMaterial({ map: groundTexture });
    const groundGeometry = new THREE.PlaneGeometry(200, 200);
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);
  };

  // 照明の設定
  const createLights = (scene: THREE.Scene) => {
    const ambientLight = new THREE.AmbientLight(0x404040); // 環境光
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 100, 50);
    scene.add(directionalLight);
  };

  // 落下アニメーション
  const setupAnimation = (
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene
  ) => {
    let falling = false;
    let velocity = 0;
    const gravity = 0.01; // 重力の加速度
    const maxVelocity = 20; // 落下の最大速度

    function animate() {
      requestAnimationFrame(animate);

      if (falling) {
        velocity += gravity;
        velocity = Math.min(velocity, maxVelocity); // 最大速度制限
        camera.position.y -= velocity;

        if (camera.position.y <= 1) {
          camera.position.y = 1; // 地面に到達
          falling = false;
          velocity = 0; // 落下終了
        }
      }

      renderer.render(scene, camera);
    }

    animate();

    // クリックで落下開始
    window.addEventListener("click", () => {
      falling = true;
    });

    // リサイズ対応
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  };

  useEffect(() => {
    const currentMount = mountRef.current;

    if (!currentMount) return;

    const scene = createScene();
    const camera = createCamera();
    const renderer = createRenderer();
    currentMount.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();

    createGround(scene, textureLoader); // 地面を作成
    createBuildings(scene, textureLoader); // 複数のビルを作成
    createLights(scene); // 照明を作成

    setupAnimation(camera, renderer, scene); // アニメーションとイベント設定

    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: -90, opacity: 0.5 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />
    </motion.div>
  );
}
