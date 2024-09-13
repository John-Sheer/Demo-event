const box = document.getElementById('box');

// Animation 1 : Translation vers la droite sur un click
box.addEventListener('click', () => {
    gsap.to(box, { x: 500, duration: 1 });
});

// Animation 2 : Double clic pour revenir à la position initiale
box.addEventListener('dblclick', () => {
    gsap.to(box, { x: 0, duration: 1 });
});

// Animation 3 : Agrandir la boîte sur mouseover
box.addEventListener('mouseover', () => {
    gsap.to(box, { scale: 1.5, duration: 0.5 });
});

// Animation 4 : Réduire la taille sur mouseout
box.addEventListener('mouseout', () => {
    gsap.to(box, { scale: 1, duration: 0.5 });
});

// Animation 5 : Rotation sur un clic droit (contextmenu)
box.addEventListener('contextmenu', (e) => {
    e.preventDefault();  // Empêche le menu contextuel par défaut
    gsap.to(box, { rotation: 360, duration: 1 });
});