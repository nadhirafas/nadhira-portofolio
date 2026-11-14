const CV_URL="assets/cv/Nadhira-Farra-CV.pdf"; 
const PROC={
"pad":["User research","User persona","Information architecture","User flows","Wireframes","Role-based dashboards","Interactive prototype"],
"resto-kita":["User research","User persona","Problem identification","Customer flow","Menu, cart & checkout UI","Admin interface"],
"nomnom":["Problem selection","Ideation (HMW, SCAMPER)","Persona","Interviews & observation","Validation","Concept refinement","Interface design"],
"gears-up":["Content structure","Navigation","Page layouts","Visual components"]
};
const ICONS={"gmail": "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z", "linkedin": "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", "github": "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"};
const CONTACT={email:"nadhiraafas@gmail.com",linkedin:"https://www.linkedin.com/in/nadhira-farra-aisya-46a2b8326/",github:"https://github.com/nadhirafas"};
const LINKS={gears:"https://www.figma.com/design/VhwgdgU66b9TlfJYz1B0yK/UI-Gears-Up-?node-id=0-1&p=f",pad_fig:"https://www.figma.com/design/pIazhUk6yra9hiGJ60nhrV/MonPAD?node-id=1439-21790",resto_fig:"https://www.figma.com/design/GFsIlkN8KTYSy0nNtQePsH/Restoran-Kita?node-id=151-1621&t=hvixESoRQsc4A6gQ-1"};

const SKILLS=[
["UX/UI Design",["User Research & Validation","User Flows","Information Architecture","Wireframing","Prototyping","Design Systems","Usability Evaluation"]],
["Development",["HTML","CSS","JavaScript","Vue.js","Vite","React.js","PHP","Laravel","Blade","SQL"]],
["Tools",["Figma","Canva","CapCut","Git & GitHub","Docker","Microsoft Excel","Google Workspace"]]];

