# 🎧 Đề Tài: Xây Dựng Hệ Thống Học và Thi TOEIC Trực Tuyến Toàn Diện Ứng Dụng Công Nghệ Web Hiện Đại

> **Môn học**: Chuyên đề Công nghệ Thông tin  
> **Trường**: Đại học Thủy Lợi (Cơ sở TP.HCM) -- Khoa Công nghệ Thông tin  
> **Sinh viên thực hiện**: **Đặng Anh Tường**  
> **Tài liệu đặc tả chi tiết**: [Bao_Cao_De_Tai_Chuyen_De_CNTT_He_Thong_Hoc_Thi_Toeic.docx](./Bao_Cao_De_Tai_Chuyen_De_CNTT_He_Thong_Hoc_Thi_Toeic.docx)

---

## 📌 1. Giới Thiệu Tổng Quan & Tính Cấp Thiết Của Đề Tài

Chứng chỉ tiếng Anh quốc tế **TOEIC (Test of English for International Communication)** hiện nay là chuẩn đầu ra ngoại ngữ bắt buộc tại các trường đại học và là tiêu chí tuyển dụng hàng đầu tại các doanh nghiệp. Tuy nhiên, người học hiện nay đối mặt với nhiều khó khăn:
1. **Tài liệu phân mảnh**: Học từ vựng, ngữ pháp và giải đề trên các nền tảng rời rạc, không có hệ thống quản lý tiến độ tổng thể.
2. **Thiếu tính năng tương tác chuyên sâu cho kỹ năng Nghe**: Các nền tảng hiện tại chủ yếu phát audio dài rồi trắc nghiệm, thiếu chế độ **Nghe chép chính tả (Dictation)** từng câu đơn lẻ và so sánh sai lệch văn bản (Text-diff) tức thì.
3. **Ghi nhớ từ vựng thiếu khoa học**: Chưa ứng dụng thuật toán lặp lại ngắt quãng (Spaced Repetition) để chống lại đường cong quên lãng Ebbinghaus.
4. **Phòng thi thử trực tuyến chưa chuẩn hóa**: Đa phần dùng giao diện cuộn dài (infinite scroll), chưa tái hiện được áp lực phòng thi 120 phút trên một khung hình tập trung chuẩn IIG/ETS.

👉 **Đề tài đề xuất nghiên cứu và xây dựng một hệ sinh thái Web toàn diện**, tích hợp đầy đủ các phương pháp sư phạm hiện đại vào một nền tảng duy nhất, phục vụ việc ôn luyện 4 kỹ năng TOEIC từ cơ bản đến nâng cao.

---

## 🎯 2. Mục Tiêu Cần Đạt Được

- **Mục tiêu tổng quát**: Xây dựng ứng dụng Web học và thi thử TOEIC chuẩn ETS quốc tế, giao diện hiện đại, tốc độ phản hồi nhanh, cá nhân hóa lộ trình học tập.
- **Mục tiêu cụ thể**:
  - Thiết kế kiến trúc 3 tầng (**Client - Server - Database**) với **React 18**, **Node.js (Express)** và **MongoDB**.
  - Xây dựng phân hệ **Nghe Chép Chính Tả (Dictation)** 3 chế độ: Điền từ khuyết, Chép cả câu (Text-diff Levenshtein), và Luyện nhại giọng (Shadowing).
  - Xây dựng phân hệ **Luyện Đọc & Ngữ Pháp** với giải thích sư phạm 4 thành phần cho Part 5 và chế độ Đọc song ngữ Anh - Việt đối sánh.
  - Ứng dụng thuật toán **Spaced Repetition (SuperMemo-2 / SM-2)** và tích hợp **2 Web Games Cyber Neon** (Word Blast & Word Match).
  - Xây dựng **Phòng Thi Thử ETS 100vh No-scroll** (120 phút, 200 câu Bubble sheet, tính điểm chuẩn IIG 10 - 990).
  - Tích hợp cổng **Thanh toán tự động VietQR** với Webhook xử lý kích hoạt tài khoản thời gian thực.
  - Triển khai hệ thống lên **Ubuntu Linux VPS**, cấu hình **Nginx Reverse Proxy** và phân phối streaming Media tự chủ hoàn toàn.

---

## 🛠️ 3. Ngăn Xếp Công Nghệ (Technology Stack)

```text
               ┌─────────────────────────────────────────┐
               │         Client (Presentation)           │
               │  React 18 • Vite • TailwindCSS • Lucide │
               │     Web Audio API • Web Speech API      │
               └────────────────────┬────────────────────┘
                                    │ HTTPS / RESTful API
               ┌────────────────────┴────────────────────┐
               │       Server (Application / Logic)      │
               │    Node.js • Express • JWT • Google API │
               │   VietQR Webhook • SM-2 Algorithm Engine│
               └────────────────────┬────────────────────┘
                                    │ Mongoose ODM
               ┌────────────────────┴────────────────────┐
               │          Database (Data Storage)        │
               │           MongoDB Community Server      │
               └─────────────────────────────────────────┘
```

