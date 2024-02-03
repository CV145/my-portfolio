import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RotatingBlueBall = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Set up the scene, camera, and renderer as usual
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Create the blue ball
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Blue color
        const ball = new THREE.Mesh(geometry, material);
        scene.add(ball);

        // Set the camera position
        camera.position.z = 5;

        // Create a directional light
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 1, 5);
        scene.add(light);

        // The animate function for rotation
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the ball
            ball.rotation.x += 0.01;
            ball.rotation.y += 0.01;

            // Render the scene
            renderer.render(scene, camera);
        };

        // Start the animation loop
        animate();

        // Handle window resizing
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onWindowResize, false);

        // Clean up on unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
            scene.remove(ball);
            geometry.dispose();
            material.dispose();
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    return <div ref={mountRef}></div>;
};

export default RotatingBlueBall;
