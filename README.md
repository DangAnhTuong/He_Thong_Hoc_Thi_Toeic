# 🎧 Đề Tài: Xây Dựng Hệ Thống Học và Thi TOEIC Trực Tuyến Toàn Diện Ứng Dụng Công Nghệ Web Hiện Đại

> **Môn học**: Chuyên đề Công nghệ Thông tin  
> **Trường**: Đại học Thủy Lợi (Cơ sở TP.HCM) -- Khoa Công nghệ Thông tin  
> **Sinh viên thực hiện**: **Đặng Anh Tường**  
> **Tài liệu Word hoàn chỉnh (.docx)**: [Bao_Cao_De_Tai_Chuyen_De_CNTT_He_Thong_Hoc_Thi_Toeic.docx](./Bao_Cao_De_Tai_Chuyen_De_CNTT_He_Thong_Hoc_Thi_Toeic.docx)  
> **Báo cáo Thống kê & Đối soát Học liệu (.xlsx)**: [Bao_Cao_Thong_Ke_Hoc_Lieu_TOEIC_STUDY4_DauTOEIC.xlsx](./Bao_Cao_Thong_Ke_Hoc_Lieu_TOEIC_STUDY4_DauTOEIC.xlsx)  
> **Website Vận Hành Thực Tế (Live Production)**: [https://toeic.danganhtuong.dev](https://toeic.danganhtuong.dev)

---

## 📌 1. Giới Thiệu Tổng Quan & Tính Cấp Thiết

Chứng chỉ tiếng Anh quốc tế **TOEIC (Test of English for International Communication)** hiện nay là chuẩn đầu ra ngoại ngữ bắt buộc tại các trường đại học và là tiêu chí tuyển dụng hàng đầu tại các doanh nghiệp. Tuy nhiên, người học hiện nay đối mặt với nhiều khó khăn:
1. **Tài liệu phân mảnh**: Học từ vựng, ngữ pháp và giải đề trên các nền tảng rời rạc, không có hệ thống quản lý tiến độ tổng thể.
2. **Thiếu tính năng tương tác chuyên sâu cho kỹ năng Nghe**: Các nền tảng hiện tại chủ yếu phát audio dài rồi trắc nghiệm, thiếu chế độ **Nghe chép chính tả (Dictation)** từng câu đơn lẻ và so sánh sai lệch văn bản (Text-diff) tức thì.
3. **Ghi nhớ từ vựng thiếu khoa học**: Chưa ứng dụng thuật toán lặp lại ngắt quãng (Spaced Repetition) để chống lại đường cong quên lãng Ebbinghaus.
4. **Phòng thi thử trực tuyến chưa chuẩn hóa**: Đa phần dùng giao diện cuộn dài (infinite scroll), chưa tái hiện được áp lực phòng thi 120 phút trên một khung hình tập trung chuẩn IIG/ETS.

👉 **Đề tài đề xuất nghiên cứu và xây dựng một hệ sinh thái Web toàn diện**, tích hợp đầy đủ các phương pháp sư phạm hiện đại vào một nền tảng duy nhất, phục vụ việc ôn luyện 4 kỹ năng TOEIC từ cơ bản đến nâng cao.

---

## 🔍 2. Tổng Quan Tài Liệu & Bảng So Sánh Đối Sánh (Benchmarking)

### 2.1. Bảng so sánh giữa Đề tài đề xuất với các hệ thống hiện hành

| Tiêu chí kỹ thuật / Nghiệp vụ | Đồ án Web truyền thống | Hệ thống thương mại (Study4 / Prep) | Hệ thống đề tài đề xuất (Tường Tận TOEIC) |
| :--- | :--- | :--- | :--- |
| **Cơ chế Luyện Nghe Chép Chính Tả (Dictation)** | Không có, chỉ phát audio cả bài rồi trắc nghiệm A-B-C-D. | Có cơ bản, nhưng phát cả đoạn dài, chưa có text-diff ký tự. | **Tách từng câu thoại độc lập; 3 chế độ (Điền từ, Chép câu Text-diff Levenshtein, Shadowing AI).** |
| **Thuật toán Ghi nhớ Từ vựng** | Học thuộc danh sách từ tĩnh (Static list). | Flashcard lật thẻ cơ bản, không có thuật toán ngắt quãng. | **Ứng dụng thuật toán Spaced Repetition (SM-2) tính ngày ôn tập + 2 Web Game Cyber Neon.** |
| **Trải nghiệm Phòng Thi Thử TOEIC** | Giao diện cuộn dọc dài, thiếu đồng hồ áp lực. | Cuộn dọc (Infinite scroll), dễ phân tâm, không giống thi thật. | **Giao diện chuẩn IIG 100vh No-scroll, 2 cột độc lập, 200 câu Bubble sheet, đồng hồ đếm ngược 120p.** |
| **Độ sâu Lời giải thích & Dẫn chứng** | Chỉ hiển thị đáp án đúng A/B/C/D, không giải thích. | Có lời giải thích vắn tắt, thiếu phân tích bẫy sư phạm. | **Part 5 phân tích 4 thành phần sư phạm; Part 6-7 có 'Dẫn chứng vị trí trong bài'; Đọc song ngữ đối sánh.** |
| **Cơ chế Thanh toán & Kích hoạt VIP** | Không có hoặc thanh toán mô phỏng không kết nối ngân hàng. | Cổng VNPAY/Momo chuyển hướng, hoặc đối soát thủ công. | **Tự động sinh mã VietQR động Napas247, Webhook ngân hàng tự động kích hoạt VIP 120 ngày tức thì.** |
| **Kiến trúc Hạ tầng & Media** | Lưu file trực tiếp trên localhost hoặc thư mục tĩnh nhỏ. | Phụ thuộc CDN bên thứ ba (AWS S3, Cloudinary), rủi ro đứt link. | **Kiến trúc Zero-Dependency Self-Hosted Media trên VPS Linux; Nginx sendfile streaming cực nhanh.** |

### 2.2. Những điểm mới và cải tiến vượt trội của đề tài (Novelty & Key Innovations)
1. **Đột phá về luyện nghe**: Engine Dictation tách từng câu thoại độc lập + thuật toán **Levenshtein Text-diffing** chỉ ra chính xác từng ký tự gõ sai, từ bị thiếu hoặc phát âm sai.
2. **Đột phá về ghi nhớ từ vựng**: Chu trình **Active Recall 4 bước** (Flashcard -> Trắc nghiệm -> Gõ từ -> Phát âm) kết hợp thuật toán **SuperMemo-2 (SM-2)** tự động lên lịch nhắc nhở đúng thời điểm từ vựng sắp bị quên.
3. **Đột phá về giao diện phòng thi**: Thiết kế **100vh Single-Frame chuẩn IIG** (No-scroll), tái hiện chân thực áp lực thi thật 120 phút trên 1 khung hình 2 cột.
4. **Đột phá về tự động hóa & hạ tầng**: Tự động hóa nạp VIP qua **VietQR Webhook**, 100% tài nguyên audio và hình ảnh được **tự host trên Linux VPS** (Zero Supabase / CDN dependency).

---

## 🗄️ 3. Kiến Trúc Dữ Liệu & Biện Luận Lựa Chọn HQTCSDL

### 3.1. Đặc thù dữ liệu bài thi TOEIC
Dữ liệu đề thi TOEIC mang tính chất **đa hình thái rất cao (Heterogeneous Data)**:
- **Part 1 & 2**: Câu hỏi đơn kèm audio và ảnh chụp.
- **Part 3 & 4**: 1 audio dài gắn liền với 1 cụm đúng 3 câu hỏi con, mỗi câu hỏi lại có 4 đáp án và giải thích riêng.
- **Part 6 & 7**: 1 bài đọc dài (email, thông báo, bài báo) gắn liền với 2 đến 5 câu hỏi con.
- **Từ vựng**: Chứa mảng âm thanh US/UK, ví dụ, phiên âm IPA và trạng thái tiến độ SM-2 riêng biệt của từng học viên.

### 3.2. So sánh lựa chọn: RDBMS (MySQL / PostgreSQL) vs NoSQL (MongoDB)

| Tiêu chí kỹ thuật | RDBMS (MySQL / PostgreSQL) | NoSQL Document-oriented (MongoDB) | Lựa chọn & Đánh giá |
| :--- | :--- | :--- | :--- |
| **Cấu trúc lưu trữ** | Bắt buộc chuẩn hóa thành 12-15 bảng, dữ liệu bị chia nhỏ. | Lưu trữ dạng **BSON/JSON lồng nhau (Embedded Documents)**. Cụm 3 câu Part 3 hay 5 câu Part 7 nằm trọn trong 1 Document. | **MongoDB vượt trội**: Không bị phân mảnh dữ liệu câu hỏi. |
| **Hiệu năng truy vấn** | Cần thực hiện hàng chục phép `JOIN` phức tạp khi tải 1 đề thi 200 câu, gây nghẽn khi nhiều người thi đồng thời. | **Truy vấn nguyên tử (Atomic Read)** không cần JOIN. Chỉ 1 truy vấn đọc trả về trọn vẹn đề thi kèm audio và giải thích (< 15ms). | **MongoDB tối ưu tốc độ đọc**: Phù hợp cho thi thử trực tuyến. |
| **Tính linh hoạt (Flexibility)** | Schema cố định. Thêm trường giải thích, bẫy ngữ pháp phải khóa bảng chạy `ALTER TABLE`. | **Schema-less / Dynamic Schema**. Dễ dàng bổ sung các trường dữ liệu sư phạm mới mà không ảnh hưởng hệ thống. | **MongoDB linh hoạt**: Thuận tiện phát triển tính năng mới. |
| **Tỷ lệ Đọc / Ghi** | Tối ưu cho ghi ACID (ngân hàng, tài chính). | **Tối ưu cực tốt cho bài toán Đọc áp đảo Ghi (Read-heavy, 85:15)** trong các nền tảng giáo dục trực tuyến. | **MongoDB phù hợp bản chất ứng dụng**. |

👉 **Kết luận**: Đề tài chọn **MongoDB** làm Hệ quản trị CSDL chính thức, kết hợp **Mongoose ODM** ở tầng ứng dụng Node.js để quản lý schema validation chặt chẽ.

---

## 🧩 4. Phân Tích Thực Thể Chức Năng (Core Entities)

| Thực thể (Entity) | Các thuộc tính chính (Attributes) | Khóa chính & Quan hệ | Mục đích nghiệp vụ |
| :--- | :--- | :--- | :--- |
| **User** | `_id`, `googleId`, `email`, `fullName`, `avatar`, `role`, `vipExpiresAt`, `streak`, `xp`, `targetScore` | PK: `_id`. Quan hệ 1-N với `Mistakes`, `Orders`, `UserVocabProgress`. | Quản lý danh tính, phân quyền và dữ liệu cá nhân hóa. |
| **MockTest** | `_id`, `testId`, `title`, `year`, `totalQuestions` (200), `durationMinutes` (120), `audioFullUrl` | PK: `_id`. Quan hệ 1-N với `MockTestQuestion`. | Quản lý thông tin chung của các bộ đề thi chuẩn ETS. |
| **MockTestQuestion** | `_id`, `testId`, `part` (1-7), `questionNum`, `promptText`, `options`, `correctOption`, `audioUrl`, `imageUrl`, `explanation` | PK: `_id`. FK: `testId` tham chiếu `MockTest`. | Lưu trữ chi tiết 200 câu hỏi thi kèm media và lời giải thích. |
| **ListeningExercise** | `_id`, `part` (1-4), `level` (1-5), `audioUrl`, `scriptText`, `questions [{ prompt, options, correctOption, explanation }]` | PK: `_id`. | Phục vụ luyện nghe theo Level (Single mode và Passage mode). |
| **DictationSentence** | `_id`, `part`, `testId`, `sentenceIndex`, `audioUrl`, `originalSentence`, `blanks []`, `translationVi`, `difficultyLevel` | PK: `_id`. | Dữ liệu câu thoại phân tách độc lập cho phân hệ Nghe chép chính tả. |
| **ReadingExercise** | `_id`, `part` (5-7), `level`, `passageText`, `questions []`, `pedagogicalExplanation { translation, grammar, tips }` | PK: `_id`. | Bài tập đọc hiểu và ngữ pháp kèm lời giải thích 4 thành phần. |
| **VocabTopic** | `_id`, `topicName`, `category`, `words [{ word, ipa, meaningVi, exampleEn, audioUs, audioUk, imageUrl }]` | PK: `_id`. Quan hệ 1-N với `UserVocabProgress`. | Quản lý 83 chủ đề từ vựng và thẻ học từ. |
| **UserVocabProgress** | `_id`, `userId`, `wordId`, `isLearned`, `easeFactor` (EF), `intervalDays` (I), `repetitionCount`, `nextReviewDate` | PK: `_id`. FK: `userId` tham chiếu `User`. | Lưu trạng thái thuật toán Spaced Repetition cho từng từ của người dùng. |
| **Order** | `_id`, `orderCode` ('TOEICxxxxx'), `userId`, `amount`, `status`, `qrUrl`, `paidAt`, `bankTransactionId` | PK: `_id`. FK: `userId` tham chiếu `User`. | Ghi nhận giao dịch và xử lý Webhook thanh toán VietQR tự động. |

---

## 📊 5. Bảng Đặc Tả INPUT - PROCESSING - OUTPUT Của 8 Phân Hệ

*(Xem chi tiết bảng I/O đầy đủ trong file Word đính kèm [Bao_Cao_De_Tai_Chuyen_De_CNTT_He_Thong_Hoc_Thi_Toeic.docx](./Bao_Cao_De_Tai_Chuyen_De_CNTT_He_Thong_Hoc_Thi_Toeic.docx))*:
1. **Xác thực & Hồ sơ Học viên**: Google OAuth 1-chạm, chuỗi Streak 🔥, điểm XP ⚡, Sổ tay câu sai.
2. **Luyện Nghe Toàn Diện**: Single mode Part 1-2, Passage mode Part 3-4, Nghe chép chính tả (Dictation) 3 chế độ (Điền từ, Chép câu Levenshtein Text-diff, Shadowing).
3. **Luyện Đọc & Ngữ Pháp**: Part 5 giải thích 4 thành phần sư phạm, Part 6-7 trích dẫn dẫn chứng, Đọc song ngữ Anh - Việt đối sánh.
4. **Từ Vựng Spaced Repetition**: Chu trình Active Recall 4 bước, thuật toán SuperMemo-2 (SM-2), 2 Web Game Cyber Neon (Word Blast & Word Match).
5. **Phòng Thi Thử TOEIC Trực Tuyến**: 200 câu Bubble sheet, 120 phút, quy đổi điểm Listening & Reading chuẩn quốc tế 10 - 990.
6. **Đấu Trường Trực Tuyến 1v1**: Ghép trận thời gian thực, thi đấu tốc độ 15s, tính điểm Elo quốc tế và chuỗi thắng.
7. **Thanh Toán Tự Động VietQR**: Sinh mã QR Napas247 động, Webhook ngân hàng tự kích hoạt 120 ngày VIP.
8. **Quản Trị Hệ Thống Admin**: CRUD câu hỏi, kiểm toán dữ liệu Zero-defect, thông báo đẩy toàn sàn tới chuông Navbar 🔔.

---

## 📚 6. Tài Liệu Tham Khảo (References)

* `[1]` Educational Testing Service (ETS), *"TOEIC Examinee Handbook: Listening and Reading,"* Princeton, NJ, USA, 2024.
* `[2]` P. A. Wozniak, *"Optimization of learning: A new approach to the design of repetition spacing algorithms (SuperMemo-2 / SM-2),"* Master's thesis, University of Technology in Poznan, Poland, 1990.
* `[3]` V. I. Levenshtein, *"Binary codes capable of correcting deletions, insertions, and reversals,"* Soviet Physics Doklady, vol. 10, no. 8, pp. 707-710, 1966.
* `[4]` H. Hermann Ebbinghaus, *"Memory: A Contribution to Experimental Psychology,"* Teachers College, Columbia University, New York, 1913.
* `[5]` K. Chodorow, *"MongoDB: The Definitive Guide: Powerful and Scalable Data Storage,"* 3rd ed., O'Reilly Media, 2020.
* `[6]` A. Banks and E. Porcello, *"Learning React: Modern Patterns for Developing React Apps,"* 2nd ed., O'Reilly Media, 2020.
* `[7]` M. Cantelon, M. Harter, T. J. Holowaychuk, and N. Rajlich, *"Node.js in Action,"* Manning Publications, 2017.
* `[8]` I. Fette and A. Melnikov, *"The WebSocket Protocol,"* RFC 6455, Internet Engineering Task Force (IETF), 2011.
* `[9]` Các nền tảng học và thi trực tuyến tham khảo: Study4 (`https://study4.com`), Prep.vn (`https://prep.vn`), Đậu TOEIC (`https://dautoeic.com`).

---
*© 2026 Đặng Anh Tường -- Khoa Công nghệ Thông tin, Trường Đại học Thủy Lợi.*
