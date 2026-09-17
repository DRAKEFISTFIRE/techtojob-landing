
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import "../app/css/Logo3D.css";

export default function HeroLogo3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      30,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    camera.position.set(0, 0, 7);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    // =====================================================
    // LOGO
    // =====================================================

    const texture = new THREE.TextureLoader().load(
      "/images/logotechtojob.png"
    );

    texture.colorSpace = THREE.SRGBColorSpace;

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      alphaTest: 0.08,
      side: THREE.DoubleSide,
    });

    const geometry = new THREE.PlaneGeometry(6.4, 2.13);

    const logoFront = new THREE.Mesh(
      geometry,
      material
    );

    // =====================================================
    // PROFUNDIDAD
    // =====================================================

    const logo = new THREE.Group();

    const depth = 0.32;
    const layers = 26;

    for (let i = layers; i >= 1; i--) {
      const p = i / layers;

      const depthGeometry = new THREE.PlaneGeometry(
        6.4,
        2.13
      );

      const depthMaterial =
        new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
          alphaTest: 0.08,

          color: new THREE.Color(
            0.05 + p * 0.035,
            0.11 + p * 0.045,
            0.12 + p * 0.05
          ),

          roughness: 0.24,
          metalness: 0.16,
          side: THREE.DoubleSide,
        });

      const layer = new THREE.Mesh(
        depthGeometry,
        depthMaterial
      );

      layer.position.x = -p * 0.075;
      layer.position.y = -p * 0.025;
      layer.position.z = -p * depth;

      logo.add(layer);
    }

    // Cara frontal
    logoFront.position.z = 0.02;
    logo.add(logoFront);

    scene.add(logo);

    // =====================================================
    // ILUMINACIÓN
    // =====================================================

    scene.add(
      new THREE.AmbientLight(0xffffff, 1.5)
    );

    const light = new THREE.DirectionalLight(
      0xd8ffff,
      4
    );

    light.position.set(-3, 4, 5);
    scene.add(light);

    const fill = new THREE.DirectionalLight(
      0xffffff,
      1.8
    );

    fill.position.set(4, -1, 4);
    scene.add(fill);

    const rim = new THREE.PointLight(
      0x6fffff,
      4,
      10
    );

    rim.position.set(-3, -2, 3);
    scene.add(rim);

    // =====================================================
    // ROTACIÓN INICIAL
    // =====================================================

    const initialRotationX = 0.015;
    const initialRotationY = -0.08;

    logo.rotation.y = initialRotationY;
    logo.rotation.x = initialRotationX;

    // =====================================================
    // MOUSE / TILT
    // =====================================================

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    // Intensidad del efecto
    const MAX_ROTATION_Y = 0.22;
    const MAX_ROTATION_X = 0.12;

    // Posición inicial del logo
    const BASE_ROTATION_Y = -0.08;
    const BASE_ROTATION_X = 0.015;

    const onPointerMove = (e: PointerEvent) => {
    const rect = container.getBoundingClientRect();

    // Centro del contenedor
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Distancia del ratón respecto al centro
    // -1 ... 1
    const normalizedX =
        (e.clientX - centerX) / (rect.width / 2);

    const normalizedY =
        (e.clientY - centerY) / (rect.height / 2);

    // Limitamos para evitar giros exagerados
    const x = THREE.MathUtils.clamp(
        normalizedX,
        -1,
        1
    );

    const y = THREE.MathUtils.clamp(
        normalizedY,
        -1,
        1
    );

    targetX = x;
    targetY = y;
    };

    const onPointerLeave = () => {
    targetX = 0;
    targetY = 0;
    };

    container.addEventListener(
    "pointermove",
    onPointerMove
    );

    container.addEventListener(
    "pointerleave",
    onPointerLeave
    );

    // =====================================================
    // ANIMATION
    // =====================================================

    let frame = 0;

    const animate = () => {
    frame = requestAnimationFrame(animate);

    // Suavizado
    currentX +=
        (targetX - currentX) * 0.045;

    currentY +=
        (targetY - currentY) * 0.045;

    // Rotación objetivo
    const rotationY =
        BASE_ROTATION_Y +
        currentX * MAX_ROTATION_Y;

    const rotationX =
        BASE_ROTATION_X -
        currentY * MAX_ROTATION_X;

    // Suavizado final
    logo.rotation.y +=
        (rotationY - logo.rotation.y) * 0.08;

    logo.rotation.x +=
        (rotationX - logo.rotation.x) * 0.08;

    renderer.render(
        scene,
        camera
    );
    };

    animate();




    // =====================================================
    // RESIZE
    // =====================================================

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", resize);

    resize();

    // =====================================================
    // CLEANUP
    // =====================================================

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener(
        "resize",
        resize
      );

      container.removeEventListener(
        "pointermove",
        onPointerMove
      );

      container.removeEventListener(
        "pointerleave",
        onPointerLeave
      );

      texture.dispose();

      logo.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();

          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });

      renderer.dispose();

      if (
        renderer.domElement.parentNode === container
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-logo-3d"
    />
  );
}

