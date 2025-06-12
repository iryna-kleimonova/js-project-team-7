import{a as l,S as B,N as A,P as q}from"./assets/vendor-Cj1XzFCq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const a={burger:document.querySelector(".js-burger"),closeBtn:document.querySelector(".js-close"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),header:document.querySelector(".header"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),toggleFiltersBtn:document.getElementById("toggle-filters"),filtersContainer:document.getElementById("filters-container"),genreButton:document.getElementById("genre-button"),genreMenu:document.getElementById("genre-menu"),sortingDropdown:document.querySelector("#sorting-dropdown"),sortingMenu:document.querySelector("#sorting-menu"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),modalLoader:document.getElementById("modal-loader"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},j=new IntersectionObserver(([t])=>{t.isIntersecting&&a.footer.classList.add("footer--visible")},{threshold:.8});j.observe(a.footer);l.defaults.baseURL="https://sound-wave.b.goit.study/api";async function T(t=1,e=8){try{const o=`https://sound-wave.b.goit.study/api/artists?page=${t}&limit=${e}`,s=await fetch(o);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return await s.json()}catch(r){throw console.error("Error in fetchArtists:",r),r}}async function C(t){try{return(await l.get(`/artists/${t}`)).data}catch(e){throw console.error("Error in fetchArtistById:",e),e}}async function I(t){try{return(await l.get(`/artists/${t}/albums`)).data.albumsList}catch(e){throw console.error("Error in fetchArtistsAlbumsById:",e),e}}const y="/js-project-team-7/assets/sprite-DCaIFKl6.svg";function x(t){const e=t.artists.map(r=>{const{_id:o,strArtist:s,strBiographyEN:n,strArtistThumb:i,genres:c}=r;return`
        <li class="artist-card" data-id="${o}" data-artist="${encodeURIComponent(JSON.stringify(r))}">
          <img class="artist-card-img" src="${i}" alt="${s}" loading="lazy"/>

          <ul class="artist-card-genres">
            ${c.map(d=>`<li>${d}</li>`).join("")}
          </ul>

          <h3 class="artist-card-name">${s}</h3>

          <p class="artist-card-info">
            ${n?n.slice(0,100)+"...":"No description available"}
          </p>

          <button class="artist-card-btn" type="button">
            Learn More
            <svg class="artist-card-icon" width="24" height="24">
              <use href="${y}#icon-caret-right"></use>
            </svg>
          </button>
        </li>`}).join("");a.artistCardsContainer.insertAdjacentHTML("beforeend",e)}const P=document.querySelector(".artists-info"),u=document.querySelector(".artists-albums");function N(t){const{strArtist:e="-",strArtistThumb:r,intFormedYear:o,intDiedYear:s,strGender:n="-",intMembers:i,strCountry:c="-",strBiographyEN:d="-",genresList:f=[]}=t,M=o?s?`${o} - ${s}`:`${o} - present`:"-",$=f.length?f.map(k=>`<p class="genre-item">${k}</p>`).join(""):"-",E=`
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
            <p>${n}</p>
          </li>
          <li class="artist-meta-list-item"><b>Members</b><br>
            <p>${i??"-"}</p>
          </li>
          <li class="artist-meta-list-item"><b>Country</b><br>
            <p>${c}</p>
          </li>
      </ul>
    <div class="artist-bottom">
      <div class="artist-biography">
        <h3 class="artist-biography-title">Biography</h3>
        <p class="artist-biography-desc">${d}</p>
      </div>
      <div class="artist-genres">
        ${$}
      </div>
      </div>
    </div>
    </div>
  `;P.innerHTML=E}function H(t=[]){if(u.innerHTML="",!t.length){u.innerHTML="<h4>-</h4>";return}const e=`
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
  ${s.intDuration?F(s.intDuration):"-"}
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
  `;u.innerHTML=e}function F(t){const e=Math.floor(t/1e3),r=Math.floor(e/60),o=e%60;return`${r}:${o.toString().padStart(2,"0")}`}function D(){a.loadMoreBtn.classList.add("visually-hidden")}function O(){a.loader.classList.remove("visually-hidden"),a.loadMoreBtn.classList.add("visually-hidden")}function R(){a.loader.classList.add("visually-hidden"),a.loadMoreBtn.classList.remove("visually-hidden")}function U(t,e){const r=typeof t=="string"?document.querySelector(t):t;if(!r)return;const o=document.createElement("div");o.className="stars";const s=Math.min(100,Math.max(0,e/5*100));o.style.setProperty("--rating-percent",`${s}%`),r.appendChild(o)}function _({artist:t,albums:e}){const r={...t,albumsList:e||[],genresList:t.genres||[]};N(r),H(r.albumsList),a.modal.classList.remove("hidden"),document.body.classList.add("modal-open"),Y()}function v(){a.modal.classList.add("hidden"),document.body.classList.remove("modal-open"),V()}function b(t){(t.target===a.modal||t.target.closest(".js-modal-close"))&&v()}function L(t){t.key==="Escape"&&v()}function Y(){document.addEventListener("click",b),document.addEventListener("keydown",L)}function V(){document.removeEventListener("click",b),document.removeEventListener("keydown",L)}function K(){var t;(t=a.modalLoader)==null||t.classList.remove("visually-hidden")}function z(){var t;(t=a.modalLoader)==null||t.classList.add("visually-hidden")}const J=new B(".swiper",{modules:[A,q],slidesPerView:1,spaceBetween:0,cssMode:!1,touchEventsTarget:"container",centeredSlides:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom(t,e,r){return`
        <span class="swiper-pagination-bullet" data-index="0"></span>
        <span class="swiper-pagination-bullet" data-index="middle"></span>
        <span class="swiper-pagination-bullet" data-index="${r-1}"></span>
      `},clickable:!0},on:{init(t){setTimeout(()=>{m(t),W(t)},300)},slideChange(t){m(t)}},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},simulateTouch:!0,touchRatio:1,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});function W(t){t.pagination.el.addEventListener("click",r=>{const o=r.target.closest(".swiper-pagination-bullet");if(!o)return;let s=o.dataset.index;s==="middle"?s=Math.floor(t.slides.length/2):s=parseInt(s,10),t.slideTo(s)}),m(t)}function m(t){const r=t.pagination.el.querySelectorAll(".swiper-pagination-bullet");r.forEach(s=>s.classList.remove("swiper-pagination-bullet-active"));const o=t.realIndex;o===0?r[0].classList.add("swiper-pagination-bullet-active"):o===t.slides.length-1?r[2].classList.add("swiper-pagination-bullet-active"):r[1].classList.add("swiper-pagination-bullet-active")}l.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function G(){try{const{data:t}=await l.get("/feedbacks?limit=20&page=1"),e=t.data,r=document.getElementById("feedbacks-container");r.innerHTML="",e.forEach((o,s)=>{const n=document.createElement("div");n.classList.add("swiper-slide");const i=`raty-${s}`;n.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${i}"></div>
          <p class="feedback-text">"${o.descr}"</p>
          <p class="author-name">${o.name}</p>
        </div>
      `,r.appendChild(n),U(`#${i}`,o.rating)}),J.update()}catch(t){console.error("Error fetching feedbacks:",t)}}G();window.history.scrollRestoration="manual";const Q=t=>{const e=document.getElementById(t);if(!e)return;const r=e.getBoundingClientRect().top+window.scrollY-a.header.offsetHeight;window.scrollTo({top:r,behavior:"smooth"})},w=()=>{a.navList.classList.remove("is-open"),document.body.classList.remove("body-lock")},X=()=>{a.navList.classList.add("is-open"),document.body.classList.add("body-lock"),a.navLinks.forEach(t=>{t.classList.remove("active"),t.blur()})},Z=t=>{a.navLinks.forEach(e=>e.classList.remove("active")),t.classList.add("active"),t.blur()},tt=()=>{const t=window.scrollY+a.header.offsetHeight+5;a.navLinks.forEach(e=>{const r=e.getAttribute("href");if(!r||r==="#"||r.startsWith("http"))return;const o=document.getElementById(r.slice(1));if(!o)return;const s=o.offsetTop,n=s+o.offsetHeight;t>=s&&t<n?(e.classList.add("active"),e.blur()):e.classList.remove("active")})};a.burger.addEventListener("click",X);a.closeBtn.addEventListener("click",w);document.querySelectorAll(".header-logo").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),location.reload()})});a.navLinks.forEach(t=>{const e=t.getAttribute("href");!e||e==="#"||e.startsWith("http")||t.addEventListener("click",r=>{r.preventDefault();const o=e.slice(1);Q(o),Z(t),w(),history.replaceState(null,null," ")})});window.addEventListener("scroll",tt);window.addEventListener("load",()=>{window.location.hash&&setTimeout(()=>{window.scrollTo(0,0),history.replaceState(null,null," ")},0)});let p=1;const h=8;let g=null;async function S(){O();try{const t=await T(p,h);x(t),g=Math.ceil(t.total/h)}catch(t){console.error("Failed to load artists:",t)}finally{R(),p<g&&D()}}a.loadMoreBtn.addEventListener("click",()=>{p++,S().catch(t=>{console.error("Failed to load more artists:",t)})});a.artistCardsContainer.addEventListener("click",async t=>{const e=t.target.closest(".artist-card-btn");if(!e)return;const o=e.closest(".artist-card").dataset.artist;if(!o){console.warn("Missing artist data");return}K(),a.modal.classList.remove("hidden");try{const s=JSON.parse(decodeURIComponent(o)),n=await C(s._id),i=await I(s._id),c={...n,genres:s.genres||[]};_({artist:c,albums:i})}catch(s){console.error("Failed to open artist modal:",s)}finally{setTimeout(()=>{z()},20)}});S();
//# sourceMappingURL=index.js.map
