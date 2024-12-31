document.addEventListener('DOMContentLoaded', () => {
    // ตัวเลข 4 จางหายไป และเลข 5 ปรากฏขึ้น
    setTimeout(() => {
        document.getElementById('number-4').style.opacity = '0';
        document.getElementById('number-5').style.opacity = '1';
    }, 2000);

    // เพิ่มลูกโป่งจำนวนมาก
    const balloonContainer = document.querySelector('.balao-container');
    const numberOfBalloons = 80;

    for (let i = 0; i < numberOfBalloons; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balao');
        balloon.style.setProperty('--hue', Math.random()); // สีสุ่ม
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.animationDuration = `${Math.random() * 3 + 2}s`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        balloonContainer.appendChild(balloon);
    }
});
