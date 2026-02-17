/* =====================================
   SMARTHUB PROFESSIONAL SCRIPT 2026
   Centralized, Scalable, Future-Proof
===================================== */


/* ===== DARK MODE WITH SAVE ===== */
function toggleDark(){
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
  } else {
    localStorage.setItem("theme","light");
  }
}

/* Load Saved Theme */
window.addEventListener("load",()=>{
  if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
  }
});


/* ===== MOBILE MENU TOGGLE ===== */
function toggleMenu(){
  const menu = document.querySelector("nav");
  menu.classList.toggle("active");
}


/* ===== SCROLL ANIMATION ===== */
function revealOnScroll(){
  document.querySelectorAll(".card").forEach(card=>{
    const position = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(position < windowHeight - 100){
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll",revealOnScroll);
window.addEventListener("load",revealOnScroll);


/* ===== BACK TO TOP BUTTON ===== */
const topBtn = document.createElement("button");
topBtn.innerText="↑";
topBtn.id="topBtn";
document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.padding="10px 14px";
topBtn.style.borderRadius="8px";
topBtn.style.border="none";
topBtn.style.cursor="pointer";
topBtn.style.background="#2563eb";
topBtn.style.color="#fff";
topBtn.style.display="none";

window.addEventListener("scroll",()=>{
  if(document.documentElement.scrollTop > 300){
    topBtn.style.display="block";
  } else {
    topBtn.style.display="none";
  }
});

topBtn.addEventListener("click",()=>{
  window.scrollTo({top:0,behavior:"smooth"});
});


/* ===== AGE CALCULATOR ===== */
function calculateAge(){
  const dobInput = document.getElementById("dob");
  if(!dobInput || !dobInput.value) return;

  const dob = new Date(dobInput.value);
  const diff = Date.now() - dob.getTime();
  const age = new Date(diff).getUTCFullYear() - 1970;

  document.getElementById("ageResult").innerText = "Age: " + age + " years";
}


/* ===== BMI CALCULATOR ===== */
function calculateBMI(){
  const weight = document.getElementById("weight");
  const height = document.getElementById("height");

  if(!weight || !height || !weight.value || !height.value) return;

  const h = height.value / 100;
  const bmi = (weight.value / (h*h)).toFixed(2);

  document.getElementById("bmiResult").innerText = "BMI: " + bmi;
}


/* ===== EMI CALCULATOR ===== */
function calculateEMI(){
  const p = document.getElementById("loan");
  const r = document.getElementById("rate");
  const n = document.getElementById("months");

  if(!p || !r || !n || !p.value || !r.value || !n.value) return;

  const principal = parseFloat(p.value);
  const rate = parseFloat(r.value)/12/100;
  const months = parseFloat(n.value);

  const emi = (principal*rate*Math.pow(1+rate,months))/
              (Math.pow(1+rate,months)-1);

  document.getElementById("emiResult").innerText =
      "Monthly EMI: ₹" + emi.toFixed(2);
}


/* ===== BLOG SEARCH SYSTEM ===== */
function blogSearch(query){
  query = query.toLowerCase();

  document.querySelectorAll(".blog-card").forEach(card=>{
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });
}


/* ===== GLOBAL SEARCH (OPTIONAL) ===== */
function globalSearch(){
  const input = document.getElementById("searchInput");
  if(!input) return;

  const filter = input.value.toLowerCase();

  document.querySelectorAll(".searchable").forEach(item=>{
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(filter) ? "" : "none";
  });
}


/* ===== SIMPLE CONTACT FORM VALIDATION ===== */
function validateForm(){
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if(!name.value || !email.value || !message.value){
    alert("Please fill all fields");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}


/* ===== SMOOTH INTERNAL LINK SCROLL ===== */
document.querySelectorAll("a[href^='#']").forEach(anchor=>{
  anchor.addEventListener("click",function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({behavior:"smooth"});
    }
  });
});
