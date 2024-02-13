
    document.addEventListener('DOMContentLoaded', function() {
  var i = 0;
  var txt = "Happy Valentine's Day Baby💘";
  var speed = 100; // The speed/duration of the effect in milliseconds

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").textContent += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      var cursor = document.querySelector('.cursor');
      if (cursor) {
        cursor.style.display = 'none';
      }
    }
  }

  typeWriter();
});
