import{a as l,S as k,N as B,P as q}from"./assets/vendor-Cj1XzFCq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const n={burger:document.querySelector(".js-burger"),closeBtn:document.querySelector(".js-close"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),header:document.querySelector(".header"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),toggleFiltersBtn:document.getElementById("toggle-filters"),filtersContainer:document.getElementById("filters-container"),genreButton:document.getElementById("genre-button"),genreMenu:document.getElementById("genre-menu"),sortingDropdown:document.querySelector("#sorting-dropdown"),sortingMenu:document.querySelector("#sorting-menu"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),modalLoader:document.getElementById("modal-loader"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},A=new IntersectionObserver(([t])=>{t.isIntersecting&&n.footer.classList.add("footer--visible")},{threshold:.8});A.observe(n.footer);l.defaults.baseURL="https://sound-wave.b.goit.study/api";async function j(t=1,e=8){try{const o=`https://sound-wave.b.goit.study/api/artists?page=${t}&limit=${e}`,s=await fetch(o);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return await s.json()}catch(r){throw console.error("Error in fetchArtists:",r),r}}async function T(t){try{return(await l.get(`/artists/${t}`)).data}catch(e){throw console.error("Error in fetchArtistById:",e),e}}async function I(t){try{return(await l.get(`/artists/${t}/albums`)).data.albumsList}catch(e){throw console.error("Error in fetchArtistsAlbumsById:",e),e}}const y="/js-project-team-7/assets/sprite-3VxN5qeB.svg";function C(t){const e=t.artists.map(r=>{const{_id:o,strArtist:s,strBiographyEN:a,strArtistThumb:i,genres:c}=r;return`
        <li class="artist-card" data-id="${o}" data-artist="${encodeURIComponent(JSON.stringify(r))}">
          <img class="artist-card-img" src="${i}" alt="${s}" />

          <ul class="artist-card-genres">
            ${c.map(d=>`<li>${d}</li>`).join("")}
          </ul>

          <h3 class="artist-card-name">${s}</h3>

          <p class="artist-card-info">
            ${a?a.slice(0,100)+"...":"No description available"}
          </p>

          <button class="artist-card-btn" type="button">
            Learn More
            <svg class="artist-card-icon" width="24" height="24">
              <use href="${y}#icon-caret-right"></use>
            </svg>
          </button>
        </li>`}).join("");n.artistCardsContainer.insertAdjacentHTML("beforeend",e)}const P=document.querySelector(".artists-info"),u=document.querySelector(".artists-albums");function N(t){const{strArtist:e="-",strArtistThumb:r,intFormedYear:o,intDiedYear:s,strGender:a="-",intMembers:i,strCountry:c="-",strBiographyEN:d="-",genresList:f=[]}=t,S=o?s?`${o} - ${s}`:`${o} - present`:"-",M=f.length?f.map(E=>`<p class="genre-item">${E}</p>`).join(""):"-",$=`
    <h2 class="artist-title">${e}</h2>
    <div class="modal-artist-info">
    <div class="artist-img-container">
        <img src="${r||""}" alt="${e}" />
      </div>
      <div class="artist-top">
      <ul class="artist-meta-list"> 
          <li class="artist-meta-list-item"><b>Years active</b><br>
            <p>${S}</p>
          </li>
          <li class="artist-meta-list-item"><b>Sex</b><br>
            <p>${a}</p>
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
        ${M}
      </div>
      </div>
    </div>
    </div>
  `;P.innerHTML=$}function H(t=[]){if(u.innerHTML="",!t.length){u.innerHTML="<h4>-</h4>";return}const e=`
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
  ${s.intDuration?x(s.intDuration):"-"}
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
  `;u.innerHTML=e}function x(t){const e=Math.floor(t/1e3),r=Math.floor(e/60),o=e%60;return`${r}:${o.toString().padStart(2,"0")}`}function F(){n.loadMoreBtn.classList.add("visually-hidden")}function D(){n.loader.classList.remove("visually-hidden"),n.loadMoreBtn.classList.add("visually-hidden")}function O(){n.loader.classList.add("visually-hidden"),n.loadMoreBtn.classList.remove("visually-hidden")}function R(t,e){const r=typeof t=="string"?document.querySelector(t):t;if(!r)return;const o=document.createElement("div");o.className="stars";const s=Math.min(100,Math.max(0,e/5*100));o.style.setProperty("--rating-percent",`${s}%`),r.appendChild(o)}function U({artist:t,albums:e}){const r={...t,albumsList:e||[],genresList:t.genres||[]};N(r),H(r.albumsList),_()}function g(){n.modal.classList.add("hidden"),document.body.classList.remove("modal-open"),V()}function v(t){(t.target===n.modal||t.target.closest(".js-modal-close"))&&g()}function b(t){t.key==="Escape"&&g()}function _(){document.addEventListener("click",v),document.addEventListener("keydown",b)}function V(){document.removeEventListener("click",v),document.removeEventListener("keydown",b)}function Y(){var t;(t=n.modalLoader)==null||t.classList.remove("visually-hidden")}function J(){var t;(t=n.modalLoader)==null||t.classList.add("visually-hidden")}const K=new k(".swiper",{modules:[B,q],slidesPerView:1,spaceBetween:0,cssMode:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});l.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function W(){try{const{data:t}=await l.get("/feedbacks?limit=3&page=1"),e=t.data,r=document.getElementById("feedbacks-container");r.innerHTML="",e.forEach((o,s)=>{const a=document.createElement("div");a.classList.add("swiper-slide");const i=`raty-${s}`;a.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${i}"></div>
          <p class="feedback-text">"${o.descr}"</p>
          <p class="author-name">${o.name}</p>
        </div>
      `,r.appendChild(a),R(`#${i}`,o.rating)}),K.update()}catch(t){console.error("Error fetching feedbacks:",t)}}W();window.history.scrollRestoration="manual";const G=t=>{const e=document.getElementById(t);if(!e)return;const r=e.getBoundingClientRect().top+window.scrollY-n.header.offsetHeight;window.scrollTo({top:r,behavior:"smooth"})},L=()=>{n.navList.classList.remove("is-open"),document.body.classList.remove("body-lock")},z=()=>{n.navList.classList.add("is-open"),document.body.classList.add("body-lock"),n.navLinks.forEach(t=>{t.classList.remove("active"),t.blur()})},Q=t=>{n.navLinks.forEach(e=>e.classList.remove("active")),t.classList.add("active"),t.blur()},X=()=>{const t=window.scrollY+n.header.offsetHeight+5;n.navLinks.forEach(e=>{const r=e.getAttribute("href");if(!r||r==="#"||r.startsWith("http"))return;const o=document.getElementById(r.slice(1));if(!o)return;const s=o.offsetTop,a=s+o.offsetHeight;t>=s&&t<a?(e.classList.add("active"),e.blur()):e.classList.remove("active")})};n.burger.addEventListener("click",z);n.closeBtn.addEventListener("click",L);document.querySelectorAll(".header-logo").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),location.reload()})});n.navLinks.forEach(t=>{const e=t.getAttribute("href");!e||e==="#"||e.startsWith("http")||t.addEventListener("click",r=>{r.preventDefault();const o=e.slice(1);G(o),Q(t),L(),history.replaceState(null,null," ")})});window.addEventListener("scroll",X);window.addEventListener("load",()=>{window.location.hash&&setTimeout(()=>{window.scrollTo(0,0),history.replaceState(null,null," ")},0)});let m=1;const p=8;let h=null;async function w(){D();try{const t=await j(m,p);C(t),h=Math.ceil(t.total/p)}catch(t){console.error("Failed to load artists:",t)}finally{O(),m<h&&F()}}n.loadMoreBtn.addEventListener("click",()=>{m++,w().catch(t=>{console.error("Failed to load more artists:",t)})});n.artistCardsContainer.addEventListener("click",async t=>{const e=t.target.closest(".artist-card-btn");if(!e)return;const o=e.closest(".artist-card").dataset.artist;if(!o){console.warn("Missing artist data");return}Y(),n.modal.classList.remove("hidden");try{const s=JSON.parse(decodeURIComponent(o)),a=await T(s._id),i=await I(s._id),c={...a,genres:s.genres||[]};U({artist:c,albums:i})}catch(s){console.error("Failed to open artist modal:",s)}finally{setTimeout(()=>{J()},20)}});w();
//# sourceMappingURL=index.js.map
