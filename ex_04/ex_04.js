document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    const parallaxLayers = document.querySelectorAll('.parallax-layer');

    parallaxLayers.forEach(function(layer, index) {
        const depth = index * 0.1 + 1; 
        const translateX = x * depth * 100 + 'px'; 
        const translateY = y * depth * 100 + 'px';

        layer.style.transform = 'translate(' + translateX + ', ' + translateY + ')';
    });
});