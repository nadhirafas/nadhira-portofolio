/* =====================================================================
   CREATIVE WORKS
   ===================================================================== */
const CW_BASE="assets/creative/";
const CW_CATS=[["all","All"],["posters","Posters"],["social","Social & publication"],["guides","Guidebooks & modules"]];
const CW_DRIVE={gu1:"https://drive.google.com/file/d/1MDUP1Hej34Q6tDVMlNF4ntIAqz3CtGHK/view?usp=drive_link",gu2:"https://drive.google.com/file/d/1EK29mJVoIpOyOyo9Lu5HMVgucWqO4-xq/view?usp=drive_link",modul:"https://drive.google.com/file/d/1X0dFptQPw0UWvKaLIFN9vouA23VImigd/view?usp=sharing"};

const CREATIVE=[
{id:"kmtedi-progresif-26",n:"01",lay:"pg",cats:["posters","social"],
 title:"KMTEDI Progresif ’26",sub:"TEDI’sclosure · Ubah Ide Jadi Aksi, Merakit Inovasi Cerdas",
 blurb:"Poster, event banner, and Instagram live-report frame for a robotics demonstration and outreach event with Microclub, 22 November 2026.",
 items:[
 {f:"progresif-poster",md:1,w:1080,h:1350,ow:1080,oh:1350,pos:"p",rot:-1.2,label:"Poster",alt:"KMTEDI Progresif ’26 poster: oversized white and mint title on a violet background, a glowing circuit-chip illustration, and date and venue panels for 22 November 2026."},
 {f:"progresif-banner",md:1,w:2000,h:1000,ow:3072,oh:1536,pos:"b",rot:.5,label:"Event banner",alt:"Wide event banner with the word PROGRESIF in heavy white letters inside a mint circuit-board frame, with a chip icon and partner logos."},
 {f:"progresif-live-report",md:1,alpha:1,w:1080,h:1920,ow:1080,oh:1920,pos:"l",rot:1.4,label:"Live report frame",alt:"Vertical Instagram Story frame for live reporting: a circuit-pattern border around an empty photo window, with the PROGRESIF title at the bottom."}]},

{id:"pengabdian-sma-1-wates",n:"02",lay:"pb",cats:["posters"],
 title:"Digitalisasi Penjurusan Siswa",sub:"SMA Negeri 1 Wates · Community service",
 blurb:"Poster and x-banner for a Sekolah Vokasi UGM community service program on digitising student major selection with an information system and AI-based recommendations.",
 items:[
 {f:"pengabdian-poster",md:1,w:1191,h:1684,ow:1191,oh:1684,pos:"p",rot:.6,label:"Poster",alt:"Academic poster on a navy header with a yellow highlighted title, numbered sections from Pendahuluan to Dokumentasi, interface screenshots, and event photos."},
 {f:"pengabdian-xbanner",md:1,w:900,h:2400,ow:900,oh:2400,pos:"x",rot:-1.2,label:"X-banner",alt:"Tall x-banner version of the same content: navy header, two-column numbered sections, interface screenshots, a yellow sustainability panel, and photos."}]},

{id:"gears-up-instagram",n:"03",lay:"gs",cats:["social"],
 title:"Gears Up! on Instagram",sub:"Social media content",
 blurb:"Feed posts composed across Instagram’s three-column grid, so each row reads as one comic panel, plus the reels covers.",
 items:[
 {f:"gearsup-feed",strip:1,w:270,h:1564,ow:270,oh:1564,pos:"a",rot:-1,label:"Feed grid",alt:"Instagram feed grid of Gears Up! in a red, blue and yellow comic style: Meet Our Team, Gears Up Program, Into the STEM-verse, Mission and Vision, and a selection announcement."},
 {f:"gearsup-reels",strip:1,w:357,h:1600,ow:357,oh:1600,pos:"b",rot:1,label:"Reels covers",alt:"Instagram reels tab for Gears Up! showing a grid of video covers from team activities, workshops and recaps."}]},

{id:"gears-up-guidebooks",n:"04",lay:"gd",cats:["guides"],
 title:"Gears Up! Guidebooks & Module",sub:"Open recruitment guidebooks",
 blurb:"Two guidebook covers in two different styles, plus a learning module. The full documents open in Google Drive.",
 items:[
 {f:"gearsup-guidebook-1",w:376,h:536,ow:376,oh:536,pos:"d1",rot:-3,label:"Guidebook GU 1",url:CW_DRIVE.gu1,linkText:"Open guidebook",alt:"Guidebook GU 1 cover: Open Recruitment, Gears Up! Member, in orange, black, blue and yellow with gear shapes and the Gears Up! badge."},
 {f:"gearsup-guidebook-2",w:452,h:637,ow:452,oh:637,pos:"d2",rot:2.5,label:"Guidebook GU 2",url:CW_DRIVE.gu2,linkText:"Open guidebook",alt:"Guidebook GU 2 cover: Open Recruitment, Gears Up! Member, on a dark navy technical background with blue and orange corner details."},
 {f:"gearsup-modul",w:488,h:697,ow:488,oh:697,pos:"d3",rot:-1,label:"Modul GU",url:CW_DRIVE.modul,linkText:"Open module",alt:"Modul GU page in light blue: a wavy blue header, a blue fabric-textured label, and hand-drawn stickers of a leaf, arrow, star, pushpin, paperclip, megaphone, graduation cap and backpack."}]}
];

