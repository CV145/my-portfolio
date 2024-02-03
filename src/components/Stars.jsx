import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TornadoParticles = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Set up the scene, camera, and renderer as usual
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Create an array to hold the particles
        const particles = [];

        // Create particles and add them to the scene
        const numParticles = 200;
        for (let i = 0; i < numParticles; i++) {
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White color
            const particle = new THREE.Mesh(new THREE.CircleGeometry(0.01, 6), material);

            // Randomly position particles in 3D space
            particle.position.x = (Math.random() - 0.5) * 10; // Adjust the range as needed
            particle.position.y = (Math.random() - 0.5) * 10;
            particle.position.z = (Math.random() - 0.5) * 10;

            particles.push(particle);
            scene.add(particle);
        }

        // Set the camera position
        camera.position.z = 5;

        // The animate function for tornado-like movement
        const animate = () => {
            requestAnimationFrame(animate);

            // Update the animate function with new motion logic
            const time = Date.now() * 0.0001; // Slow time scale for relaxing motion
            particles.forEach((particle, index) => {
                particle.position.x = Math.sin(time + index) * 5; // Orbit radius of 5, can be adjusted
                particle.position.y = Math.cos(time + index) * 5; // Same orbit radius for y
                particle.position.z = Math.sin(time + index) * 2; // Smaller movement in z for depth effect

                // Optional: Rotate the particle for added visual effect
                particle.rotation.x += 0.01;
                particle.rotation.y += 0.01;
            });


            // Render the scene
            renderer.render(scene, camera);
        };

        // Start the animation loop
        animate();

        // Handle window resizing
        const onWindowResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };
        window.addEventListener('resize', onWindowResize, false);

        // Clean up on unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
            particles.forEach((particle) => {
                scene.remove(particle);
            });
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                overflow: 'hidden', // Hide horizontal overflow
            }}
        ></div>
    );
};

export default TornadoParticles;
