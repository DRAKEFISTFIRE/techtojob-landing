"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import "../app/css/Logo3D.css";

export default function HeroLogo3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Evita gastar GPU si el usuario ha pedido menos movimiento.
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      return;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;

    if (!width || !height) return;

    // =====================================================
    // SCENE
    // =====================================================

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      30,
      width / height,
      0.1,
      100
    );

    camera.position.set(0, 0, 7);
    camera.lookAt(0, 0, 0);

    // =====================================================
    // RENDERER
    // =====================================================

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });

    // DPR alto dispara muchísimo el coste de WebGL.
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio || 1, 1.25)
    );

    renderer.setSize(width, height, false);

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    // =====================================================
    // TEXTURE
    // =====================================================

    const textureLoader = new THREE.TextureLoader();

    const texture = textureLoader.load(
      "/images/logotechtojob.png"
    );

    texture.colorSpace = THREE.SRGBColorSpace;

    // =====================================================
    // LOGO
    // =====================================================

    const logo = new THREE.Group();

    const logoWidth = 6.4;
    const logoHeight = 2.13;

    // =====================================================
    // PROFUNDIDAD
    // =====================================================

    // Antes: 26 capas.
    // Ahora: 6 capas.
    //
    // Visualmente sigue existiendo profundidad,
    // pero reducimos muchísimo el trabajo de WebGL.

    const depth = 0.32;
    const layers = 6;

    const depthGeometry = new THREE.PlaneGeometry(
      logoWidth,
      logoHeight
    );

    for (let i = layers; i >= 1; i--) {
      const p = i / layers;

      const depthMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.08,
        color: new THREE.Color(
          0.07 + p * 0.025,
          0.13 + p * 0.035,
          0.14 + p * 0.04
        ),
        side: THREE.FrontSide,
        depthWrite: true,
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

    // =====================================================
    // CARA FRONTAL
    // =====================================================

    const frontGeometry = new THREE.PlaneGeometry(
      logoWidth,
      logoHeight
    );

    const frontMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      alphaTest: 0.08,
      side: THREE.FrontSide,
    });

    const logoFront = new THREE.Mesh(
      frontGeometry,
      frontMaterial
    );

    logoFront.position.z = 0.02;

    logo.add(logoFront);

    scene.add(logo);

    // =====================================================
    // ILUMINACIÓN
    // =====================================================
    //
    // Las luces ya no son necesarias porque usamos
    // MeshBasicMaterial.
    //
    // Esto elimina cálculos de iluminación por fragmento.

    // =====================================================
    // ROTACIÓN
    // =====================================================

    const BASE_ROTATION_Y = -0.08;
    const BASE_ROTATION_X = 0.015;

    const MAX_ROTATION_Y = 0.22;
    const MAX_ROTATION_X = 0.12;

    logo.rotation.y = BASE_ROTATION_Y;
    logo.rotation.x = BASE_ROTATION_X;

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    let frame = 0;
    let renderQueued = false;
    let active = true;

    // Cacheamos el rectángulo.
    // No hacemos getBoundingClientRect() en cada mousemove.
    let rect = container.getBoundingClientRect();

    const updateRect = () => {
      rect = container.getBoundingClientRect();
    };

    // =====================================================
    // RENDER
    // =====================================================

    const render = () => {
      if (!active) return;

      renderQueued = false;

      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      const rotationY =
        BASE_ROTATION_Y +
        currentX * MAX_ROTATION_Y;

      const rotationX =
        BASE_ROTATION_X -
        currentY * MAX_ROTATION_X;

      logo.rotation.y +=
        (rotationY - logo.rotation.y) * 0.14;

      logo.rotation.x +=
        (rotationX - logo.rotation.x) * 0.14;

      renderer.render(scene, camera);

      const stillMoving =
        Math.abs(targetX - currentX) > 0.001 ||
        Math.abs(targetY - currentY) > 0.001 ||
        Math.abs(rotationY - logo.rotation.y) > 0.001 ||
        Math.abs(rotationX - logo.rotation.x) > 0.001;

      if (stillMoving) {
        frame = requestAnimationFrame(render);
      }
    };

    const requestRender = () => {
      if (!active || renderQueued) return;

      renderQueued = true;
      frame = requestAnimationFrame(render);
    };

    // Primer render.
    requestRender();

    // =====================================================
    // POINTER
    // =====================================================

    const onPointerMove = (e: PointerEvent) => {
      const halfWidth = rect.width / 2;
      const halfHeight = rect.height / 2;

      if (halfWidth <= 0 || halfHeight <= 0) return;

      const normalizedX =
        (e.clientX - (rect.left + halfWidth)) /
        halfWidth;

      const normalizedY =
        (e.clientY - (rect.top + halfHeight)) /
        halfHeight;

      targetX = THREE.MathUtils.clamp(
        normalizedX,
        -1,
        1
      );

      targetY = THREE.MathUtils.clamp(
        normalizedY,
        -1,
        1
      );

      requestRender();
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;

      requestRender();
    };

    container.addEventListener(
      "pointermove",
      onPointerMove,
      { passive: true }
    );

    container.addEventListener(
      "pointerleave",
      onPointerLeave,
      { passive: true }
    );

    // =====================================================
    // RESIZE
    // =====================================================

    const resize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      if (!newWidth || !newHeight) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(
        newWidth,
        newHeight,
        false
      );

      updateRect();

      requestRender();
    };

    const resizeObserver = new ResizeObserver(resize);

    resizeObserver.observe(container);

    // =====================================================
    // CLEANUP
    // =====================================================

    return () => {
      active = false;

      cancelAnimationFrame(frame);

      resizeObserver.disconnect();

      container.removeEventListener(
        "pointermove",
        onPointerMove
      );

      container.removeEventListener(
        "pointerleave",
        onPointerLeave
      );

      texture.dispose();

      logo.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) {
          return;
        }

        object.geometry.dispose();

        if (Array.isArray(object.material)) {
          object.material.forEach((material) => {
            material.dispose();
          });
        } else {
          object.material.dispose();
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
      aria-hidden="true"
    />
  );
}