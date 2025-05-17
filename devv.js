document.addEventListener("DOMContentLoaded", function () {
    const love = document.getElementById("love");
    const message = document.getElementById("message");
  
    // Fungsi untuk munculkan love berjatuhan
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerText = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  
      document.getElementById("hearts").appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
  
    setInterval(createHeart, 80); // setiap 300ms munculkan 1 love jatuh
  
    // Klik layar: mainkan musik
    window.addEventListener("click", function () {
      const music = document.getElementById("bgMusic");
      if (music.paused) {
        music.play();
      }
    });
  
    // Klik love: munculkan teks
    love.addEventListener("click", () => {
      message.textContent = "What's your number?";
      message.style.opacity = 1;
  
      setTimeout(() => {
        message.style.opacity = 0;
      }, 4000);
    });
  });
  