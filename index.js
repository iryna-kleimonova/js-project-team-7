import{a as c,S as A,N as q,P as j}from"./assets/vendor-Cj1XzFCq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const n={burger:document.querySelector(".js-burger"),closeBtn:document.querySelector(".js-close"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),header:document.querySelector(".header"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),toggleFiltersBtn:document.getElementById("toggle-filters"),filtersContainer:document.getElementById("filters-container"),genreButton:document.getElementById("genre-button"),genreMenu:document.getElementById("genre-menu"),sortingDropdown:document.querySelector("#sorting-dropdown"),sortingMenu:document.querySelector("#sorting-menu"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),modalLoader:document.getElementById("modal-loader"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},T=new IntersectionObserver(([t])=>{t.isIntersecting&&n.footer.classList.add("footer--visible")},{threshold:.8});T.observe(n.footer);c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function I(t=1,e=8){try{const r=`https://sound-wave.b.goit.study/api/artists?page=${t}&limit=${e}`,s=await fetch(r);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return await s.json()}catch(o){throw console.error("Error in fetchArtists:",o),o}}async function C(t){try{return(await c.get(`/artists/${t}`)).data}catch(e){throw console.error("Error in fetchArtistById:",e),e}}async function x(t){try{return(await c.get(`/artists/${t}/albums`)).data.albumsList}catch(e){throw console.error("Error in fetchArtistsAlbumsById:",e),e}}const v="/js-project-team-7/assets/sprite-DCaIFKl6.svg";function P(t){const e=t.artists.map(o=>{const{_id:r,strArtist:s,strBiographyEN:a,strArtistThumb:i,genres:l}=o;return`
        <li class="artist-card" data-id="${r}" data-artist="${encodeURIComponent(JSON.stringify(o))}">
          <img class="artist-card-img" src="${i}" alt="${s}" loading="lazy"/>

          <ul class="artist-card-genres">
            ${l.map(d=>`<li>${d}</li>`).join("")}
          </ul>

          <h3 class="artist-card-name">${s}</h3>

          <p class="artist-card-info">
            ${a?a.slice(0,100)+"...":"No description available"}
          </p>

          <button class="artist-card-btn" type="button">
            Learn More
            <svg class="artist-card-icon" width="24" height="24">
              <use href="${v}#icon-caret-right"></use>
            </svg>
          </button>
        </li>`}).join("");n.artistCardsContainer.insertAdjacentHTML("beforeend",e)}const N=document.querySelector(".artists-info"),u=document.querySelector(".artists-albums");function H(t){const{strArtist:e="-",strArtistThumb:o,intFormedYear:r,intDiedYear:s,strGender:a="-",intMembers:i,strCountry:l="-",strBiographyEN:d="-",genresList:f=[]}=t,E=r?s?`${r} - ${s}`:`${r} - present`:"-",M=f.length?f.map(B=>`<p class="genre-item">${B}</p>`).join(""):"-",k=`
    <h2 class="artist-title">${e}</h2>
    <div class="modal-artist-info">
    <div class="artist-img-container">
        <img src="${o||""}" alt="${e}" loading="lazy"/>
      </div>
      <div class="artist-top">
      <ul class="artist-meta-list"> 
          <li class="artist-meta-list-item"><b>Years active</b><br>
            <p>${E}</p>
          </li>
          <li class="artist-meta-list-item"><b>Sex</b><br>
            <p>${a}</p>
          </li>
          <li class="artist-meta-list-item"><b>Members</b><br>
            <p>${i??"-"}</p>
          </li>
          <li class="artist-meta-list-item"><b>Country</b><br>
            <p>${l}</p>
          </li>
      </ul>
    <div class="artist-bottom">
      <div class="artist-biography">
        <h3 class="artist-biography-title">Biography</h3>
        <p class="artist-biography-desc">${d}</p>
      </div>
      <div class="artist-genres">
        ${M}
      </div>
      </div>
    </div>
    </div>
  `;N.innerHTML=k}function F(t=[]){if(u.innerHTML="",!t.length){u.innerHTML="<h4>-</h4>";return}const e=`
    <h2 class="albums-title">Albums</h2>
      <div class="albums-list">
  ${t.map(o=>{const r=o.tracks&&o.tracks.length?`
              <ul class="track-list">
                <li class="track-header">
                  <span>Track</span>
                  <span>Time</span>
                  <span>Link</span>
                </li>
              ${o.tracks.map(s=>`
                <li class="track-item">
                  <span class="track-name">${s.strTrack||"-"}</span>
                  <span class="track-duration">
  ${s.intDuration?D(s.intDuration):"-"}
</span>
                  ${s.movie?`<a class="track-link" href="${s.movie}" target="_blank" rel="noopener noreferrer">
                          <svg width="24" height="24">
                            <use href="${v}#icon-youtube"></use>
                          </svg>
                        </a>`:'<span class="track-link empty"></span>'}
                    </li>`).join("")}
              </ul>`:"<p>No tracks</p>";return`
          <div class="album">
            <h3 class="album-title">${o.strAlbum||"-"}</h3>
            ${r}
          </div>`}).join("")}
    </div>
  `;u.innerHTML=e}function D(t){const e=Math.floor(t/1e3),o=Math.floor(e/60),r=e%60;return`${o}:${r.toString().padStart(2,"0")}`}function O(){n.loadMoreBtn.classList.add("visually-hidden")}function R(){n.loader.classList.remove("visually-hidden"),n.loadMoreBtn.classList.add("visually-hidden")}function U(){n.loader.classList.add("visually-hidden"),n.loadMoreBtn.classList.remove("visually-hidden")}function Y(t,e){const o=typeof t=="string"?document.querySelector(t):t;if(!o)return;const r=document.createElement("div");r.className="stars";const s=Math.min(100,Math.max(0,e/5*100));r.style.setProperty("--rating-percent",`${s}%`),o.appendChild(r)}let h=0;function _({artist:t,albums:e}){h=window.scrollY||document.documentElement.scrollTop;const o={...t,albumsList:e||[],genresList:t.genres||[]};H(o),F(o.albumsList),document.body.style.cssText=`
    position: fixed;
    top: -${h}px;
    left: 0;
    width: 100%;
    overflow: hidden;
  `,n.modal.classList.remove("hidden"),V()}function b(){n.modal.classList.add("hidden");const t=-parseInt(document.body.style.top);document.body.style.cssText="",window.scrollTo({top:t}),K()}function L(t){(t.target===n.modal||t.target.closest(".js-modal-close"))&&b()}function w(t){t.key==="Escape"&&b()}function V(){document.addEventListener("click",L),document.addEventListener("keydown",w)}function K(){document.removeEventListener("click",L),document.removeEventListener("keydown",w)}function z(){var t;(t=n.modalLoader)==null||t.classList.remove("visually-hidden")}function J(){var t;(t=n.modalLoader)==null||t.classList.add("visually-hidden")}const W=new A(".swiper",{modules:[q,j],slidesPerView:1,spaceBetween:0,cssMode:!1,touchEventsTarget:"container",centeredSlides:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom(t,e,o){return`
        <span class="swiper-pagination-bullet" data-index="0"></span>
        <span class="swiper-pagination-bullet" data-index="middle"></span>
        <span class="swiper-pagination-bullet" data-index="${o-1}"></span>
      `},clickable:!0},on:{init(t){setTimeout(()=>{m(t),G(t)},300)},slideChange(t){m(t)}},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},simulateTouch:!0,touchRatio:1,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});function G(t){t.pagination.el.addEventListener("click",o=>{const r=o.target.closest(".swiper-pagination-bullet");if(!r)return;let s=r.dataset.index;s==="middle"?s=Math.floor(t.slides.length/2):s=parseInt(s,10),t.slideTo(s)}),m(t)}function m(t){const o=t.pagination.el.querySelectorAll(".swiper-pagination-bullet");o.forEach(s=>s.classList.remove("swiper-pagination-bullet-active"));const r=t.realIndex;r===0?o[0].classList.add("swiper-pagination-bullet-active"):r===t.slides.length-1?o[2].classList.add("swiper-pagination-bullet-active"):o[1].classList.add("swiper-pagination-bullet-active")}c.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function Q(){try{const{data:t}=await c.get("/feedbacks?limit=20&page=1"),e=t.data,o=document.getElementById("feedbacks-container");o.innerHTML="",e.forEach((r,s)=>{const a=document.createElement("div");a.classList.add("swiper-slide");const i=`raty-${s}`;a.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${i}"></div>
          <p class="feedback-text">"${r.descr}"</p>
          <p class="author-name">${r.name}</p>
        </div>
      `,o.appendChild(a),Y(`#${i}`,r.rating)}),W.update()}catch(t){console.error("Error fetching feedbacks:",t)}}Q();window.history.scrollRestoration="manual";const X=t=>{const e=document.getElementById(t);if(!e)return;const o=e.getBoundingClientRect().top+window.scrollY-n.header.offsetHeight;window.scrollTo({top:o,behavior:"smooth"})},S=()=>{n.navList.classList.remove("is-open"),document.body.classList.remove("body-lock")},Z=()=>{n.navList.classList.add("is-open"),document.body.classList.add("body-lock"),n.navLinks.forEach(t=>{t.classList.remove("active"),t.blur()})},tt=t=>{n.navLinks.forEach(e=>e.classList.remove("active")),t.classList.add("active"),t.blur()},et=()=>{const t=window.scrollY+n.header.offsetHeight+5;n.navLinks.forEach(e=>{const o=e.getAttribute("href");if(!o||o==="#"||o.startsWith("http"))return;const r=document.getElementById(o.slice(1));if(!r)return;const s=r.offsetTop,a=s+r.offsetHeight;t>=s&&t<a?(e.classList.add("active"),e.blur()):e.classList.remove("active")})};n.burger.addEventListener("click",Z);n.closeBtn.addEventListener("click",S);document.querySelectorAll(".header-logo").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),location.reload()})});n.navLinks.forEach(t=>{const e=t.getAttribute("href");!e||e==="#"||e.startsWith("http")||t.addEventListener("click",o=>{o.preventDefault();const r=e.slice(1);X(r),tt(t),S(),history.replaceState(null,null," ")})});window.addEventListener("scroll",et);window.addEventListener("load",()=>{window.location.hash&&setTimeout(()=>{window.scrollTo(0,0),history.replaceState(null,null," ")},0)});let p=1;const g=8;let y=null;async function $(){R();try{const t=await I(p,g);P(t),y=Math.ceil(t.total/g)}catch(t){console.error("Failed to load artists:",t)}finally{U(),p<y&&O()}}n.loadMoreBtn.addEventListener("click",()=>{p++,$().catch(t=>{console.error("Failed to load more artists:",t)})});n.artistCardsContainer.addEventListener("click",async t=>{const e=t.target.closest(".artist-card-btn");if(!e)return;const r=e.closest(".artist-card").dataset.artist;if(!r){console.warn("Missing artist data");return}z(),n.modal.classList.remove("hidden");try{const s=JSON.parse(decodeURIComponent(r)),a=await C(s._id),i=await x(s._id),l={...a,genres:s.genres||[]};_({artist:l,albums:i})}catch(s){console.error("Failed to open artist modal:",s)}finally{setTimeout(()=>{J()},20)}});$();
//# sourceMappingURL=index.js.map
