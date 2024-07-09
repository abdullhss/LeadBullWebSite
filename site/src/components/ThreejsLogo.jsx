import '../styles/ThreejsLogo.css';
import { gsap } from "gsap";
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { TweenMax } from 'gsap';

export default function ThreejsLogo() {
  useEffect(() => {
    let scene, camera, renderer, particles, sprite, imageCanvas;

    function init() {
      // Create the scene and a camera
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 1000;

      // Create the renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Create a canvas to draw the image
      imageCanvas = document.createElement('canvas');
      const context = imageCanvas.getContext('2d');
      const img = new Image();
      img.src = "../../public/man.png";  // Replace with your image path
      img.onload = () => {
        imageCanvas.width = img.width;
        imageCanvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
        createParticles();
      };
    }

    function createParticles() {
      const imageData = imageCanvas.getContext('2d').getImageData(0, 0, imageCanvas.width, imageCanvas.height).data;
      const geometry = new THREE.BufferGeometry();
      const material = new THREE.PointsMaterial({
        size: 3,
        color: 0xffffff,
        transparent: true,
        opacity: 0.7
      });

      const particles = [];
      const particlePositions = [];

      for (let y = 0, y2 = imageCanvas.height; y < y2; y += 4) {
        for (let x = 0, x2 = imageCanvas.width; x < x2; x += 4) {
          if (imageData[(x + y * imageCanvas.width) * 4 + 3] > 128) {
            const vertex = new THREE.Vector3();
            vertex.x = x - imageCanvas.width / 2;
            vertex.y = -y + imageCanvas.height / 2;
            vertex.z = 0;

            particles.push(vertex);
            particlePositions.push(vertex.x, vertex.y, vertex.z);
          }
        }
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      animate(particles);
    }

    function animate(particles) {
      particles.forEach(particle => {
        const tween = gsap.to(particle, {
          x: particle.x + (Math.random() - 0.5) * 2000,
          y: particle.y + (Math.random() - 0.5) * 2000,
          z: particle.z + (Math.random() - 0.5) * 2000,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut"
        });

        tween.progress(Math.random());
      });

      requestAnimationFrame(render);
    }

    function render() {
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    init();
    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="threejs-logo-container">
      <div id="threejs-logo"></div>
    </div>
  );
}
