// Bắt đầu bằng việc lắng nghe sự kiện "DOMContentLoaded".
// Toàn bộ mã được đặt bên trong khối này để đảm bảo nó chỉ chạy sau khi
// toàn bộ trang web đã được tải xong, tránh các lỗi không đáng có.
document.addEventListener("DOMContentLoaded", function () {

    // --- 1. KHỞI TẠO HIỆU ỨNG NỀN (PARTICLES.JS) ---
    //----------------------------------------------------
    // Khối này kiểm tra xem thư viện "particles.js" đã tồn tại chưa.
    // Nếu có, nó sẽ khởi tạo hiệu ứng mạng lưới các hạt chuyển động với các
    // thông số như số lượng, màu sắc, độ dày đường kẻ, tốc độ...
    // Kiểm tra xem thư viện "particles.js" đã tồn tại và được tải thành công chưa.
    // Điều này giúp tránh lỗi nếu tệp thư viện không được tải về đúng cách.
    if (typeof particlesJS !== 'undefined') {

        // Gọi hàm chính của thư viện để khởi tạo hiệu ứng.
        // "particles-js" là ID của thẻ div trong HTML mà hiệu ứng sẽ được vẽ vào.
        particlesJS("particles-js", {

            // --- CẤU HÌNH CHO CÁC "HẠT" (PARTICLES) ---
            "particles": {
                "number": { "value": 40 },          // Số lượng hạt hiển thị trên màn hình.
                "color": { "value": "#ffffff" },    // Màu sắc của các hạt.
                "opacity": { "value": 0.3 },        // Độ trong suốt của hạt (từ 0 đến 1).
                "size": { "value": 2 },             // Kích thước của mỗi hạt.

                // Cấu hình cho các đường kẻ nối giữa các hạt
                "line_linked": {
                    "distance": 180,                // Khoảng cách tối đa để các đường kẻ xuất hiện giữa 2 hạt.
                    "opacity": 0.2,                 // Độ trong suốt của đường kẻ.
                    "width": 0.5                    // Độ dày của đường kẻ.
                },

                // Cấu hình cho chuyển động của hạt
                "move": {
                    "speed": 1                      // Tốc độ di chuyển của các hạt.
                }
            },

            // --- CẤU HÌNH CHO SỰ TƯƠNG TÁC CỦA NGƯỜI DÙNG ---
            "interactivity": {
                // Các sự kiện sẽ kích hoạt tương tác
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" }, // Khi di chuột qua, kích hoạt chế độ "đẩy lùi".
                    "onclick": { "enable": true, "mode": "push" }    // Khi nhấp chuột, kích hoạt chế độ "thêm mới".
                },

                // Các chế độ tương tác
                "modes": {
                    // Chế độ "đẩy lùi" (repulse)
                    "repulse": {
                        "distance": 80              // Khoảng cách mà các hạt sẽ bị đẩy ra xa con trỏ chuột.
                    },
                    // Chế độ "thêm mới" (push)
                    "push": {
                        "particles_nb": 2           // Số lượng hạt sẽ được thêm vào tại vị trí nhấp chuột.
                    }
                }
            },
        });
    }
    // --- 2. XỬ LÝ NÚT BẤM ĐIỆN THOẠI Ở SIDEBAR ---
    //----------------------------------------------------
    const phoneButton = document.getElementById("phone-button");
    const phonePopup = document.getElementById("phone-popup");

    // Chỉ chạy code nếu cả 2 nút đều tồn tại trên trang
    if (phoneButton && phonePopup) {
        // Khi người dùng bấm vào icon điện thoại
        phoneButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
            phonePopup.classList.toggle("active"); // Hiện hoặc ẩn pop-up
        });
        // Khi người dùng bấm vào bất cứ đâu khác trên trang
        document.addEventListener("click", () => {
            // Nếu pop-up đang mở thì đóng nó lại
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
        // Khi người dùng bấm vào nút hamburger
        hamburger.addEventListener("click", () => {
            // Thêm/xóa lớp 'active' cho cả nút và menu.
            // Mọi hiệu ứng animation (trượt, mờ, hiện...) đều do CSS xử lý
            // dựa vào việc lớp 'active' này có tồn tại hay không.
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }

    // --- 4. XỬ LÝ HEADER "DÍNH LẠI" KHI CUỘN (CHỈ TRÊN MOBILE) ---
    //----------------------------------------------------
    const header = document.querySelector(".header");
    const mainContent = document.querySelector(".main-content");

    if (header && mainContent) {
        // Lấy các giá trị ban đầu để tính toán
        let headerHeight = header.offsetHeight;
        let mainContentPaddingTop = parseInt(window.getComputedStyle(mainContent).paddingTop);

        // Hàm này sẽ được gọi mỗi khi có sự kiện cuộn hoặc thay đổi kích thước
        function handleScroll() {
            // Chỉ áp dụng hiệu ứng khi màn hình rộng <= 768px
            if (window.innerWidth <= 768) {
                // Nếu người dùng đã cuộn qua một khoảng cách nhỏ (10px)
                if (window.pageYOffset > 10) {
                    header.classList.add("sticky"); // Thêm lớp 'sticky' vào header
                    // Thêm khoảng đệm cho nội dung chính để không bị header che mất
                    mainContent.style.paddingTop = headerHeight + 20 + 'px';
                } else {
                    header.classList.remove("sticky"); // Xóa lớp 'sticky'
                    mainContent.style.paddingTop = mainContentPaddingTop + 'px'; // Trả lại khoảng đệm ban đầu
                }
            } else {
                // Trên màn hình lớn, luôn đảm bảo header không dính lại
                header.classList.remove("sticky");
                mainContent.style.paddingTop = mainContentPaddingTop + 'px';
            }
        }

        // Gán hàm handleScroll cho 2 sự kiện: cuộn chuột và thay đổi kích thước cửa sổ
        window.onscroll = handleScroll;
        window.onresize = handleScroll;
    }
});