const P=[
{id:"nomnom",origin:"Self-initiated",ctx:"Course project, team of 4",n:"01",t:"NomNom",sub:"AI Food Recommendation App",cat:"UX/UI Design · Mobile Application",type:"ui",role:"UX/UI Designer",status:"Design Prototype",
blurb:"A food recommendation app concept for university students. Our team chose the problem, then reshaped the idea after research with 31 respondents.",
over:["NomNom is an AI-powered food recommendation app concept designed to help university students find suitable meals based on their budget, distance, available time, and food preferences.","Following the validation process, the concept was refined to provide more relevant recommendations and useful information, including prices, menus, locations, ratings, user reviews, food photos, and restaurant operating status.","The app also features a “Surprise Me” option for users who prefer instant recommendations without having to make their own selections."],
challenge:"Choosing what to eat can be challenging for students, especially when they need to consider several factors such as budget, distance, time, and personal preferences. The goal was to create a more helpful food discovery experience that provides not only recommendations but also sufficient information to support users in making decisions.",
contrib:["Explored the food discovery problem among university students.","Developed the AI Food Recommender concept.","Participated in the validation process.","Refined the concept based on user feedback.","Designed the application interface and user experience."],
features:["Personalized food recommendations","Budget-based recommendations","Distance and time considerations","Food preferences","Detailed restaurant and food information","Surprise Me instant recommendation feature"],
shots:["Recommendation experience","Budget & distance filters","Food details","Surprise Me feature"],
links:[["Figma","https://www.figma.com/design/cgih6Jlx4LFAHwysXQUQyP/UI-NomNom?node-id=2-464&t=sLzUmVbHErEa3Fc7-1"]],note:"NomNom is a design concept and prototype."},
{id:"pad",origin:"Stakeholder requirements",n:"02",t:"MonPAD",sub:"Course Monitoring System",cat:"UX/UI Design · Dashboard Design",type:"ui",role:"UX/UI Designer",
blurb:"A web-based platform designed to help students, teaching assistants, and lecturers monitor academic activities in one centralized system.",
over:["MonPAD is a web-based course monitoring platform designed to centralize academic activity management. The system provides different interfaces for students, teaching assistants, and lecturers, allowing each role to access relevant academic information and monitor course activities."],
challenge:"Academic activities involve multiple users with different responsibilities. A centralized platform is needed to make course monitoring and information access more organized and accessible.",
contrib:["Explored the system requirements and user needs.","Designed the information architecture and user flows.","Created wireframes and interface designs.","Designed dashboards based on different user roles.","Developed an interactive prototype."],
shots:["Student dashboard","Teaching assistant dashboard","Lecturer dashboard","Other interface screens"],
links:[["Figma",LINKS.pad_fig]]},
{id:"resto-kita",origin:"Stakeholder requirements",n:"03",t:"Resto-Kita",sub:"Restaurant Ordering System",cat:"UX/UI Design · Web Application",type:"ui",role:"UX/UI Designer",
blurb:"A digital restaurant ordering platform that simplifies the ordering process through QR-based access, online menus, and order management.",
over:["Resto-Kita is a web-based restaurant ordering system designed to improve the dining experience by simplifying the ordering process.","Customers can access the digital menu through a QR code, select their preferred items, and complete their orders without relying entirely on manual cashier interactions."],
challenge:"Traditional restaurant ordering processes can be time-consuming, especially when customers need to wait for assistance from the cashier. A more convenient ordering experience is needed for both customers and restaurant staff.",
contrib:["Identified the main problems in the restaurant ordering process.","Designed customer ordering flows.","Created menu browsing, cart, and checkout interfaces.","Designed payment selection interfaces.","Designed the admin interface for managing incoming orders."],
features:["QR-based menu access","Digital menu browsing","Shopping cart and checkout","Digital payment and cash payment options","Admin order management"],
shots:["Customer ordering experience","Menu, cart & checkout","Payment selection","Administrative interface"],
links:[["Figma",LINKS.resto_fig]]},
{id:"gears-up",origin:"Stakeholder requirements",n:"04",t:"Gears Up",sub:"Company Profile Website",cat:"UX/UI Design · Web Design",type:"ui",role:"UX/UI Designer",
blurb:"A company profile website designed to create a professional digital presence through a cohesive visual identity and intuitive user experience.",
over:["A company profile website designed to establish a professional and engaging digital presence. The project focuses on creating a cohesive visual identity, clear information structure, and intuitive navigation to help visitors understand the company and its services."],
contrib:["Designed the website interface and page layouts.","Developed the visual direction and design elements.","Organized content structure and navigation.","Created consistent visual components across website pages.","Refined the overall browsing experience."],
shots:["Homepage","Company information","Services","Team section"],showTitle:"Design Showcase (Figma)",
links:[["Figma",LINKS.gears]],note:""},
{id:"siyudis",origin:"Stakeholder requirements",n:"05",t:"SiYudis",sub:"Graduation Information System",cat:"Frontend Development · Web Application",type:"dev",role:"Frontend Developer",status:"In Progress",
blurb:"A centralized graduation management system developed to streamline academic administration through an integrated digital platform.",
over:["SiYudis is a web-based graduation information system developed for the Department of Electrical Engineering and Informatics, UGM Vocational College.","The platform aims to centralize the graduation administration process, replacing fragmented workflows previously handled through Google Forms and WhatsApp with a more organized digital system."],
contrib:["Implemented user interfaces based on provided Figma designs.","Developed frontend components and application pages.","Built interactive frontend functionality.","Integrated frontend components with backend services.","Implemented interfaces for different user roles."],
stack:["JavaScript","Vue.js","Vite"],shots:["Login page","Student dashboard","Document submission interface","Administrative pages (where available)"],showTitle:"Design & Implementation Showcase",
links:[["Figma","https://www.figma.com/design/SCc6mAacZrtq3bLyaNLY2t/SiYudis?node-id=0-1&t=M3h0yEUApk9d6DuZ-1"],["GitHub","https://github.com/nadhirafas/siyudis-fe"]],
note:"This project is still in progress."},
{id:"pustaka",origin:"Course assignment",ctx:"Midterm project",n:"06",t:"Pustaka",sub:"Personal Book Collection Website",cat:"Full-Stack Web Development · Web Application",type:"dev",role:"Full-Stack Web Developer",status:"Completed (Local Development)",
blurb:"A personal book management website that allows users to organize and manage their book collections through an integrated CRUD system.",
over:["Pustaka is a personal book collection management website that allows users to organize and keep track of books they have added to their collection.","The platform provides an integrated frontend and backend, enabling users to manage their book records through a complete CRUD system."],
contrib:["Developed the frontend and backend components.","Implemented user authentication.","Built book collection management functionality.","Implemented create, read, update, and delete operations.","Integrated frontend and backend functionality."],
features:["User login and authentication","Book collection listing","Add new books","View saved book information","Edit book details","Delete book records"],
stack:["PHP","Laravel","Blade","Vue.js","CSS","JavaScript","Docker"],shots:["Login page","Book collection list","Add / edit form","Book management interface"],showTitle:"Design & Implementation Showcase",
links:[["GitHub","https://github.com/nadhirafas/uts-pl-24535556SV24264/tree/main"]],note:"Runs locally with an integrated frontend and backend."}
];

