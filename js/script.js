document.addEventListener('DOMContentLoaded', function () {
    // Select all planets and the sun
    const celestialBodies = document.querySelectorAll('.planet, .sun');
    const popup = document.getElementById('popup');
    const planetName = document.getElementById('planet-name');
    const planetDetails = document.getElementById('planet-details');
    const closeButton = document.getElementById('close-popup'); // Close button

    // Attach click event to all celestial bodies (planets and the sun)
    celestialBodies.forEach(body => {
        body.addEventListener('click', () => {
            const name = body.getAttribute('data-name');
            const details = body.getAttribute('data-details');

            if (name && details) {
                planetName.textContent = name;
                planetDetails.textContent = details;
                popup.style.display = 'block';
            } else {
                console.error('Data attributes missing for:', body);
            }
        });
    });

    // Close popup when clicking on the close button
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close popup when clicking outside of it
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.planet') && !e.target.closest('.sun') && !e.target.closest('.popup-content')) {
            popup.style.display = 'none';
        }
    });
});
