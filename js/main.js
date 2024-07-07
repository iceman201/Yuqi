document.addEventListener('DOMContentLoaded', () => {
    gsap.to('.balloon1', {
        y: -500,
        duration: 5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
    });

    gsap.to('.balloon2', {
        y: -450,
        duration: 6,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
    });

    gsap.to('.cloud1', {
        x: 800,
        duration: 20,
        ease: 'linear',
        repeat: -1,
        yoyo: true
    });

    gsap.to('.cloud2', {
        x: -1000,
        duration: 25,
        ease: 'linear',
        repeat: -1,
        yoyo: true
    });

    gsap.to('.cloud3', {
        x: 900,
        duration: 30,
        ease: 'linear',
        repeat: -1,
        yoyo: true
    });
});