const $=s=>document.querySelector(s);
const FL='<svg class="fl" viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor" stroke="var(--text)" stroke-width="2"><ellipse cx="50" cy="24" rx="12" ry="22"/><ellipse cx="50" cy="24" rx="12" ry="22" transform="rotate(60 50 50)"/><ellipse cx="50" cy="24" rx="12" ry="22" transform="rotate(120 50 50)"/><ellipse cx="50" cy="24" rx="12" ry="22" transform="rotate(180 50 50)"/><ellipse cx="50" cy="24" rx="12" ry="22" transform="rotate(240 50 50)"/><ellipse cx="50" cy="24" rx="12" ry="22" transform="rotate(300 50 50)"/></g><circle cx="50" cy="50" r="11" fill="var(--lilac)" stroke="var(--text)" stroke-width="2"/></svg>';
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ul=(a,c="list")=>`<ul class="${c}">${a.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;

const SHOTS={"gears-up": {"layout": "wins", "items": [{"src": "assets/img/gears-up/01-homepage.webp", "w": 1280, "h": 4590, "label": "Homepage", "url": "Figma · Homepage", "k": "win", "bg": "#ffffff"}, {"src": "assets/img/gears-up/02-about-company-information.webp", "w": 1280, "h": 2817, "label": "About / company information", "url": "Figma · About", "k": "win", "bg": "#ffffff"}, {"src": "assets/img/gears-up/03-programs.webp", "w": 1280, "h": 2604, "label": "Programs", "url": "Figma · Programs", "k": "win", "bg": "#dce3fe"}, {"src": "assets/img/gears-up/04-gallery.webp", "w": 1280, "h": 2763, "label": "Gallery", "url": "Figma · Gallery", "k": "win", "bg": "#fff2f0"}]}, "pad": {"layout": "wins3", "items": [{"src": "assets/img/pad/01-student-dashboard.webp", "w": 745, "h": 752, "label": "Student dashboard", "url": "Role: Student", "k": "win", "bg": "#281c3b"}, {"src": "assets/img/pad/02-teaching-assistant-dashboard.webp", "w": 947, "h": 720, "label": "Teaching assistant dashboard", "url": "Role: Teaching Assistant", "k": "win", "bg": "#291b3d"}, {"src": "assets/img/pad/03-lecturer-dashboard.webp", "w": 848, "h": 737, "label": "Lecturer dashboard", "url": "Role: Lecturer", "k": "win", "bg": "#291b3d"}]}, "resto-kita": {"layout": "wins", "items": [{"src": "assets/img/resto-kita/01-customer-menu-browsing.webp", "w": 1280, "h": 2480, "label": "Customer · Menu browsing", "url": "Customer view", "k": "win", "bg": "#3f2623"}, {"src": "assets/img/resto-kita/06-customer-cart.webp", "w": 1280, "h": 2480, "label": "Customer · Cart", "url": "Customer view", "k": "win", "bg": "#3f2623"}, {"src": "assets/img/resto-kita/02-customer-order-list.webp", "w": 1280, "h": 1287, "label": "Customer · Order list (add more)", "url": "Customer view", "k": "win", "bg": "#3f2623"}, {"src": "assets/img/resto-kita/03-customer-checkout-payment.webp", "w": 1280, "h": 1239, "label": "Customer · Checkout & payment", "url": "Customer view", "k": "win", "bg": "#3f2623"}, {"src": "assets/img/resto-kita/04-customer-order-details.webp", "w": 1280, "h": 1464, "label": "Customer · Order details", "url": "Customer view", "k": "win", "bg": "#3f2623"}, {"src": "assets/img/resto-kita/05-admin-order-management.webp", "w": 1280, "h": 932, "label": "Admin · Order management", "url": "Admin view", "k": "win", "bg": "#533379"}]}, "siyudis": {"layout": "wins", "items": [{"src": "assets/img/siyudis/01-student-dashboard.webp", "w": 1280, "h": 607, "label": "Student dashboard", "url": "localhost:5173/dashboard", "k": "win", "bg": "#053e74"}, {"src": "assets/img/siyudis/02-staff-administration-dashboard.webp", "w": 1280, "h": 607, "label": "Staff administration dashboard", "url": "localhost:5173/super-admin/dashboard", "k": "win", "bg": "#053e74"}, {"src": "assets/img/siyudis/03-role-management-super-admin.webp", "w": 1280, "h": 607, "label": "Role management (Super Admin)", "url": "localhost:5173/super-admin/management-role", "k": "win", "bg": "#053e74"}, {"src": "assets/img/siyudis/04-kaprodi-dashboard.webp", "w": 1280, "h": 1416, "label": "Head of Study Program dashboard · empty state (design)", "url": "Figma · Kaprodi dashboard", "k": "win", "bg": "#003366"}, {"src": "assets/img/siyudis/05-kadep-dashboard.webp", "w": 1280, "h": 1416, "label": "Head of Department dashboard · empty state (design)", "url": "Figma · Kadep dashboard", "k": "win", "bg": "#003366"}, {"src": "assets/img/siyudis/06-manit-dashboard.webp", "w": 1280, "h": 1416, "label": "Manit dashboard · empty state (design)", "url": "Figma · Manit dashboard", "k": "win", "bg": "#003366"}]}, "pustaka": {"layout": "wins", "items": [{"src": "assets/img/pustaka/01-login-page.webp", "w": 1280, "h": 607, "label": "Login page", "url": "localhost:8080", "k": "win", "bg": "#f8f5fb"}, {"src": "assets/img/pustaka/02-add-a-new-book.webp", "w": 1280, "h": 607, "label": "Add a new book", "url": "localhost:8080", "k": "win", "bg": "#f8f5fb"}, {"src": "assets/img/pustaka/03-book-collection-list.webp", "w": 1280, "h": 607, "label": "Book collection list", "url": "localhost:8080", "k": "win", "bg": "#f8f5fb"}, {"src": "assets/img/pustaka/04-collection-after-editing-a-book.webp", "w": 1280, "h": 607, "label": "Collection after editing a book", "url": "localhost:8080", "k": "win", "bg": "#f8f5fb"}]}, "nomnom": {"layout": "phones", "items": [{"src": "assets/img/nomnom/01-ai-picker-start-screen.webp", "w": 414, "h": 1696, "label": "AI Picker · start screen", "url": "", "k": "phone", "bg": "#000000"}, {"src": "assets/img/nomnom/02-ai-recommendation-results.webp", "w": 390, "h": 1272, "label": "AI recommendation results", "url": "", "k": "phone", "bg": "#020000"}, {"src": "assets/img/nomnom/03-canteen-directory.webp", "w": 414, "h": 1650, "label": "Canteen directory", "url": "", "k": "phone", "bg": "#000000"}, {"src": "assets/img/nomnom/04-surprise-me.webp", "w": 390, "h": 1278, "label": "Surprise Me", "url": "", "k": "phone", "bg": "#030000"}]}};

function frame(s,mini){
const img=`<img src="${s.src}" alt="${esc(s.label)}" width="${s.w}" height="${s.h}" loading="lazy">`;
const hh=s.k==="phone"?(s.w>600?Math.min(Math.max(s.h,s.w*1.7),s.w*2.1):s.w*19/9):Math.min(s.h,s.w*.7);
const lb=s.k==="phone"&&s.w<=600?"phone":"win";
const scr=`<div class="screen${mini?"":" scroll"}"${mini?"":` data-full="${s.src}" data-k="${lb}"`} style="--ar:${s.w}/${Math.round(hh)};--sbg:${s.bg||"#fff"}">${img}</div>`;
const dev=s.k==="phone"?`<div class="pbody"><i class="notch"></i>${scr}</div>`:`<div class="win"><div class="bar"><i></i><i></i><i></i><span>${esc(s.url)}</span></div>${scr}</div>`;
return `<figure class="dev ${s.k}">${dev}${mini?"":`<figcaption>${esc(s.label)}</figcaption>`}</figure>`}

