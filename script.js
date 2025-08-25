// Typing effect
const texts = ["Developer", "Designer", "Engineer"];
let index = 0, charIndex = 0;
const typingSpan = document.querySelector(".typing-text span");

function type() {
  if (charIndex < texts[index].length) {
    typingSpan.textContent += texts[index][charIndex];
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingSpan.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);

  // Animate skills progress bars
  const progressBars = document.querySelectorAll(".progress-fill");
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => { bar.style.width = width; }, 500);
  });
});
