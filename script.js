// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all FAQ buttons
    const faqButtons = document.querySelectorAll('.faq-question');
    
    // Add click handler to each button
    faqButtons.forEach(button => {
        button.onclick = function() {
            // Get the parent faq-item
            const faqItem = this.parentElement;
            
            // Toggle the active class
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                faqItem.classList.add('active');
            }
        };
    });
}); 

// Index top slider 
const homescroller = function () {
    const t = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        t.forEach(t => {
            t.setAttribute("data-animated", true);
            const e = t.querySelector(".scroller__inner");
            Array.from(e.children).forEach(child => {
                const clone = child.cloneNode(true); // Clone the image
                clone.setAttribute("aria-hidden", true); // Hide from screen readers
                e.appendChild(clone); // Append the clone
            });
        });
    }
}();

// Testimonials slider
document.addEventListener('DOMContentLoaded', function () {
    const testimonialCards = document.querySelector('.testimonial-cards');
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    // Touch events for mobile devices
    testimonialCards.addEventListener('touchstart', touchStart);
    testimonialCards.addEventListener('touchend', touchEnd);
    testimonialCards.addEventListener('touchmove', touchMove);

    // Mouse events for desktop
    testimonialCards.addEventListener('mousedown', touchStart);
    testimonialCards.addEventListener('mouseup', touchEnd);
    testimonialCards.addEventListener('mouseleave', touchEnd);
    testimonialCards.addEventListener('mousemove', touchMove);

    function touchStart(event) {
        if (event.type === 'touchstart') {
            startPos = event.touches[0].clientX;
        } else {
            startPos = event.clientX;
            event.preventDefault(); // Prevent text selection while dragging
        }
        isDragging = true;
        testimonialCards.style.cursor = 'grabbing';
        testimonialCards.style.transition = 'none'; // Disable transition during drag
    }

    function touchEnd() {
        if (!isDragging) return;
        isDragging = false;
        testimonialCards.style.cursor = 'grab';

        // Snap to the nearest card
        const cardWidth = document.querySelector('.testimonial-card').offsetWidth;
        const gap = 48; // Gap between cards
        const totalWidth = cardWidth + gap;
        const snapPosition = Math.round(currentTranslate / totalWidth) * totalWidth;

        // Ensure the snap position is within bounds
        const maxTranslate = 0; // No dragging to the right beyond the first item
        const minTranslate = -((testimonialCards.children.length - 1) * totalWidth); // No dragging to the left beyond the last item

        currentTranslate = Math.max(minTranslate, Math.min(maxTranslate, snapPosition));
        prevTranslate = currentTranslate;

        // Re-enable transition for smooth snapping
        testimonialCards.style.transition = 'transform 0.3s ease-in-out';
        testimonialCards.style.transform = `translateX(${currentTranslate}px)`;
    }

    function touchMove(event) {
        if (!isDragging) return;
    
        const currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        const newTranslate = prevTranslate + currentPosition - startPos;
    
        // Boundary checks with overscroll
        const cardWidth = document.querySelector('.testimonial-card').offsetWidth;
        const gap = 48; // Gap between cards
        const totalWidth = cardWidth + gap;
        const overscroll = 150; // Allow 20px overscroll
        const maxTranslate = overscroll; // Allow dragging 20px to the right beyond the first item
        const minTranslate = -((testimonialCards.children.length - 1) * totalWidth) - overscroll; // Allow dragging 20px to the left beyond the last item
    
        // Clamp the newTranslate value between minTranslate and maxTranslate
        currentTranslate = Math.max(minTranslate, Math.min(maxTranslate, newTranslate));
    
        // Update the position immediately
        testimonialCards.style.transform = `translateX(${currentTranslate}px)`;
    }
});
