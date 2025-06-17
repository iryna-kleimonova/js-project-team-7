import{a as c,i as l,S as x,N as R,P as F}from"./assets/vendor-DqgFoMSy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const a={header:document.querySelector(".header"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),toggleBtn:document.querySelector(".js-toggle"),burgerIcon:document.querySelector(".js-burger-icon"),closeIcon:document.querySelector(".js-close-icon"),logo:document.querySelectorAll(".header-logo"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),toggleFiltersBtn:document.getElementById("toggle-filters"),filtersContainer:document.getElementById("filters-container"),genreButton:document.getElementById("genre-button"),genreMenu:document.getElementById("genre-menu"),sortingDropdown:document.querySelector("#sorting-dropdown"),sortingMenu:document.querySelector("#sorting-menu"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),modalLoader:document.getElementById("modal-loader"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),feedbackModalEl:document.getElementById("feedback-modal"),feedbackOpenBtnEl:document.querySelector(".feedback-open-btn"),feedbackCloseBtnEl:document.querySelector(".feedback-close-btn"),feedbackFormEl:document.querySelector(".feedback-form"),feedbackStarsEls:document.querySelectorAll(".star"),footer:document.querySelector(".js-footer")},N=new IntersectionObserver(([t])=>{t.isIntersecting&&a.footer.classList.add("footer--visible")},{threshold:.8});N.observe(a.footer);c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function H(t=1,e=8){try{const{data:s}=await c.get("/artists",{params:{page:t,limit:e}});return s}catch(s){throw l.error({title:"Error",message:"Failed to fetch artists. Please try again later.",position:"topRight",timeout:5e3}),s}}async function O(t){try{const{data:e}=await c.get(`/artists/${t}`);return e}catch(e){throw l.error({title:"Error",message:"Failed to fetch artist details.",position:"topRight",timeout:5e3}),e}}async function D(t){try{const{data:e}=await c.get(`/artists/${t}/albums`);return e.albumsList}catch(e){throw l.error({title:"Error",message:"Failed to fetch artist albums.",position:"topRight",timeout:5e3}),e}}async function Y({name:t,rating:e,descr:s}){try{const{data:r}=await c.post("/feedbacks",{name:t,rating:e,descr:s});return r}catch(r){throw l.error({title:"Error",message:"Failed to submit feedback. Please try again.",position:"topRight"}),r}}const w="/js-project-team-7/assets/sprite-DCaIFKl6.svg";function U(t){const e=t.artists.map(s=>{const{_id:r,strArtist:o,strBiographyEN:i,strArtistThumb:n,genres:d}=s;return`
        <li class="artist-card" data-id="${r}" data-artist="${encodeURIComponent(JSON.stringify(s))}">
          <img class="artist-card-img" src="${n}" alt="${o}" loading="lazy"/>

          <ul class="artist-card-genres">
            ${d.map(p=>`<li>${p}</li>`).join("")}
          </ul>

          <h3 class="artist-card-name">${o}</h3>

          <p class="artist-card-info">
            ${i?i.slice(0,100)+"...":"No description available"}
          </p>

          <button class="artist-card-btn" type="button">
            Learn More
            <svg class="artist-card-icon" width="24" height="24">
              <use href="${w}#icon-caret-right"></use>
            </svg>
          </button>
        </li>`}).join("");a.artistCardsContainer.insertAdjacentHTML("beforeend",e)}const V=document.querySelector(".artists-info"),g=document.querySelector(".artists-albums");function _(t){const{strArtist:e="-",strArtistThumb:s,intFormedYear:r,intDiedYear:o,strGender:i="-",intMembers:n,strCountry:d="-",strBiographyEN:p="-",genresList:b=[]}=t,T=r?o?`${r} - ${o}`:`${r} - present`:"-",A=b.length?b.map(P=>`<p class="genre-item">${P}</p>`).join(""):"-",C=`
    <h2 class="artist-title">${e}</h2>
    <div class="modal-artist-info">
    <div class="artist-img-container">
        <img src="${s||""}" alt="${e}" loading="lazy"/>
      </div>
      <div class="artist-top">
      <ul class="artist-meta-list"> 
          <li class="artist-meta-list-item"><b>Years active</b><br>
            <p>${T}</p>
          </li>
          <li class="artist-meta-list-item"><b>Sex</b><br>
            <p>${i}</p>
          </li>
          <li class="artist-meta-list-item"><b>Members</b><br>
            <p>${n??"-"}</p>
          </li>
          <li class="artist-meta-list-item"><b>Country</b><br>
            <p>${d}</p>
          </li>
      </ul>
    <div class="artist-bottom">
      <div class="artist-biography">
        <h3 class="artist-biography-title">Biography</h3>
        <p class="artist-biography-desc">${p}</p>
      </div>
      <div class="artist-genres">
        ${A}
      </div>
      </div>
    </div>
    </div>
  `;V.innerHTML=C}function z(t=[]){if(g.innerHTML="",!t.length){g.innerHTML="<h4>-</h4>";return}const e=`
    <h2 class="albums-title">Albums</h2>
      <div class="albums-list">
  ${t.map(s=>{const r=s.tracks&&s.tracks.length?`
              <ul class="track-list">
                <li class="track-header">
                  <span>Track</span>
                  <span>Time</span>
                  <span>Link</span>
                </li>
              ${s.tracks.map(o=>`
                <li class="track-item">
                  <span class="track-name">${o.strTrack||"-"}</span>
                  <span class="track-duration">
  ${o.intDuration?K(o.intDuration):"-"}
</span>
                  ${o.movie?`<a class="track-link" href="${o.movie}" target="_blank" rel="noopener noreferrer">
                          <svg width="24" height="24">
                            <use href="${w}#icon-youtube"></use>
                          </svg>
                        </a>`:'<span class="track-link empty"></span>'}
                    </li>`).join("")}
              </ul>`:"<p>No tracks</p>";return`
          <div class="album">
            <h3 class="album-title">${s.strAlbum||"-"}</h3>
            ${r}
          </div>`}).join("")}
    </div>
  `;g.innerHTML=e}function K(t){const e=Math.floor(t/1e3),s=Math.floor(e/60),r=e%60;return`${s}:${r.toString().padStart(2,"0")}`}function W(){a.loadMoreBtn.classList.add("visually-hidden")}function J(){a.loader.classList.remove("visually-hidden"),a.loadMoreBtn.classList.add("visually-hidden")}function G(){a.loader.classList.add("visually-hidden"),a.loadMoreBtn.classList.remove("visually-hidden")}function Q(t,e){const s=typeof t=="string"?document.querySelector(t):t;if(!s)return;const r=document.createElement("div");r.className="stars";const o=Math.min(100,Math.max(0,e/5*100));r.style.setProperty("--rating-percent",`${o}%`),s.appendChild(r)}let y=0;function X({artist:t,albums:e}){y=window.scrollY||document.documentElement.scrollTop;const s={...t,albumsList:e||[],genresList:t.genres||[]};_(s),z(s.albumsList),document.body.style.cssText=`
    position: fixed;
    top: -${y}px;
    left: 0;
    width: 100%;
    overflow: hidden;
  `,a.modal.classList.remove("hidden"),Z()}function k(){a.modal.classList.add("hidden");const t=-parseInt(document.body.style.top);document.body.style.cssText="",window.scrollTo({top:t}),tt()}function E(t){(t.target===a.modal||t.target.closest(".js-modal-close"))&&k()}function S(t){t.key==="Escape"&&k()}function Z(){document.addEventListener("click",E),document.addEventListener("keydown",S)}function tt(){document.removeEventListener("click",E),document.removeEventListener("keydown",S)}function et(){var t;(t=a.modalLoader)==null||t.classList.remove("visually-hidden")}function st(){var t;(t=a.modalLoader)==null||t.classList.add("visually-hidden")}const ot=new x(".swiper",{modules:[R,F],slidesPerView:1,spaceBetween:0,centeredSlides:!0,touchEventsTarget:"container",simulateTouch:!0,touchRatio:1,pagination:{el:".swiper-pagination",type:"custom",renderCustom(t,e,s){return`
        <span class="swiper-pagination-bullet" data-index="0"></span>
        <span class="swiper-pagination-bullet" data-index="middle"></span>
        <span class="swiper-pagination-bullet" data-index="${s-1}"></span>
      `},clickable:!0},on:{init(t){setTimeout(()=>{f(t),rt(t)},300)},slideChange(t){f(t)}},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});function rt(t){t.pagination.el.addEventListener("click",s=>{const r=s.target.closest(".swiper-pagination-bullet");if(!r)return;let o=r.dataset.index;o==="middle"?o=Math.floor(t.slides.length/2):o=parseInt(o,10),t.slideTo(o)}),f(t)}function f(t){const s=t.pagination.el.querySelectorAll(".swiper-pagination-bullet");s.forEach(o=>o.classList.remove("swiper-pagination-bullet-active"));const r=t.realIndex;r===0?s[0].classList.add("swiper-pagination-bullet-active"):r===t.slides.length-1?s[2].classList.add("swiper-pagination-bullet-active"):s[1].classList.add("swiper-pagination-bullet-active")}c.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function at(){try{const{data:t}=await c.get("/feedbacks?limit=20&page=1"),e=t.data,s=document.getElementById("feedbacks-container");s.innerHTML="",e.forEach((r,o)=>{const i=document.createElement("div");i.classList.add("swiper-slide");const n=`raty-${o}`;i.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${n}"></div>
          <p class="feedback-text">"${r.descr}"</p>
          <p class="author-name">${r.name}</p>
        </div>
      `,s.appendChild(i),Q(`#${n}`,r.rating)}),ot.update()}catch(t){console.error("Error fetching feedbacks:",t)}}at();window.history.scrollRestoration="manual";const M=t=>{const e=document.getElementById(t);if(!e)return;const s=e.offsetTop-a.header.offsetHeight;window.scrollTo({top:s,behavior:"smooth"})},it=()=>{const t=a.navList.classList.toggle("is-open");a.burgerIcon.classList.toggle("hidden",t),a.closeIcon.classList.toggle("hidden",!t),document.body.classList.toggle("body-lock",t)},nt=t=>{a.navLinks.forEach(e=>e.classList.remove("active")),t.classList.add("active"),t.blur()},lt=()=>{const t=window.scrollY+a.header.offsetHeight+5;a.navLinks.forEach(e=>{const s=e.getAttribute("href");if(!s||s==="#"||s.startsWith("http"))return;const r=document.getElementById(s.slice(1));if(!r)return;const o=r.offsetTop,i=o+r.offsetHeight;t>=o&&t<i?e.classList.add("active"):e.classList.remove("active")})};a.toggleBtn.addEventListener("click",it);a.logo.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),location.reload()})});a.navLinks.forEach(t=>{const e=t.getAttribute("href");!e||e==="#"||e.startsWith("http")||t.addEventListener("click",s=>{s.preventDefault();const r=e.slice(1);M(r),nt(t),a.navList.classList.remove("is-open"),a.burgerIcon.classList.remove("hidden"),a.closeIcon.classList.add("hidden"),document.body.classList.remove("body-lock"),history.replaceState(null,null," ")})});window.addEventListener("scroll",lt);window.addEventListener("load",()=>{window.location.hash&&setTimeout(()=>{const t=window.location.hash.slice(1);M(t),history.replaceState(null,null," ")},0)});let h=1;const v=8;let L=null;async function $(){J();try{const t=await H(h,v);U(t),L=Math.ceil(t.total/v)}catch{l.error({title:"Error",message:"Failed to load artists. Please try again later.",position:"topRight",timeout:5e3})}finally{G(),h<L&&W()}}a.loadMoreBtn.addEventListener("click",()=>{h++,$().catch(t=>{l.error({title:"Error",message:"Failed to load more artists.",position:"topRight",timeout:5e3})})});a.artistCardsContainer.addEventListener("click",async t=>{const e=t.target.closest(".artist-card-btn");if(!e)return;const r=e.closest(".artist-card").dataset.artist;if(!r){l.warning({title:"Warning",message:"Missing artist data.",position:"topRight",timeout:4e3});return}et(),a.modal.classList.remove("hidden");try{const o=JSON.parse(decodeURIComponent(r)),i=await O(o._id),n=await D(o._id),d={...i,genres:o.genres||[]};X({artist:d,albums:n})}catch{l.error({title:"Error",message:"Failed to load artist details.",position:"topRight",timeout:5e3})}finally{setTimeout(()=>{st()},20)}});$();const{feedbackModalEl:B,feedbackOpenBtnEl:ct,feedbackCloseBtnEl:dt,feedbackFormEl:m,feedbackStarsEls:q}=a;let u=0;ct.addEventListener("click",()=>{B.classList.remove("is-hidden"),document.body.classList.add("no-scroll")});dt.addEventListener("click",j);function j(){B.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),m.reset(),u=0,I(0)}q.forEach(t=>{t.addEventListener("click",()=>{u=Number(t.dataset.value),I(u)})});function I(t){q.forEach(e=>{const s=Number(e.dataset.value);e.classList.toggle("active",s<=t)})}m.addEventListener("submit",async t=>{t.preventDefault();const e=m.elements.name.value.trim(),s=m.elements.message.value.trim();if(!e||!s||u===0){l.error({title:"Heads up!",message:"Please fill out all fields and pick a rating.",position:"topRight"});return}if(s.length<10){l.error({title:"Oops!",message:"Your feedback should be at least 10 characters long.",position:"topRight"});return}try{await Y({name:e,descr:s,rating:u}),l.success({title:"Awesome!",message:"Thank you so much for your feedback!",position:"topRight",backgroundColor:"#764191",color:"white"}),j()}catch{l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
