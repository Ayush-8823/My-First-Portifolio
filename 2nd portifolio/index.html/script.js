const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){
    themeToggle.innerHTML = "☀️";
  } else {
    themeToggle.innerHTML = "🌙";
  }
});

const skills = document.querySelectorAll(".skill");

skills.forEach((skill, i) => {
  skill.style.opacity = "0";
  skill.style.transform = "translateY(20px)";

  setTimeout(() => {
    skill.style.transition = "0.5s ease";
    skill.style.opacity = "1";
    skill.style.transform = "translateY(0)";
  }, i * 300);
});