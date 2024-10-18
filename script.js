let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0; // Kembali ke slide pertama
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Kembali ke slide terakhir
    }

    const offset = -currentSlide * 100; // Menggeser gambar
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

