function changeContent(contentNumber) {
    var image = document.getElementById('dynamicImage');
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });
    contents[contentNumber - 1].classList.add('active');

    switch(contentNumber) {
        case 1:
            image.src = 'assets/fruits1.jpg';
            break;
        case 2:
            image.src = 'assets/13.jpg';
            break;
        case 3:
            image.src = 'assets/onlinetech.jpg';
            break;
        default:
            image.src = 'assets/13.jpg';
    }
}



let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Ensure index is within bounds
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // Calculate the offset to center the current slide
    const slideWidth = slides[0].clientWidth;
    const gap = 20; // Gap between slides
    const offset = -((slideWidth + gap) * slideIndex);

    // Update the transform property to show the current slide
    document.querySelector('.slides').style.transform = `translateX(${offset}px)`;

    // Update dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    showSlides(slideIndex + 1);
}

function currentSlide(index) {
    showSlides(index);
}

// Automatically cycle through slides
//setInterval(nextSlide, 3000); // Change image every 3 seconds

document.querySelectorAll('.dot').forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        currentSlide(idx);
    });
});




