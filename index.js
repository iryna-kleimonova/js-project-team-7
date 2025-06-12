import{a as l,i as c,S as B,N as q,P as j}from"./assets/vendor-DqgFoMSy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const a={burger:document.querySelector(".js-burger"),closeBtn:document.querySelector(".js-close"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),header:document.querySelector(".header"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),toggleFiltersBtn:document.getElementById("toggle-filters"),filtersContainer:document.getElementById("filters-container"),genreButton:document.getElementById("genre-button"),genreMenu:document.getElementById("genre-menu"),sortingDropdown:document.querySelector("#sorting-dropdown"),sortingMenu:document.querySelector("#sorting-menu"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),modalLoader:document.getElementById("modal-loader"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},A=new IntersectionObserver(([t])=>{t.isIntersecting&&a.footer.classList.add("footer--visible")},{threshold:.8});A.observe(a.footer);l.defaults.baseURL="https://sound-wave.b.goit.study/api";async function T(t=1,e=8){try{const{data:r}=await l.get("/artists",{params:{page:t,limit:e}});return r}catch(r){throw c.error({title:"Error",message:"Failed to fetch artists. Please try again later.",position:"topRight",timeout:5e3}),r}}async function C(t){try{const{data:e}=await l.get(`/artists/${t}`);return e}catch(e){throw c.error({title:"Error",message:"Failed to fetch artist details.",position:"topRight",timeout:5e3}),e}}async function I(t){try{const{data:e}=await l.get(`/artists/${t}/albums`);return e.albumsList}catch(e){throw c.error({title:"Error",message:"Failed to fetch artist albums.",position:"topRight",timeout:5e3}),e}}const y="/js-project-team-7/assets/sprite-DCaIFKl6.svg";function P(t){const e=t.artists.map(r=>{const{_id:o,strArtist:s,strBiographyEN:i,strArtistThumb:n,genres:d}=r;return`
        <li class="artist-card" data-id="${o}" data-artist="${encodeURIComponent(JSON.stringify(r))}">
          <img class="artist-card-img" src="${n}" alt="${s}" loading="lazy"/>

          <ul class="artist-card-genres">
            ${d.map(u=>`<li>${u}</li>`).join("")}
          </ul>

          <h3 class="artist-card-name">${s}</h3>

          <p class="artist-card-info">
            ${i?i.slice(0,100)+"...":"No description available"}
          </p>

          <button class="artist-card-btn" type="button">
            Learn More
            <svg class="artist-card-icon" width="24" height="24">
              <use href="${y}#icon-caret-right"></use>
            </svg>
          </button>
        </li>`}).join("");a.artistCardsContainer.insertAdjacentHTML("beforeend",e)}const F=document.querySelector(".artists-info"),m=document.querySelector(".artists-albums");function N(t){const{strArtist:e="-",strArtistThumb:r,intFormedYear:o,intDiedYear:s,strGender:i="-",intMembers:n,strCountry:d="-",strBiographyEN:u="-",genresList:h=[]}=t,M=o?s?`${o} - ${s}`:`${o} - present`:"-",E=h.length?h.map(k=>`<p class="genre-item">${k}</p>`).join(""):"-",$=`
    <h2 class="artist-title">${e}</h2>
    <div class="modal-artist-info">
    <div class="artist-img-container">
        <img src="${r||""}" alt="${e}" loading="lazy"/>
      </div>
      <div class="artist-top">
      <ul class="artist-meta-list"> 
          <li class="artist-meta-list-item"><b>Years active</b><br>
            <p>${M}</p>
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
        <p class="artist-biography-desc">${u}</p>
      </div>
      <div class="artist-genres">
        ${E}
      </div>
      </div>
    </div>
    </div>
  `;F.innerHTML=$}function R(t=[]){if(m.innerHTML="",!t.length){m.innerHTML="<h4>-</h4>";return}const e=`
    <h2 class="albums-title">Albums</h2>
      <div class="albums-list">
  ${t.map(r=>{const o=r.tracks&&r.tracks.length?`
              <ul class="track-list">
                <li class="track-header">
                  <span>Track</span>
                  <span>Time</span>
                  <span>Link</span>
                </li>
              ${r.tracks.map(s=>`
                <li class="track-item">
                  <span class="track-name">${s.strTrack||"-"}</span>
                  <span class="track-duration">
  ${s.intDuration?H(s.intDuration):"-"}
</span>
                  ${s.movie?`<a class="track-link" href="${s.movie}" target="_blank" rel="noopener noreferrer">
                          <svg width="24" height="24">
                            <use href="${y}#icon-youtube"></use>
                          </svg>
                        </a>`:'<span class="track-link empty"></span>'}
                    </li>`).join("")}
              </ul>`:"<p>No tracks</p>";return`
          <div class="album">
            <h3 class="album-title">${r.strAlbum||"-"}</h3>
            ${o}
          </div>`}).join("")}
    </div>
  `;m.innerHTML=e}function H(t){const e=Math.floor(t/1e3),r=Math.floor(e/60),o=e%60;return`${r}:${o.toString().padStart(2,"0")}`}function x(){a.loadMoreBtn.classList.add("visually-hidden")}function D(){a.loader.classList.remove("visually-hidden"),a.loadMoreBtn.classList.add("visually-hidden")}function O(){a.loader.classList.add("visually-hidden"),a.loadMoreBtn.classList.remove("visually-hidden")}function U(t,e){const r=typeof t=="string"?document.querySelector(t):t;if(!r)return;const o=document.createElement("div");o.className="stars";const s=Math.min(100,Math.max(0,e/5*100));o.style.setProperty("--rating-percent",`${s}%`),r.appendChild(o)}function Y({artist:t,albums:e}){const r={...t,albumsList:e||[],genresList:t.genres||[]};N(r),R(r.albumsList),a.modal.classList.remove("hidden"),document.body.classList.add("modal-open"),V()}function v(){a.modal.classList.add("hidden"),document.body.classList.remove("modal-open"),_()}function b(t){(t.target===a.modal||t.target.closest(".js-modal-close"))&&v()}function L(t){t.key==="Escape"&&v()}function V(){document.addEventListener("click",b),document.addEventListener("keydown",L)}function _(){document.removeEventListener("click",b),document.removeEventListener("keydown",L)}function z(){var t;(t=a.modalLoader)==null||t.classList.remove("visually-hidden")}function K(){var t;(t=a.modalLoader)==null||t.classList.add("visually-hidden")}const W=new B(".swiper",{modules:[q,j],slidesPerView:1,spaceBetween:0,cssMode:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});l.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function J(){try{const{data:t}=await l.get("/feedbacks?limit=3&page=1"),e=t.data,r=document.getElementById("feedbacks-container");r.innerHTML="",e.forEach((o,s)=>{const i=document.createElement("div");i.classList.add("swiper-slide");const n=`raty-${s}`;i.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${n}"></div>
          <p class="feedback-text">"${o.descr}"</p>
          <p class="author-name">${o.name}</p>
        </div>
      `,r.appendChild(i),U(`#${n}`,o.rating)}),W.update()}catch(t){console.error("Error fetching feedbacks:",t)}}J();window.history.scrollRestoration="manual";const G=t=>{const e=document.getElementById(t);if(!e)return;const r=e.getBoundingClientRect().top+window.scrollY-a.header.offsetHeight;window.scrollTo({top:r,behavior:"smooth"})},w=()=>{a.navList.classList.remove("is-open"),document.body.classList.remove("body-lock")},Q=()=>{a.navList.classList.add("is-open"),document.body.classList.add("body-lock"),a.navLinks.forEach(t=>{t.classList.remove("active"),t.blur()})},X=t=>{a.navLinks.forEach(e=>e.classList.remove("active")),t.classList.add("active"),t.blur()},Z=()=>{const t=window.scrollY+a.header.offsetHeight+5;a.navLinks.forEach(e=>{const r=e.getAttribute("href");if(!r||r==="#"||r.startsWith("http"))return;const o=document.getElementById(r.slice(1));if(!o)return;const s=o.offsetTop,i=s+o.offsetHeight;t>=s&&t<i?(e.classList.add("active"),e.blur()):e.classList.remove("active")})};a.burger.addEventListener("click",Q);a.closeBtn.addEventListener("click",w);document.querySelectorAll(".header-logo").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),location.reload()})});a.navLinks.forEach(t=>{const e=t.getAttribute("href");!e||e==="#"||e.startsWith("http")||t.addEventListener("click",r=>{r.preventDefault();const o=e.slice(1);G(o),X(t),w(),history.replaceState(null,null," ")})});window.addEventListener("scroll",Z);window.addEventListener("load",()=>{window.location.hash&&setTimeout(()=>{window.scrollTo(0,0),history.replaceState(null,null," ")},0)});let p=1;const f=8;let g=null;async function S(){D();try{const t=await T(p,f);P(t),g=Math.ceil(t.total/f)}catch{c.error({title:"Error",message:"Failed to load artists. Please try again later.",position:"topRight",timeout:5e3})}finally{O(),p<g&&x()}}a.loadMoreBtn.addEventListener("click",()=>{p++,S().catch(t=>{c.error({title:"Error",message:"Failed to load more artists.",position:"topRight",timeout:5e3})})});a.artistCardsContainer.addEventListener("click",async t=>{const e=t.target.closest(".artist-card-btn");if(!e)return;const o=e.closest(".artist-card").dataset.artist;if(!o){c.warning({title:"Warning",message:"Missing artist data.",position:"topRight",timeout:4e3});return}z(),a.modal.classList.remove("hidden");try{const s=JSON.parse(decodeURIComponent(o)),i=await C(s._id),n=await I(s._id),d={...i,genres:s.genres||[]};Y({artist:d,albums:n})}catch{c.error({title:"Error",message:"Failed to load artist details.",position:"topRight",timeout:5e3})}finally{setTimeout(()=>{K()},20)}});S();
//# sourceMappingURL=index.js.map
