import{a as l,S as k,N as B,P as E}from"./assets/vendor-Cj1XzFCq.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const n={burger:document.querySelector(".js-burger"),closeBtn:document.querySelector(".js-close"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),header:document.querySelector(".header"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),toggleFiltersBtn:document.getElementById("toggle-filters"),filtersContainer:document.getElementById("filters-container"),genreButton:document.getElementById("genre-button"),genreMenu:document.getElementById("genre-menu"),sortingDropdown:document.querySelector("#sorting-dropdown"),sortingMenu:document.querySelector("#sorting-menu"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),modalLoader:document.getElementById("modal-loader"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},j=new IntersectionObserver(([t])=>{t.isIntersecting&&n.footer.classList.add("footer--visible")},{threshold:.8});j.observe(n.footer);l.defaults.baseURL="https://sound-wave.b.goit.study/api";async function q(t=1,s=8){try{const o=`https://sound-wave.b.goit.study/api/artists?page=${t}&limit=${s}`,e=await fetch(o);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(r){throw console.error("Error in fetchArtists:",r),r}}async function A(t){try{return(await l.get(`/artists/${t}`)).data}catch(s){throw console.error("Error in fetchArtistById:",s),s}}async function I(t){try{return(await l.get(`/artists/${t}/albums`)).data.albumsList}catch(s){throw console.error("Error in fetchArtistsAlbumsById:",s),s}}const h="/js-project-team-7/assets/sprite-3VxN5qeB.svg";function C(t){const s=t.artists.map(r=>{const{_id:o,strArtist:e,strBiographyEN:a,strArtistThumb:i,genres:c}=r;return`
        <li class="artist-card" data-id="${o}" data-artist="${encodeURIComponent(JSON.stringify(r))}">
          <img class="artist-card-img" src="${i}" alt="${e}" />

          <ul class="artist-card-genres">
            ${c.map(d=>`<li>${d}</li>`).join("")}
          </ul>

          <h3 class="artist-card-name">${e}</h3>

          <p class="artist-card-info">
            ${a?a.slice(0,100)+"...":"No description available"}
          </p>

          <button class="artist-card-btn" type="button">
            Learn More
            <svg class="artist-card-icon" width="24" height="24">
              <use href="${h}#icon-caret-right"></use>
            </svg>
          </button>
        </li>`}).join("");n.artistCardsContainer.insertAdjacentHTML("beforeend",s)}const T=document.querySelector(".artists-info"),u=document.querySelector(".artists-albums");function P(t){const{strArtist:s="-",strArtistThumb:r,intFormedYear:o,intDiedYear:e,strGender:a="-",intMembers:i,strCountry:c="-",strBiographyEN:d="-",genresList:p=[]}=t,w=o?e?`${o} - ${e}`:`${o} - present`:"-",$=p.length?p.map(M=>`<p class="genre-item">${M}</p>`).join(""):"-",S=`
    <h2 class="artist-title">${s}</h2>
    <div class="modal-artist-info">
    <div class="artist-img-container">
        <img src="${r||""}" alt="${s}" />
      </div>
      <div class="artist-top">
      <ul class="artist-meta-list"> 
          <li class="artist-meta-list-item"><b>Years active</b><br>
            <p>${w}</p>
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
        ${$}
      </div>
      </div>
    </div>
    </div>
  `;T.innerHTML=S}function N(t=[]){if(u.innerHTML="",!t.length){u.innerHTML="<h4>-</h4>";return}const s=`
    <h2 class="albums-title">Albums</h2>
      <div class="albums-list">
  ${t.map(r=>{const o=r.tracks&&r.tracks.length?`
              <ul class="track-list">
                <li class="track-header">
                  <span>Track</span>
                  <span>Time</span>
                  <span>Link</span>
                </li>
              ${r.tracks.map(e=>`
                <li class="track-item">
                  <span class="track-name">${e.strTrack||"-"}</span>
                  <span class="track-duration">
  ${e.intDuration?x(e.intDuration):"-"}
</span>
                  ${e.movie?`<a class="track-link" href="${e.movie}" target="_blank" rel="noopener noreferrer">
                          <svg width="24" height="24">
                            <use href="${h}#icon-youtube"></use>
                          </svg>
                        </a>`:'<span class="track-link empty"></span>'}
                    </li>`).join("")}
              </ul>`:"<p>No tracks</p>";return`
          <div class="album">
            <h3 class="album-title">${r.strAlbum||"-"}</h3>
            ${o}
          </div>`}).join("")}
    </div>
  `;u.innerHTML=s}function x(t){const s=Math.floor(t/1e3),r=Math.floor(s/60),o=s%60;return`${r}:${o.toString().padStart(2,"0")}`}function F(){n.loadMoreBtn.classList.remove("visually-hidden")}function H(){n.loadMoreBtn.classList.add("visually-hidden")}function O(){n.loader.classList.remove("visually-hidden")}function D(){n.loader.classList.add("visually-hidden")}function R(t,s){const r=typeof t=="string"?document.querySelector(t):t;if(!r)return;const o=document.createElement("div");o.className="stars";const e=Math.min(100,Math.max(0,s/5*100));o.style.setProperty("--rating-percent",`${e}%`),r.appendChild(o)}function U({artist:t,albums:s}){const r={...t,albumsList:s||[],genresList:t.genres||[]};P(r),N(r.albumsList),_()}function y(){n.modal.classList.add("hidden"),document.body.classList.remove("modal-open"),V()}function b(t){(t.target===n.modal||t.target.closest(".js-modal-close"))&&y()}function v(t){t.key==="Escape"&&y()}function _(){document.addEventListener("click",b),document.addEventListener("keydown",v)}function V(){document.removeEventListener("click",b),document.removeEventListener("keydown",v)}function Y(){var t;(t=n.modalLoader)==null||t.classList.remove("visually-hidden")}function J(){var t;(t=n.modalLoader)==null||t.classList.add("visually-hidden")}const K=new k(".swiper",{modules:[B,E],slidesPerView:1,spaceBetween:0,cssMode:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});l.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function G(){try{const{data:t}=await l.get("/feedbacks?limit=3&page=1"),s=t.data,r=document.getElementById("feedbacks-container");r.innerHTML="",s.forEach((o,e)=>{const a=document.createElement("div");a.classList.add("swiper-slide");const i=`raty-${e}`;a.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${i}"></div>
          <p class="feedback-text">"${o.descr}"</p>
          <p class="author-name">${o.name}</p>
        </div>
      `,r.appendChild(a),R(`#${i}`,o.rating)}),K.update()}catch(t){console.error("Error fetching feedbacks:",t)}}G();n.burger.addEventListener("click",()=>{n.navList.classList.add("is-open")});n.closeBtn.addEventListener("click",()=>{n.navList.classList.remove("is-open")});n.navLinks.forEach(t=>{t.addEventListener("click",s=>{s.preventDefault();const r=t.getAttribute("href").substring(1),o=document.getElementById(r);if(o){const e=n.header.offsetHeight,a=o.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:a,behavior:"smooth"}),n.navList.classList.contains("is-open")&&n.navList.classList.remove("is-open")}})});document.getElementById("loader");let m=1;const f=8;let g=null;async function L(){O(),H();try{const t=await q(m,f);C(t),g=Math.ceil(t.total/f)}catch(t){console.error("Failed to load artists:",t)}finally{D(),m<g&&F()}}n.loadMoreBtn.addEventListener("click",()=>{m++,L().catch(t=>{console.error("Failed to load more artists:",t)})});n.artistCardsContainer.addEventListener("click",async t=>{const s=t.target.closest(".artist-card-btn");if(!s)return;const o=s.closest(".artist-card").dataset.artist;if(!o){console.warn("Missing artist data");return}Y(),n.modal.classList.remove("hidden");try{const e=JSON.parse(decodeURIComponent(o)),a=await A(e._id),i=await I(e._id),c={...a,genres:e.genres||[]};U({artist:c,albums:i})}catch(e){console.error("Failed to open artist modal:",e)}finally{setTimeout(()=>{J()},20)}});L();
//# sourceMappingURL=index.js.map
