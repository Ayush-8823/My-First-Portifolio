<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Portfolio</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:Arial,sans-serif;background:#0f172a;color:#fff}header{padding:40px;text-align:center;background:linear-gradient(135deg,#2563eb,#7c3aed)}img.profile{width:160px;height:160px;border-radius:50%;object-fit:cover;border:4px solid #fff;box-shadow:0 10px 25px rgba(0,0,0,.25)}h1{margin-top:15px;font-size:2.2rem}.tag{opacity:.9;margin-top:8px}.container{max-width:1000px;margin:auto;padding:30px}.card{background:#111827;border-radius:18px;padding:24px;margin-bottom:24px;box-shadow:0 8px 20px rgba(0,0,0,.2)}h2{margin-bottom:14px;color:#60a5fa}.skills{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}.skill{background:#1f2937;padding:12px;border-radius:12px;text-align:center}.apps a{display:block;background:#1f2937;color:#fff;text-decoration:none;padding:14px;border-radius:12px;margin:10px 0}.apps a:hover{background:#2563eb}.btn{display:inline-block;margin-top:15px;padding:12px 18px;background:#2563eb;color:#fff;text-decoration:none;border-radius:12px}footer{text-align:center;padding:20px;color:#94a3b8}
</style>
</head>
<body>
<header>
  <button id="themeToggle">🌙</button>
  <img src="profile.jpg.jpeg" alt="My Photo" class="profile">
  <h1>Ayush Gupta</h1>
  <p class="tag">Web Developer | App Creator | Designer</p>
  <a href="#apps" class="btn">View My Apps</a>
  
</header>
<div class="container">
  <section class="card">
    <h2>About Me</h2>
    <p>Hi! I'm Ayush Gupta, a creative developer who creates websites and apps. I love making modern UI and smooth user experiences."A motivated BCA graduate with a strong foundation in programming, databases, and software development. Seeking a challenging role in an IT company to utilize my technical and problem-solving skills for business growth.</p>
  </section>

  <section class="card">
    <h2>My Skills</h2>
    <div class="skills">
      <div class="skill">HTML</div>
      <div class="skill">CSS</div>
      <div class="skill">JavaScript</div>
      <div class="skill">Python</div>
      <div class="skill">MySql</div>
    </div>
  </section>
  <section class="card apps" id="apps">
    <h2>My Apps / Projects</h2>
    <a href="https://www.linkedin.com/in/ayush-gupta-64a470252?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">Project 1 - App Link</a>
    <a href="https://www.instagram.com/_official_ayush_8823_?igsh=aDRrZXNlN3FlbDJj" target="_blank">Project 2 - App Link</a>
    <a href="" target="_blank">Project 3 - App Link</a>
  </section>
  <section class="card">
    <h2>Contact me 8081177892</h2>
    <p>Email: ag6082885@gmail.com</p>
    <p>Instagram: _official_ayush_8823_</p>
    <p>LinkedIn: ayush-gupta-64a470252</p>
    <p>Address: Harhua Varanasi UP 221105 </p>
  </section>

</div>

<footer>© 2026 Ayush Gupta. All Rights Reserved.</footer>
<script>
const skills=document.querySelectorAll('.skill');skills.forEach((s,i)=>{s.style.opacity='0';setTimeout(()=>{s.style.transition='0.5s';s.style.opacity='1';},i*150)});
</script>
</body>
</html>
