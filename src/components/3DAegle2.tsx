import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Define the component as a React Functional Component with no props
interface ModelProps {
  model_path: string;
}

const DroneModel: React.FC<ModelProps> = ({ model_path }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, camera, and renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 5); // Increased intensity
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5); // Increased intensity
    directionalLight.position.set(0.5, 1, 1);
    scene.add(ambientLight);
    scene.add(directionalLight);

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load(
      model_path,
      (gltf) => {
        scene.add(gltf.scene);
        gltf.scene.position.set(0, 0, 0); // Center the model
        console.log("Model loaded:", gltf.scene); // Confirm model loads
      },
      undefined,
      (error) => console.error("An error happened", error)
    );

    // Controls to rotate the model
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    camera.position.set(0, 1, 2); // Adjust if necessary to fit the model
    camera.lookAt(scene.position);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(135deg, #9ae1ff 0%, #df8c96 53%, #ff6464 100%)"
      }}
    />
  );
};

export default DroneModel;