function gallery(p){const g=SHOTS[p.id],f=a=>a.map(s=>frame(s)).join("");let h;
if(g.layout==="mixed"){h=`<h3 class="gh">Customer experience · mobile</h3><div class="gal phones p3">${f(g.items.filter(s=>s.k==="phone"))}</div><h3 class="gh">Admin interface · desktop</h3><div class="gal wins">${f(g.items.filter(s=>s.k!=="phone"))}</div>`}
else h=`<div class="gal ${g.layout}">${f(g.items)}</div>`;
return h+`<p class="muted hint">Hover a screen to preview the full page · click to enlarge</p>`}

function autoscroll(el,to){cancelAnimationFrame(el._r);if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
const from=el.scrollTop,d=to-from,dur=Math.abs(d)*2.5+300,t0=performance.now();
(function f(t){const k=Math.min(1,(t-t0)/dur);el.scrollTop=from+d*(k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2);if(k<1)el._r=requestAnimationFrame(f)})(t0)}
document.addEventListener("mouseover",e=>{const s=e.target.closest&&e.target.closest(".scroll");if(s&&!s.contains(e.relatedTarget))autoscroll(s,s.scrollHeight)});
document.addEventListener("mouseout",e=>{const s=e.target.closest&&e.target.closest(".scroll");if(s&&!s.contains(e.relatedTarget))autoscroll(s,0)});
document.addEventListener("wheel",e=>{const s=e.target.closest&&e.target.closest(".scroll");if(s)cancelAnimationFrame(s._r)},{passive:true});
document.addEventListener("click",e=>{const s=e.target.closest&&e.target.closest(".scroll");
if(s){const b=document.createElement("div");b.className="lb "+(s.dataset.k==="phone"?"ph":"");b.innerHTML=`<img src="${s.dataset.full}" alt="">`;b.onclick=()=>b.remove();document.body.appendChild(b)}});
addEventListener("keydown",e=>{if(e.key==="Escape")document.querySelectorAll(".lb,.cvm").forEach(b=>b.remove())});

function cardHTML(p){return `<article class="card work tilt" data-type="${p.type}" data-tag="${esc(p.cat.split(" · ")[0])}" data-cursor="View ↗">
<a class="thumb t${+p.n%3}" href="#p-${p.id}" aria-label="${esc(p.t)} case study">${frame(SHOTS[p.id].items[0],true)}</a>
<div class="num">${p.n}</div><h3>${esc(p.t)}</h3>
<div><strong>${esc(p.sub)}</strong><br><span class="muted">${esc(p.cat)}</span></div>
<p class="muted" style="margin:0">${esc(p.blurb)}</p>
<a class="more" href="#p-${p.id}">View Case Study →</a></article>`}

