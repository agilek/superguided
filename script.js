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
