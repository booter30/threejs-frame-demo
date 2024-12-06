'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(300, 200); // Fixed size for frame
    containerRef.current.appendChild(renderer.domElement);

    // Create cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x6366f1,
      wireframe: true
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Position camera
    camera.position.z = 3;

    // Animation function
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <div ref={containerRef} className="border rounded-lg overflow-hidden bg-gray-900" />
    </div>
  );
}