function home(){
const c=CONTACT,sp=t=>[...t].map((ch,i)=>`<span class="lt" style="--i:${i}">${ch}</span>`).join("");
const soc=[["linkedin","LinkedIn",c.linkedin],["gmail","Email",c.email],["github","GitHub",c.github]].filter(x=>x[2]);
const socHTML=([k,l,u])=>`<li><a href="${esc(u)}"${k==="gmail"?"":' target="_blank" rel="noopener"'} aria-label="${l}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[k]}"/></svg></a></li>`;
$("#app").innerHTML=`
<div class="wrap" id="top"><div class="hx">
<div class="stage">

<i class="cn tl" aria-hidden="true"></i><i class="cn tr" aria-hidden="true"></i><i class="cn bl" aria-hidden="true"></i><i class="cn br" aria-hidden="true"></i>

<div class="cells" aria-hidden="true"></div>

<i class="orbit" aria-hidden="true"></i>
<span class="tele tl" aria-hidden="true">X <b id="tx">000</b> Y <b id="ty">000</b></span><span class="tele tr" aria-hidden="true">SCROLL <b id="ts">000</b>%</span>
<h1 class="bigname" aria-label="Nadhira Farra">
  <span class="nr" aria-hidden="true">${sp("Nadhira")}</span>
  <span class="nl" aria-hidden="true">${sp("Farra.")}</span>
</h1>
<div class="cut"><img src="assets/img/profile-cut.webp" alt="Portrait of Nadhira Farra" width="237" height="677" fetchpriority="high"><span class="sticker" data-cursor="Drag me">Design × Code</span></div>
<ul class="soc l">${soc.slice(0,2).map(socHTML).join("")}</ul>
<ul class="soc r">${soc.slice(2).map(socHTML).join("")}</ul>
<div class="roll" aria-hidden="true">
<div class="rr a"><div>${"UI/UX Designer | Frontend Developer | User Research | Web Development | ".repeat(8)}</div></div>
<div class="rr b"><div>${"Interaction Design | Wireframing | Prototyping | Information Architecture | ".repeat(8)}</div></div>
</div>
</div></div></div>
<section id="about"><div class="wrap"><div class="band about"><figure class="polaroid"><img src="assets/img/profile-formal.webp" alt="Nadhira Farra speaking at a campus event" width="520" height="650" loading="lazy"><figcaption>Nadhira Farra</figcaption></figure><span class="eyebrow">About</span><h2>A Little About Me</h2>
<p>I love turning complex ideas into simple, meaningful experiences. With a curiosity for how people think, interact, and connect with technology, I enjoy exploring the sweet spot between thoughtful design and functional development. For me, great digital experiences aren’t just about how they look, but how they make people feel and what they make possible.</p>
<p><strong>Interested in:</strong></p><ul class="chips"><li>User Experience Design</li><li>User Research</li><li>UI Design</li><li>Product Design</li></ul>
<p><a class="btn p" href="${CV_URL}" target="_blank" rel="noopener" data-cv>Preview CV ↗</a></p></div></div></section>
<section id="education"><div class="wrap"><span class="eyebrow">Studies</span><h2>Education</h2>
<div class="edgrid"><div class="edtxt"><h3>Applied Bachelor’s Degree in Software Engineering Technology (D-IV)</h3>
<p class="edinst"><strong>Universitas Gadjah Mada</strong>, Vocational College</p>
<p><span class="pill">Jul 2024 – Present</span></p>
<p class="muted">Currently pursuing an applied bachelor’s degree with a focus on software engineering, digital product development, and technology.</p></div>
<div class="ids" data-cursor="Hover me"><div class="swing">
<svg class="strap" viewBox="0 0 120 96" aria-hidden="true"><path d="M16 0 L34 0 L66 70 L52 76Z" fill="var(--primary)" stroke="var(--text)" stroke-width="2" stroke-linejoin="round"/><path d="M104 0 L86 0 L54 70 L68 76Z" fill="var(--primary)" stroke="var(--text)" stroke-width="2" stroke-linejoin="round"/><rect x="48" y="66" width="24" height="26" rx="7" fill="var(--lilac)" stroke="var(--text)" stroke-width="2"/></svg>
<article class="idc" aria-label="Student card"><i class="slot" aria-hidden="true"></i>
<header class="idh"><img class="ulogo" src="assets/img/ugm-logo.png" alt="Universitas Gadjah Mada logo" width="256" height="256"><div><b>Universitas Gadjah Mada</b><span>Vocational College</span></div></header>
<div class="idb"><div class="idpic"><img src="assets/img/profile-id.webp" alt="Nadhira Farra" width="240" height="300" loading="lazy"></div>
<h3>Nadhira Farra Aisya Suistiyono</h3><p>Software Engineering Technology</p></div>
</article>
</div></div></div></div></section>
<section id="skills"><div class="wrap"><span class="eyebrow">Skills &amp; Tools</span><h2>What I Do</h2>
<div class="grid2">${SKILLS.map(([h,a])=>`<div class="card"><h3>${h}</h3><ul class="chips">${a.map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("")}</div></div></section>
<section id="work"><div class="wrap"><span class="eyebrow">Selected Works</span><h2>Projects</h2>
<p class="muted">Design projects come first, followed by development projects that show I can build what I design. Each project’s visual style follows its own brief; this website is my own UI direction.</p>
<div class="filters" id="filters"><button class="on" data-f="all">All</button><button data-f="ui">UX/UI Design</button><button data-f="dev">Development</button></div>
<div class="grid2" id="cards">${P.map(cardHTML).join("")}</div></div></section>
<section id="contact">
  <div class="wrap">
    <div class="band contact">
      <span class="eyebrow">Get in Touch</span>
      <h2>Let's Make Something Happen.</h2>
      <p style="max-width:560px;margin:0 auto">
        Have an idea in mind, a project to discuss, or simply want to connect?
        I'm always open to interesting conversations and new possibilities.
        My inbox is just a click away.
      </p>

      <div class="dock">
        ${[["gmail","Email",c.email?"mailto:"+c.email:""],["linkedin","LinkedIn",c.linkedin],["github","GitHub",c.github]].filter(x=>x[2]).map(([k,l,u])=>`<a class="app ${k}" href="${esc(u)}"${k==="gmail"?"":' target="_blank" rel="noopener"'} aria-label="${l}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[k]}"/></svg><span class="tip">${l}</span></a>`).join("")}
      </div>

      <p class="muted">Looking forward to hearing from you.</p>
    </div>
  </div>
</section>`;
$("#filters").onclick=e=>{const f=e.target.dataset.f;if(!f)return;
document.querySelectorAll("#filters button").forEach(b=>b.classList.toggle("on",b===e.target));
document.querySelectorAll("#cards .card").forEach(c=>c.style.display=(f==="all"||c.dataset.type===f)?"":"none")};
}

function project(id){
const i=P.findIndex(p=>p.id===id);if(i<0)return home();
const p=P[i],prev=P[i-1],next=P[i+1];
const lk=p.links.map(([l,u])=>u?`<a class="btn p" href="${esc(u)}" target="_blank" rel="noopener" style="margin:4px 8px 4px 0">${l} ↗</a>`:`<span class="pill" style="margin-right:8px">${l}: link coming soon</span>`).join("");
$("#app").innerHTML=`<div class="wrap proj"><a class="back" href="#work">← Back to all work</a>
<span class="eyebrow">${p.n} · ${esc(p.cat)}</span><h1 style="font-size:clamp(2.2rem,6vw,3.4rem)">${esc(p.t)}</h1>
<p class="tag">${esc(p.sub)}</p><p class="muted">${esc(p.blurb)}</p>
<div class="meta"><span class="pill">Role: ${esc(p.role)}</span>${p.origin?`<span class="pill">Brief: ${esc(p.origin)}</span>`:""}${p.ctx?`<span class="pill">${esc(p.ctx)}</span>`:""}${p.status?`<span class="pill">Status: ${esc(p.status)}</span>`:""}</div>
<h2>Project Overview</h2>${p.over.map(t=>`<p>${esc(t)}</p>`).join("")}
${p.challenge?`<h2>The Challenge</h2><p>${esc(p.challenge)}</p>`:""}
${PROC[p.id]?`<h2>Design Process</h2><ol class="proc">${PROC[p.id].map(x=>`<li>${x}</li>`).join("")}</ol>`:""}<h2>My Contributions</h2>${ul(p.contrib)}
${p.features?`<h2>Key Features</h2>${ul(p.features)}`:""}
${p.stack?`<h2>Technology Stack</h2><ul class="chips">${p.stack.map(x=>`<li>${x}</li>`).join("")}</ul>`:""}
<h2>${p.showTitle||"Design Showcase"}</h2>
${gallery(p)}
<h2>Project ${p.links.length>1?"Links":"Link"}</h2><p>${lk}</p>
${p.note?`<div class="note">${esc(p.note)}</div>`:""}
<div class="pnav"><span>${prev?`<a class="btn s" href="#p-${prev.id}">← ${prev.t}</a>`:""}</span><span>${next?`<a class="btn s" href="#p-${next.id}">${next.t} →</a>`:""}</span></div></div>`;
window.scrollTo(0,0);
}

function route(){
const h=location.hash.slice(1);
if(h.startsWith("p-"))return project(h.slice(2));
if(!$("#cards"))home();
const el=h&&document.getElementById(h);
if(el)el.scrollIntoView();else if(!h)window.scrollTo(0,0);
}
function reveal(){if(matchMedia("(prefers-reduced-motion:reduce)").matches||!("IntersectionObserver" in window))return;
/* Replays every time a block enters the screen: shown once it is clearly in view,
   reset only after it has fully left, so scrolling down-up-down always animates the same way. */
const io=reveal.io||(reveal.io=new IntersectionObserver(es=>es.forEach(e=>{
const c=e.target.classList;
if(!e.isIntersecting){if(c.contains("in"))c.remove("in");return}
if(!c.contains("in")&&(e.intersectionRatio>=.1||e.intersectionRect.height>=120))c.add("in")}),
{threshold:Array.from({length:21},(_,i)=>i/20),rootMargin:"0px 0px -30px 0px"}));
document.querySelectorAll("section .wrap > *:not(.rv)").forEach(el=>{el.classList.add("rv");io.observe(el)})}
addEventListener("hashchange",()=>{route();reveal();hud()});route();reveal();hud();

$("#theme").onclick=()=>{const r=document.documentElement,d=r.dataset.theme==="dark"||(r.dataset.theme!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches);r.dataset.theme=d?"light":"dark"};

/* interactions: cursor, tilt, magnet, parallax, draggable sticker */
if(matchMedia("(hover:hover) and (pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
const c=document.createElement("div");c.className="cur";document.body.appendChild(c);
let mx=0,my=0,cx=0,cy=0,st="";
document.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;c.style.opacity=1;
const t=e.target.closest&&e.target.closest("[data-cursor],a,button"),l=t?(t.dataset.cursor||""):"",k=t?(l?"big":"link"):"";
if(k+l!==st){st=k+l;c.className="cur "+k;c.textContent=l}
const w=e.target.closest&&e.target.closest(".tilt");
if(w){const r=w.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height,S=(k,v)=>w.style.setProperty(k,v);
S("--ry",((x-.5)*10).toFixed(2)+"deg");S("--rx",((.5-y)*8).toFixed(2)+"deg");S("--gx",x*100+"%");S("--gy",y*100+"%");S("--px",((x-.5)*2).toFixed(2));S("--py",((y-.5)*2).toFixed(2))}
const b=e.target.closest&&e.target.closest(".btn");
if(b){const r=b.getBoundingClientRect();b.style.translate=(e.clientX-r.left-r.width/2)*.18+"px "+(e.clientY-r.top-r.height/2)*.28+"px"}
const h=document.querySelector(".hx");
if(h){h.style.setProperty("--mx",((e.clientX/innerWidth-.5)*2).toFixed(2));h.style.setProperty("--my",((e.clientY/innerHeight-.5)*2).toFixed(2))}});
document.addEventListener("mouseout",e=>{const t=e.target.closest&&e.target.closest(".tilt,.btn");
if(t&&!t.contains(e.relatedTarget)){["--rx","--ry","--px","--py"].forEach(k=>t.style.removeProperty(k));t.style.translate=""}});
document.documentElement.addEventListener("mouseleave",()=>c.style.opacity=0);
(function f(){cx+=(mx-cx)*.2;cy+=(my-cy)*.2;c.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(f)})()}
document.addEventListener("pointerdown",e=>{const s=e.target.closest&&e.target.closest(".sticker");if(!s)return;
e.preventDefault();s.setPointerCapture(e.pointerId);const o=s._o||{x:0,y:0},sx=e.clientX-o.x,sy=e.clientY-o.y;
s.onpointermove=v=>{s._o={x:v.clientX-sx,y:v.clientY-sy};s.style.translate=s._o.x+"px "+s._o.y+"px"};
s.onpointerup=()=>{s.onpointermove=null}});

/* CV preview: in-page viewer on desktop, new tab on touch/small screens */
document.addEventListener("click",e=>{const a=e.target.closest&&e.target.closest("[data-cv]");
if(!a||!matchMedia("(min-width:761px) and (hover:hover)").matches)return;e.preventDefault();
const m=document.createElement("div");m.className="cvm";
m.innerHTML=`<div class="cvb"><div class="cvh"><strong>Curriculum Vitae</strong><span><a href="${CV_URL}" target="_blank" rel="noopener">Open in new tab ↗</a><button aria-label="Close">✕</button></span></div><iframe src="${CV_URL}#toolbar=0&navpanes=0&view=FitH" title="CV preview"></iframe></div>`;
m.onclick=ev=>{if(ev.target===m||ev.target.tagName==="BUTTON")m.remove()};document.body.appendChild(m)});

/* v7: soft-futuristic layer (remove this block + the v7 CSS to undo) */
function scramble(el){if(!el||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
const t=el.dataset.t||(el.dataset.t=el.textContent),g="<>/[]{}=+*#%&";let i=0;clearInterval(el._s);
el._s=setInterval(()=>{el.textContent=t.split("").map((c,j)=>j<i||c===" "?c:g[Math.random()*g.length|0]).join("");if(i++>=t.length){clearInterval(el._s);el.textContent=t}},28)}
function hud(){const e=document.querySelector(".hx .eyebrow");if(e&&!e._d){e._d=1;scramble(e)}tick()}
function tick(){const c=document.getElementById("clock");if(c)c.textContent=new Date().toLocaleTimeString("en-GB",{timeZone:"Asia/Jakarta"})}
setInterval(tick,1000);
document.addEventListener("mouseover",e=>{const w=e.target.closest&&e.target.closest(".work");if(w&&!w.contains(e.relatedTarget))scramble(w.querySelector("h3"))});
(function(){const p=document.createElement("div");p.className="prog";document.body.appendChild(p);
addEventListener("scroll",()=>{const h=document.documentElement;p.style.transform="scaleX("+(h.scrollTop/((h.scrollHeight-h.clientHeight)||1))+")"},{passive:true});
if(matchMedia("(hover:hover) and (pointer:fine)").matches)addEventListener("mousemove",e=>{const s=document.documentElement.style;s.setProperty("--sx",e.clientX+"px");s.setProperty("--sy",e.clientY+"px")},{passive:true})})();

/* nav: sliding pill follows hover, rests on the section you are actually in */
(function(){const L=document.querySelector(".links");if(!L)return;
const pill=document.createElement("i");pill.className="npill";L.prepend(pill);
const as=[...L.querySelectorAll("a")];let active=as[0],ready=false;
const place=a=>{pill.style.width=a.offsetWidth+"px";pill.style.transform="translateX("+a.offsetLeft+"px)";pill.style.opacity=1};
const setActive=a=>{if(a===active&&ready)return;active=a;ready=true;as.forEach(x=>x.classList.toggle("on",x===a));place(a);
if(L.scrollWidth>L.clientWidth)L.scrollTo({left:a.offsetLeft-L.clientWidth/2+a.offsetWidth/2,behavior:"smooth"})};
as.forEach(a=>{a.addEventListener("mouseenter",()=>place(a));a.addEventListener("focus",()=>place(a))});
L.addEventListener("mouseleave",()=>place(active));
const ids=["top","about","education","skills","work","contact"];
function spy(){if(location.hash.startsWith("#p-")){setActive(as[4]);return}
const y=innerHeight*.35;let cur=0;
ids.forEach((id,i)=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=y)cur=i});
if(innerHeight+scrollY>=document.documentElement.scrollHeight-4)cur=ids.length-1;
setActive(as[cur])}
addEventListener("scroll",spy,{passive:true});addEventListener("hashchange",()=>setTimeout(spy,80));addEventListener("resize",()=>place(active));
setTimeout(spy,60);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{ready=false;spy()})})();
/* futuristic layer: live telemetry, section status chip, decode-in headings */
(function(){
const pad=n=>String(Math.max(0,Math.min(999,Math.round(n)))).padStart(3,"0");
const names=["HOME","ABOUT","EDUCATION","SKILLS","WORK","CONTACT"],ids=["top","about","education","skills","work","contact"];
const chip=document.createElement("div");chip.className="hudchip";chip.setAttribute("aria-hidden","true");
chip.innerHTML='<i></i><span id="hs">HOME</span><b id="hn">01/06</b><em id="hp">000%</em>';document.body.appendChild(chip);
let busy=false;
function frame(){busy=false;
const d=document.documentElement,p=scrollY/((d.scrollHeight-innerHeight)||1)*100;
const ts=document.getElementById("ts");if(ts)ts.textContent=pad(p);
let cur=0;
if(location.hash.startsWith("#p-")){document.getElementById("hs").textContent="CASE STUDY";document.getElementById("hn").textContent="--/06"}
else{ids.forEach((id,i)=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=innerHeight*.4)cur=i});
if(innerHeight+scrollY>=d.scrollHeight-4)cur=ids.length-1;
document.getElementById("hs").textContent=names[cur];document.getElementById("hn").textContent="0"+(cur+1)+"/06"}
document.getElementById("hp").textContent=pad(p)+"%"}
addEventListener("scroll",()=>{if(!busy){busy=true;requestAnimationFrame(frame)}},{passive:true});
addEventListener("hashchange",()=>setTimeout(()=>{frame();decode()},60));
addEventListener("mousemove",e=>{const x=document.getElementById("tx"),y=document.getElementById("ty");if(x&&y){x.textContent=pad(e.clientX);y.textContent=pad(e.clientY)}},{passive:true});
/* headings decode every time their section comes back into view */
let dio;
function decode(){if(!("IntersectionObserver" in window))return;
dio=dio||new IntersectionObserver(es=>es.forEach(e=>{const t=e.target;
if(e.isIntersecting&&!t._on){t._on=1;scramble(t)}else if(!e.isIntersecting)t._on=0}),{threshold:.6});
document.querySelectorAll("section h2:not([data-d]),section .eyebrow:not([data-d])").forEach(el=>{el.dataset.d=1;dio.observe(el)})}
decode();frame();setTimeout(frame,150)})();

/* failsafe: anything on screen is always shown, even if the observer misses it */
(function(){let b=false;
function chk(){b=false;const vh=innerHeight;
document.querySelectorAll(".rv:not(.in)").forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom>80&&r.top<vh-60)el.classList.add("in")})}
addEventListener("scroll",()=>{if(!b){b=true;requestAnimationFrame(chk)}},{passive:true});
addEventListener("hashchange",()=>setTimeout(chk,120));setTimeout(chk,300);setTimeout(chk,1200)})();

/* remember the chosen theme (dark is the default) */
(function(){const t=document.getElementById("theme");if(!t)return;
t.addEventListener("click",()=>{try{localStorage.setItem("theme",document.documentElement.dataset.theme)}catch(e){}})})();
