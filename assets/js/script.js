document.addEventListener("DOMContentLoaded", function() {

    // Logic for Mobile Hamburger Menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Tùy chọn: Đóng menu khi nhấp vào một liên kết
        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }


    // Logic for Ecosystem Accordion
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    if (accordionHeaders) {
        accordionHeaders.forEach(header => {
            header.addEventListener("click", function() {
                const currentItem = this.parentElement;
                const currentlyActiveItem = document.querySelector(".accordion-item.active");

                // Nếu có một mục đang mở và đó không phải là mục vừa được click, hãy đóng nó lại
                if (currentlyActiveItem && currentlyActiveItem !== currentItem) {
                    currentlyActiveItem.classList.remove("active");
                }
                
                // Đóng/mở mục được click
                currentItem.classList.toggle("active");
            });
        });
    }

});