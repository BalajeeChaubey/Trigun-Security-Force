import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ShieldScene = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const resize = () => {
      const width = canvas.clientWidth || 600;
      const height = canvas.clientHeight || 600;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();

    const ringGeo = new THREE.TorusKnotGeometry(1.2, 0.22, 220, 32, 2, 3);
    const ringMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#d4af37'),
      emissive: new THREE.Color('#ff8c00'),
      emissiveIntensity: 0.25,
      metalness: 1,
      roughness: 0.18,
      transmission: 0.2,
      clearcoat: 1,
    });
    const knot = new THREE.Mesh(ringGeo, ringMat);
    scene.add(knot);

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(1.95, 0.04, 16, 180),
      new THREE.MeshBasicMaterial({ color: '#ff8c00', transparent: true, opacity: 0.65 })
    );
    halo.rotation.x = 1.1;
    scene.add(halo);

    const ambient = new THREE.AmbientLight('#ffffff', 0.8);
    const point = new THREE.PointLight('#ff8c00', 12, 40);
    point.position.set(3, 2, 5);
    const fill = new THREE.PointLight('#d4af37', 7, 40);
    fill.position.set(-4, -2, 4);
    scene.add(ambient, point, fill);

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      knot.rotation.x += 0.003;
      knot.rotation.y += 0.005;
      halo.rotation.z += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
};