const cwEsc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const cwSrc=(it,full)=>CW_BASE+it.f+(it.md&&!full?"-md":"")+".webp";
const CW_IDX={};CREATIVE.forEach(s=>s.items.forEach(it=>{if(it.f)CW_IDX[it.f]={it,s}}));

function cwItem(it,s,i){
 const st=`style="--r:${it.rot||0}deg;--i:${i}"`;
 if(it.file)return `<figure class="cw-f ${it.pos}" ${st}><a class="cw-file" href="${cwEsc(it.url)}" target="_blank" rel="noopener" aria-label="${cwEsc(it.label)}, ${cwEsc(it.kind)}, opens Google Drive in a new tab"><span class="cw-ext">PDF</span><strong>${cwEsc(it.label)}</strong><span>${cwEsc(it.kind)}</span><em>${cwEsc(it.linkText)} ↗</em></a></figure>`;
 const img=`<img src="${cwSrc(it)}" alt="${cwEsc(it.alt)}" width="${it.w}" height="${it.h}" loading="lazy" decoding="async">`;
 const inner=it.strip?`<span class="cw-win">${img}</span>`:img;
 const link=it.url?`<a class="cw-link" href="${cwEsc(it.url)}" target="_blank" rel="noopener">${cwEsc(it.linkText||"Open")} ↗<span class="sr"> (${cwEsc(it.label)}, opens in a new tab)</span></a>`:"";
 return `<figure class="cw-f ${it.pos}${it.alpha?" alpha":""}${it.strip?" strip":""}" ${st}>
<button type="button" class="cw-open" data-cw="${it.f}" data-cursor="View" aria-label="Enlarge: ${cwEsc(it.label)}, ${cwEsc(s.title)}">${inner}</button>
<figcaption><b>${cwEsc(it.label)}</b></figcaption>${link}</figure>`}

function cwSpread(s){
 return `<article class="cw cw-${s.lay}" id="cw-${s.id}" data-cats="${s.cats.join(" ")}" aria-labelledby="cwt-${s.id}">
<div class="cw-h"><span class="cw-n" aria-hidden="true">${s.n}</span><div class="cw-t"><h3 id="cwt-${s.id}">${cwEsc(s.title)}</h3><p class="cw-sub">${cwEsc(s.sub)}</p></div></div>
<div class="cw-board">${s.items.map((it,i)=>cwItem(it,s,i)).join("")}<p class="cw-blurb muted">${cwEsc(s.blurb)}</p></div></article>`}

function creative(){
 return `<section id="creative"><div class="wrap"><span class="eyebrow">Creative Works</span><h2>Visual Design</h2>
<p class="muted">Posters, social media content, and guidebooks. The projects above are interfaces; these are the visuals around them. Each collection keeps its own look.</p>
<div class="filters" id="cwf" role="group" aria-label="Filter creative works">${CW_CATS.map(([k,l],i)=>`<button type="button" data-cf="${k}" aria-pressed="${i===0}"${i===0?' class="on"':""}>${l}</button>`).join("")}</div>
<p class="sr" id="cwstatus" role="status" aria-live="polite"></p>
${CREATIVE.map(cwSpread).join("")}</div></section>`}

