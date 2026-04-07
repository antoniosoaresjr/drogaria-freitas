document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial pause for animation elements if they are far down
    const animatedElements = document.querySelectorAll('.slide-up');
    animatedElements.forEach(el => {
        // Only pause if JS is enabled, otherwise fallback to CSS defaults
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});
