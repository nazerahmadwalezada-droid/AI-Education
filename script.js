const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");
menuBtn?.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".section,.feature-card,.step,.quote,.gallery-grid figure").forEach(el=>{
  el.classList.add("reveal"); observer.observe(el);
});