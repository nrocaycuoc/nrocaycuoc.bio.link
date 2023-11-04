/* scriptgg.js */
document.querySelectorAll('.my-link').forEach(link => {
    link.addEventListener('click', function() {
      this.style.color = '#FFA500'; // Thay đổi màu chữ thành màu cam khi click
    });
  });
  