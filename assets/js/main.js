// Bắt đầu bằng việc lắng nghe sự kiện "DOMContentLoaded".
// Toàn bộ mã được đặt bên trong khối này để đảm bảo nó chỉ chạy sau khi
// toàn bộ trang web đã được tải xong, tránh các lỗi không đáng có.
document.addEventListener("DOMContentLoaded", function() {

    // --- 1. KHỞI TẠO HIỆU ỨNG NỀN (PARTICLES.JS) ---
    //----------------------------------------------------
    // Khối này kiểm tra xem thư viện "particles.js" đã tồn tại chưa.
    // Nếu có, nó sẽ khởi tạo hiệu ứng mạng lưới các hạt chuyển động.
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            // Cấu hình cho các "hạt" (particles)
            "particles": {
                "number": { "value": 48 },          // Số lượng hạt.
                "color": { "value": "#ffffff" },    // Màu sắc của hạt.
                "opacity": { "value": 0.3 },        // Độ trong suốt của hạt.
                "size": { "value": 2 },             // Kích thước của hạt.
                "line_linked": {                    // Cấu hình đường kẻ nối giữa các hạt.
                    "distance": 180,                // Khoảng cách tối đa để nối.
                    "opacity": 0.2,                 // Độ trong suốt của đường kẻ.
                    "width": 0.5                    // Độ dày của đường kẻ.
                },
                "move": { "speed": 1 }              // Tốc độ di chuyển của hạt.
            },
            // Cấu hình cho sự tương tác của người dùng
            "interactivity": {
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" }, // Khi di chuột qua: đẩy lùi hạt.
                    "onclick": { "enable": true, "mode": "push" }    // Khi nhấp chuột: thêm hạt mới.
                },
                "modes": {
                    "repulse": { "distance": 80 },  // Khoảng cách đẩy lùi.
                    "push": { "particles_nb": 2 }   // Số lượng hạt thêm vào khi nhấp.
                }
            },
        });
    }

    // --- 2. XỬ LÝ NÚT BẤM ĐIỆN THOẠI Ở SIDEBAR ---
    //----------------------------------------------------
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

    // --- 3. XỬ LÝ ĐÓNG/MỞ MENU TRÊN MOBILE ---
    //----------------------------------------------------
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }
    
    // --- 4. XỬ LÝ HEADER "DÍNH LẠI" KHI CUỘN (CHỈ TRÊN MOBILE) ---
    //----------------------------------------------------
    const header = document.querySelector(".header");
    
    if (header) {
        let lastScrollY = window.scrollY; // Lưu vị trí cuộn cuối cùng

        window.addEventListener("scroll", () => {
            // Hiệu ứng chỉ hoạt động trên mobile
            if (window.innerWidth <= 768) { 
                // Nếu cuộn xuống và đã qua khỏi đỉnh 1 chút, ẩn header
                if (lastScrollY < window.scrollY && window.scrollY > 150) {
                    header.classList.add("header-hidden");
                } else {
                    // Nếu cuộn lên, hiện header trở lại
                    header.classList.remove("header-hidden");
                }
                lastScrollY = window.scrollY; // Cập nhật vị trí cuộn

                // Thêm hiệu ứng nền trắng và bóng đổ khi không ở trên cùng
                if (window.scrollY > 50) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }
            }
        });
    }
});