/* ---------- filters, hover-scroll windows, viewer (delegated, so they survive re-renders) ---------- */
document.addEventListener("click",e=>{
 const b=e.target.closest&&e.target.closest("#cwf button");
 if(b){const f=b.dataset.cf;let n=0;
  document.querySelectorAll("#cwf button").forEach(x=>{const on=x===b;x.classList.toggle("on",on);x.setAttribute("aria-pressed",on)});
  document.querySelectorAll(".cw").forEach(c=>{const show=f==="all"||c.dataset.cats.split(" ").includes(f);c.hidden=!show;if(show)n++});
  const st=document.getElementById("cwstatus");if(st)st.textContent=`Showing ${n} of ${CREATIVE.length} collections`;return}
 const o=e.target.closest&&e.target.closest(".cw-open");if(o)cwShow(o)});

function cwScroll(e,to){const s=e.target.closest&&e.target.closest(".cw-strip,.strip .cw-open");if(!s)return;
 const w=s.querySelector(".cw-win");if(!w||typeof autoscroll!=="function")return;
 if(e.relatedTarget&&s.contains(e.relatedTarget))return;autoscroll(w,to?w.scrollHeight:0)}
document.addEventListener("mouseover",e=>cwScroll(e,1));document.addEventListener("mouseout",e=>cwScroll(e,0));
document.addEventListener("focusin",e=>cwScroll(e,1));document.addEventListener("focusout",e=>cwScroll(e,0));

let cwDlg,cwEls=[],cwI=0,cwX=0;
function cwBuild(){
 cwDlg=document.createElement("dialog");cwDlg.className="cw-lb";cwDlg.setAttribute("aria-label","Artwork viewer");
 cwDlg.innerHTML=`<div class="cw-lbin"><button type="button" class="cw-x" data-a="x" aria-label="Close viewer">✕</button>
<div class="cw-stage"><button type="button" class="cw-nav" data-a="p" aria-label="Previous artwork">←</button><div class="cw-pic" tabindex="-1"><img alt=""></div><button type="button" class="cw-nav" data-a="n" aria-label="Next artwork">→</button></div>
<div class="cw-cap"><div><b></b><span></span></div><em></em><a class="cw-link" target="_blank" rel="noopener" hidden></a></div></div>`;
 document.body.appendChild(cwDlg);
 cwDlg.addEventListener("click",e=>{const a=e.target.closest("[data-a]");
  if(a){if(a.dataset.a==="x")cwDlg.close();else cwGo(a.dataset.a==="n"?1:-1);return}
  if(!e.target.closest(".cw-pic img,.cw-cap"))cwDlg.close()});
 cwDlg.addEventListener("keydown",e=>{if(e.key==="ArrowRight")cwGo(1);else if(e.key==="ArrowLeft")cwGo(-1)});
 cwDlg.addEventListener("touchstart",e=>{cwX=e.changedTouches[0].clientX},{passive:true});
 cwDlg.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-cwX;if(Math.abs(d)>60&&!e.target.closest(".cw-pic.tall"))cwGo(d<0?1:-1)},{passive:true});
 cwDlg.addEventListener("close",()=>document.documentElement.classList.remove("cw-lock"))}
function cwShow(o){
 if(!cwDlg)cwBuild();
 cwEls=[...document.querySelectorAll(".cw:not([hidden]) .cw-open[data-cw]")];cwI=Math.max(0,cwEls.indexOf(o));
 cwRender();document.documentElement.classList.add("cw-lock");if(!cwDlg.open)cwDlg.showModal()}
function cwGo(d){cwI=(cwI+d+cwEls.length)%cwEls.length;cwRender()}
function cwRender(){
 const {it,s}=CW_IDX[cwEls[cwI].dataset.cw],p=cwDlg.querySelector(".cw-pic"),im=p.querySelector("img"),a=cwDlg.querySelector(".cw-link");
 p.className="cw-pic"+(it.alpha?" alpha":"")+(it.h/it.w>2.2?" tall":"");p.scrollTop=0;
 im.style.setProperty("--nw",Math.min(it.w,720)+"px");
 im.src=cwSrc(it,1);im.alt=it.alt;im.width=it.w;im.height=it.h;
 cwDlg.querySelector(".cw-cap b").textContent=it.label;
 cwDlg.querySelector(".cw-cap span").textContent=s.title;
 cwDlg.querySelector(".cw-cap em").textContent=`${cwI+1} / ${cwEls.length}`;
 if(it.url){a.hidden=false;a.href=it.url;a.textContent=`${it.linkText||"Open"} ↗`}else a.hidden=true;
 [1,-1].forEach(d=>{const n=cwEls[(cwI+d+cwEls.length)%cwEls.length];if(n){const x=CW_IDX[n.dataset.cw];(new Image).src=cwSrc(x.it,1)}})}
