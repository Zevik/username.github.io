// טיפול בשליחת טופס
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('הטופס נשלח בהצלחה!');
    this.reset();
});

// אנימציה לכרטיסים בעת גלילה
function animateOnScroll() {
    const elements = document.querySelectorAll('.card');
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('fade-in');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
