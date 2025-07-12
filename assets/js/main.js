document.addEventListener("DOMContentLoaded", function() {

    // --- Code cho Particle JS ---
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": { "number": { "value": 48, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.3, "random": false }, "size": { "value": 2, "random": true }, "line_linked": { "enable": true, "distance": 180, "color": "#ffffff", "opacity": 0.2, "width": 0.5 }, "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false } },
            "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "repulse": { "distance": 80, "duration": 0.4 }, "push": { "particles_nb": 2 }, "remove": { "particles_nb": 1 } } },
            "retina_detect": true
        });
    }

    // --- Code xử lý Sidebar Trái ---
    const phoneButton = document.getElementById("phone-button");
    const phonePopup = document.getElementById("phone-popup");

    if (phoneButton && phonePopup) {
        phoneButton.addEventListener("click", (event) => {
            event.stopPropagation();
            phonePopup.classList.toggle("active");
        });
        document.addEventListener("click", () => {
            if (phonePopup.classList.contains("active")) {
                phonePopup.classList.remove("active");
            }
        });
    }

    // --- LOGIC MENU MOBILE ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }
    
    //
    // *** CODE MỚI CHO STICKY MAIN-NAV TRÊN MOBILE ***
    //
    const topBar = document.querySelector(".top-bar");
    const mainNav = document.querySelector(".main-nav");
    const mainContent = document.querySelector(".main-content");

    if (topBar && mainNav && mainContent) {
        // Lấy chiều cao của top-bar để biết khi nào cần dính main-nav lại
        const topBarHeight = topBar.offsetHeight;

        function handleScroll() {
            // Chỉ chạy trên mobile
            if (window.innerWidth <= 768) {
                if (window.pageYOffset > topBarHeight) {
                    // Nếu cuộn qua khỏi top-bar
                    if (!mainNav.classList.contains('main-nav-sticky')) {
                        mainNav.classList.add("main-nav-sticky");
                        // Thêm padding cho nội dung chính để không bị giật
                        mainContent.style.paddingTop = mainNav.offsetHeight + 'px';
                    }
                } else {
                    if (mainNav.classList.contains('main-nav-sticky')) {
                        mainNav.classList.remove("main-nav-sticky");
                        // Trả lại padding ban đầu
                        mainContent.style.paddingTop = ''; 
                    }
                }
            } else {
                // Trên desktop, luôn xóa class sticky và trả lại padding
                mainNav.classList.remove("main-nav-sticky");
                mainContent.style.paddingTop = '';
            }
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
    }
});
