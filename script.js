document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".fade-in-image");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the image is visible
    });

    images.forEach((image) => {
        observer.observe(image);
    });
});