| Thành phần | Công nghệ / Thư viện | Vai trò |
| :--- | :--- | :--- |
| **Frontend** | React 18, Vite 5, JavaScript ES6+ | Xây dựng Single Page Application, Virtual DOM render tối ưu. |
| **Giao diện & Styling** | Tailwind CSS, Lucide React | Utility-first CSS, đồng nhất Dark Theme hiện đại, Responsive toàn diện. |
| **Xử lý âm thanh** | HTML5 Web Audio API, Web Speech API | Phát audio byte-range streaming, tua mượt mà, nhận diện giọng nói. |
| **Backend API** | Node.js, Express.js | Xử lý I/O bất đồng bộ, kiến trúc RESTful API chuẩn REST. |
| **Cơ sở dữ liệu** | MongoDB, Mongoose ODM | Lưu trữ cấu trúc JSON linh hoạt của ngân hàng câu hỏi và dữ liệu học viên. |
| **Xác thực** | JWT (JSON Web Token), Google OAuth 2.0 | Xác thực 1-chạm danh tính người dùng thật, loại trừ tài khoản rác. |
| **Thanh toán tự động** | VietQR Dynamic Generator, Banking Webhook | Tự động sinh mã QR và kích hoạt gói học viên VIP thời gian thực. |
| **Hạ tầng & Media** | Ubuntu Linux VPS, Nginx, SSL Let's Encrypt | Reverse Proxy, streaming media tự chủ với Nginx `sendfile`. |

---

## 📊 4. Bảng Đặc Tả Chi Tiết INPUT - PROCESSING - OUTPUT Của 8 Phân Hệ

### 1. Phân hệ Xác thực & Hồ sơ Học viên (Auth & User Hub)
* **INPUT**: Google OAuth Token từ Client popup, mục tiêu điểm số (Target Score), thời gian học dự kiến.
* **PROCESSING**: Xác thực token qua Google API; tạo/cập nhật tài khoản trong MongoDB; sinh mã JWT Access Token; tính toán chuỗi ngày học liên tục (Streak 🔥) và cộng dồn điểm kinh nghiệm (XP ⚡).
* **OUTPUT**: JWT Token lưu tại Client; Dashboard cá nhân hóa hiển thị huy hiệu Streak, thanh tiến độ % mục tiêu ngày, sổ tay lưu trữ câu làm sai (/mistakes).

### 2. Phân hệ Luyện Nghe Toàn Diện (Listening: Part 1 - 4 & Dictation)
* **INPUT**: Thao tác chọn đáp án A-D; văn bản gõ vào ô chính tả (Dictation); bản ghi âm giọng nói qua micro (Shadowing).
* **PROCESSING**: Phân phối audio byte-range qua Nginx; kiểm tra đáp án tức thì; thuật toán Levenshtein Text-diff so sánh sai lệch từng ký tự; nhận diện giọng nói Speech-to-Text.
* **OUTPUT**: Giao diện phòng nghe 2 cột; ảnh chụp Part 1 trên đỉnh cột trái; phản hồi Đúng/Sai màu sắc trực quan; highlight từ gõ đúng (xanh lá) / từ gõ sai hoặc thiếu (đỏ gạch chân); bảng transcript đầy đủ.

### 3. Phân hệ Luyện Đọc & Ngữ Pháp (Reading: Part 5 - 7 & Song Ngữ)
* **INPUT**: Lựa chọn đáp án trắc nghiệm A-D; thao tác bật/tắt bản dịch song ngữ Anh - Việt đối sánh.
* **PROCESSING**: Kiểm tra đáp án; mở khóa hệ thống giải thích 4 thành phần cho Part 5 (Dịch câu, Ngữ pháp, Phân tích 4 đáp án, Mẹo bẫy ETS); trích xuất câu dẫn chứng (Evidence highlight) trong đoạn văn Part 6-7.
* **OUTPUT**: Bảng phân tích sư phạm chi tiết tiếng Việt; văn bản song ngữ đối sánh dòng đậm/nghiêng; hộp từ vựng cốt lõi có phiên âm IPA và nghĩa.

### 4. Phân hệ Từ Vựng Lặp Lại Ngắt Quãng & Gamification (SM-2 & Games)
* **INPUT**: Tương tác lật thẻ Flashcard, chọn nghĩa trắc nghiệm, gõ từ, phát âm; đánh giá độ nhớ qua 4 nút (Học lại, Khó, Tốt, Dễ); thao tác chơi game Word Blast / Word Match.
* **PROCESSING**: Thuật toán SuperMemo-2 (SM-2) tính toán lại Hệ số dễ (Ease Factor) và Khoảng thời gian ôn (Interval); quản lý hàng đợi từ đến hạn ôn hàng ngày; Game loop 60 FPS tính combo liên hoàn.
* **OUTPUT**: Hàng đợi ôn tập Spaced Repetition thông minh; bộ đếm từ cần ôn hôm nay; hiệu ứng game Cyber Neon sống động; bảng xếp hạng điểm game.

