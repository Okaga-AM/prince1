document.addEventListener('DOMContentLoaded', function() {
    var i = 0;
    var txt = "Happy Valentine's Day Baby 💌💘🥀. Thank you for making everyday of my Life Memorable and Special 🌹💕. Thank you for Caring about me the way you do☺️, Words can't describe how sweet you are to me🥰";
    var speed = 100; // The speed/duration of the effect in milliseconds
  
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("typewriter").textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
  });


  
document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio("song.mp3");
    audio.play();
  });