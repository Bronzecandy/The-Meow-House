document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn tải lại trang
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
  
    // Gửi dữ liệu đến Google Form
    var googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfGGuZj4XPLZpKJPlv6FwK5Li3wN50LF7nRCU-NnQRUsXCa5Q/formResponse?"; // Thay thế YOUR_GOOGLE_FORM_URL bằng URL của Google Form của bạn
  
    var formData = new FormData();
    // Thay thế ID1 bằng ID của trường tên trong Google Form
    formData.append("entry.205076403", email); // Thay thế ID2 bằng ID của trường email trong Google Form
  
    fetch(googleFormUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData
    })
      .then(function(response) {
        // Xử lý phản hồi từ Google Form (nếu cần)
        console.log("Dữ liệu đã được gửi thành công đến Google Form!");
        // Thực hiện các hành động khác sau khi gửi thành công
      })
      .catch(function(error) {
        console.error("Có lỗi xảy ra: ", error);
        // Xử lý lỗi (nếu cần)
      });
  
    // Xóa nội dung các trường sau khi gửi thành công
    emailInput.value = "";
  });