### 5. Phòng Thi Thử TOEIC Trực Tuyến Chuẩn Quốc Tế (ETS Mock Test 100vh)
* **INPUT**: Lệnh bắt đầu làm bài; phiếu điền 200 câu trắc nghiệm (Bubble sheet); đồng hồ đếm ngược 120 phút.
* **PROCESSING**: Tự động chuyển câu theo luồng đọc audio ở phần Listening; tự động lưu tạm đáp án liên tục; so khớp 200 đáp án và quy đổi điểm Listening (5-495) & Reading (5-495) theo ma trận chuẩn IIG quốc tế.
* **OUTPUT**: Bảng điểm chuẩn ETS (Tổng điểm 10 - 990); biểu đồ radar phân tích điểm mạnh/yếu theo từng Part; danh sách chi tiết các câu đúng/sai kèm lời giải thích.

### 6. Đấu Trường Trực Tuyến 1v1 & Bảng Xếp Hạng (Battle Arena & Leaderboard)
* **INPUT**: Lệnh tham gia hàng chờ ghép trận; câu trả lời trắc nghiệm tốc độ trong khung giờ 15 giây/câu.
* **PROCESSING**: Ghép cặp người chơi theo điểm Elo tương đương; tính điểm dựa trên độ chính xác và tốc độ; áp dụng công thức Elo quốc tế cập nhật điểm xếp hạng và chuỗi thắng.
* **OUTPUT**: Màn hình VS đối kháng; thanh điểm số cập nhật realtime; vinh danh người chiến thắng; cập nhật Bảng xếp hạng Top học viên (Leaderboard).

### 7. Hệ Thống Thanh Toán Tự Động & Kích Hoạt VIP (VietQR Webhook Engine)
* **INPUT**: Yêu cầu nâng cấp gói VIP học tập; thông tin giao dịch chuyển khoản ngân hàng qua mã QR.
* **PROCESSING**: Tạo đơn hàng với mã định danh duy nhất; sinh URL VietQR động theo chuẩn Napas247; đón nhận tín hiệu Webhook từ hệ thống ngân hàng; xác thực và tự động cập nhật `role = 'pro'` (120 ngày VIP).
* **OUTPUT**: Khung thanh toán mã VietQR hiển thị trực tiếp; thông báo kích hoạt VIP thành công tức thì không cần can thiệp thủ công; mở khóa 100% ngân hàng đề thi.

### 8. Phân hệ Quản Trị Hệ Thống & Báo Cáo Thống Kê (Admin Dashboard)
* **INPUT**: Thao tác CRUD câu hỏi/đề thi; nội dung phát thông báo toàn sàn (Announcement); bộ lọc báo cáo thống kê.
* **PROCESSING**: Kiểm tra tính toàn vẹn dữ liệu (Zero defect); lưu trữ và phát thông báo đẩy tới chuông Navbar của học viên; tổng hợp chỉ số tăng trưởng người dùng và doanh thu (Aggregation).
* **OUTPUT**: Bảng điều khiển quản trị trực quan; biểu đồ thống kê lượt làm đề và doanh thu; chuông thông báo 🔔 trên tài khoản người học.

---

## 📅 5. Lộ Trình Triển Khai Dự Kiến (12 Tuần)

* **Giai đoạn 1 (Tuần 1 - 2)**: Khảo sát thực trạng, đặc tả yêu cầu, thiết kế kiến trúc hệ thống và ca sử dụng (Use Cases).
* **Giai đoạn 2 (Tuần 3 - 5)**: Thiết kế CSDL MongoDB, xây dựng RESTful API core (Auth, User Hub, Listening, Reading) và Wireframe UI.
* **Giai đoạn 3 (Tuần 6 - 8)**: Lập trình phân hệ Dictation, Luyện đọc song ngữ, thuật toán Spaced Repetition SM-2 và 2 Web Games.
* **Giai đoạn 4 (Tuần 9 - 10)**: Xây dựng phòng thi thử 100vh chuẩn ETS, tích hợp cổng thanh toán VietQR Webhook và Admin Dashboard.
* **Giai đoạn 5 (Tuần 11 - 12)**: Kiểm toán toàn diện hệ thống (Zero defect), kiểm thử E2E, triển khai hệ thống lên Ubuntu Linux VPS với Nginx SSL.

---

## 📂 6. Cấu Trúc Thư Mục Tài Liệu Bàn Giao

```text
He_Thong_Hoc_Thi_Toeic/
├── README.md                                                   # Bản mô tả tổng quan đề tài (Markdown)
└── Bao_Cao_De_Tai_Chuyen_De_CNTT_He_Thong_Hoc_Thi_Toeic.docx    # File tài liệu đặc tả Word chuẩn học thuật
```

---
*© 2026 Đặng Anh Tường -- Khoa Công nghệ Thông tin, Trường Đại học Thủy Lợi.*
