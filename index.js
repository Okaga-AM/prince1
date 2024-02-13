document.addEventListener('DOMContentLoaded', function() {
    var i = 0;
    var messages = [
      "Happy Valentine's Day Baby💘",
      "Thank you for making everyday..",
      "of my Life Memorable.. ",
      "and Special🌹💕",
      "Thank you for Caring about me..",
      "the way you do☺️",
      "Words can't describe...",
      "how sweet you are to me🥰"
    ];
    var currentMessage = 0;
    var speed = 100; // The speed/duration of the effect in milliseconds
  
    function typeWriter() {
        if (i < messages[currentMessage].length) {
          document.getElementById("demo").textContent += messages[currentMessage].charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        } else {
          setTimeout(function() {
            i = 0;
            currentMessage++;
            document.getElementById("demo").textContent = ''; // Clear the text
            if (currentMessage < messages.length) {
              setTimeout(typeWriter, 1500); // Pause for 1.5 seconds before starting the next message
            } else {
              var cursor = document.querySelector('.cursor');
              if (cursor) {
                cursor.style.display = 'none';
              }
            }
          }, 200);
        }
      }
    typeWriter();
  });