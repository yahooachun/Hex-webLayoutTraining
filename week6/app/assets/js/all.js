$(function() {
  AOS.init({
    duration: 2000,
  });
});

// 偵測選單，如果是對應的頁面就加上 active 效果
const url = window.location.pathname;
$(".js-menulink").each(function () {
  $(this).removeClass("active");
  if ($(this).attr("href") == url.substring(url.lastIndexOf("/") + 1)) {
    $(this).addClass("active");
  }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();