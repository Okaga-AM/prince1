document.addEventListener('DOMContentLoaded', function() {
    var texts = [
      "Happy Valentine's Day Baby 💌💘❤️🌹. Thank you for making every day of my Life Memorable and Special 🌹💕. Thank you for Caring about me the way you do☺️, Words can't describe how sweet you are to me🥰",
      "I didn't think I could be a Poet, but your love made me one☺️💕. I am just lucky God blessed me with his greatest creation of all time 🌹💕. Our Love makes the Ride together worthwhile ❤️",
      "You're the Prettiest Flower 😍🌹 I'm glad I have you in my Garden of Love 💘😘. Your Smile brightens my day and I wish to make you smile everyday ❤️",
      "I want to become better for you because I Love you very much ❤️❤️. You're the only person that I'd always want to have beside me 🥰❤️. I Love you more than the bad days that may be ahead of us❤️, Than any fight we might ever have❤️ than any obstacle that may try to come between us❤️. I Love you More than the Distance between us❤️❤️ I Love you the most 🌹❤️",
      "Wishing you a day as beautiful as our Love story☺️❤️❤️ . Happy Valentine's Day Baby 💞🥂To Us, To Love, and To the countless memories that make our Journey special 🥰❤️...TE VOJO AMORE MIO 😘🥰❤️"
    ];
    var songs = ['./audios/song1.mp3', './audios/song2.mp3', './audios/song3.mp3', './audios/song4.mp3', './audios/song5.mp3'];
  var currentTextIndex = 0;
  var i = 0;
  var speed = 100;
  var typewriter = document.getElementById("typewriter");
  var nextTextButton = document.getElementById("nextText");
  var audio = new Audio();
  var currentSongIndex = 0;

  var startButton = document.getElementById("startButton"); // Assuming you have a start button with this ID

  function typeWriter() {
    if (i < texts[currentTextIndex].length) {
      typewriter.textContent += texts[currentTextIndex].charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      nextTextButton.style.display = 'block';
    }
  }

  function playSong() {
    audio.src = songs[currentSongIndex];
    audio.play();
  }

  startButton.addEventListener('click', function() {
    startButton.style.display = 'none'; // Hide the start button
    playSong(); // Play the first song
    typeWriter(); // Start the typewriter effect
  });

  nextTextButton.addEventListener('click', function() {
    if (currentTextIndex < texts.length - 1) {
      currentTextIndex++;
      i = 0;
      typewriter.textContent = '';
      nextTextButton.style.display = 'none';
      typeWriter();
      if (currentSongIndex < songs.length - 1) {
        currentSongIndex++;
        playSong();
      }
    } else {
      nextTextButton.style.display = 'none';
    }
  });
});