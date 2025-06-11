import{a as c,S,N as M,P as B}from"./assets/vendor-Cj1XzFCq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const n={burger:document.querySelector(".js-burger"),closeBtn:document.querySelector(".js-close"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),header:document.querySelector(".header"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),toggleFiltersBtn:document.getElementById("toggle-filters"),filtersContainer:document.getElementById("filters-container"),genreButton:document.getElementById("genre-button"),genreMenu:document.getElementById("genre-menu"),sortingDropdown:document.querySelector("#sorting-dropdown"),sortingMenu:document.querySelector("#sorting-menu"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},k=new IntersectionObserver(([e])=>{e.isIntersecting&&n.footer.classList.add("footer--visible")},{threshold:.8});k.observe(n.footer);c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function E(e=1,t=8){try{const o=`https://sound-wave.b.goit.study/api/artists?page=${e}&limit=${t}`,r=await fetch(o);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(s){throw console.error("Error in fetchArtists:",s),s}}async function q(e){try{return(await c.get(`/artists/${e}`)).data}catch(t){throw console.error("Error in fetchArtistById:",t),t}}async function j(e){try{return(await c.get(`/artists/${e}/albums`)).data.albumsList}catch(t){throw console.error("Error in fetchArtistsAlbumsById:",t),t}}async function A(){try{return(await c.get("/genres")).data}catch{}}async function C(e){try{return(await c.get(`/artists?genre=${e}`)).data}catch{}}const y="/js-project-team-7/assets/sprite-3VxN5qeB.svg";function h(e){const t=e.artists.map(s=>{const{_id:o,strArtist:r,strBiographyEN:a,strArtistThumb:i,genres:l}=s;return`
        <li class="artist-card" data-id="${o}" data-artist="${encodeURIComponent(JSON.stringify(s))}">
          <img class="artist-card-img" src="${i}" alt="${r}" />

          <ul class="artist-card-genres">
            ${l.map(d=>`<li>${d}</li>`).join("")}
          </ul>

          <h3 class="artist-card-name">${r}</h3>

          <p class="artist-card-info">
            ${a?a.slice(0,100)+"...":"No description available"}
          </p>

          <button class="artist-card-btn" type="button">
            Learn More
            <svg class="artist-card-icon" width="24" height="24">
              <use href="${y}#icon-caret-right"></use>
            </svg>
          </button>
        </li>`}).join("");n.artistCardsContainer.insertAdjacentHTML("beforeend",t)}const T=document.querySelector(".artists-info"),u=document.querySelector(".artists-albums");function I(e){const{strArtist:t="-",strArtistThumb:s,intFormedYear:o,intDiedYear:r,strGender:a="-",intMembers:i,strCountry:l="-",strBiographyEN:d="-",genresList:g=[]}=e,v=o?r?`${o} - ${r}`:`${o} - present`:"-",L=g.length?g.map($=>`<p class="genre-item">${$}</з>`).join(""):"-",w=`
    <h2 class="artist-title">${t}</h2>
    <div class="modal-artist-info">
      <div class="artist-img-container">
        <img src="${s||""}" alt="${t}" />
      </div>
      <ul class="artist-meta-list">
        <li><b>Years active:</b> ${v}</li>
        <li><b>Sex:</b> ${a}</li>
        <li><b>Members:</b> ${i??"-"}</li>
        <li><b>Country:</b> ${l}</li>
      </ul>
      
      <div class="artist-biography">
        <h3 class="artist-biography-title">Biography</h3>
        <p class="artist-biography-desc">${d}</p>
      </div>
      <div class="artist-genres">
        ${L}
      </div>
    </div>
  `;T.innerHTML=w}function P(e=[]){if(u.innerHTML="",!e.length){u.innerHTML="<h4>-</h4>";return}const t=`
    <h2 class="albums-title">Albums</h2>
  ${e.map(s=>{const o=s.tracks&&s.tracks.length?`
              <ul class="track-list">
                <li class="track-header">
                  <span>Track</span>
                  <span>Time</span>
                  <span>Link</span>
                </li>
              ${s.tracks.map(r=>`
                <li class="track-item">
                  <span class="track-name">${r.strTrack||"-"}</span>
                  <span class="track-duration">
  ${r.intDuration?N(r.intDuration):"-"}
</span>
                  ${r.movie?`<a class="track-link" href="${r.movie}" target="_blank" rel="noopener noreferrer">
                          <svg width="24" height="24">
                            <use href="${y}#icon-youtube"></use>
                          </svg>
                        </a>`:'<span class="track-link empty"></span>'}
                    </li>`).join("")}
              </ul>`:"<p>No tracks</p>";return`
          <div class="album">
            <h3 class="album-title">${s.strAlbum||"-"}</h3>
            ${o}
          </div>`}).join("")}
  `;u.innerHTML=t}function N(e){const t=Math.floor(e/1e3),s=Math.floor(t/60),o=t%60;return`${s}:${o.toString().padStart(2,"0")}`}function H(){n.loadMoreBtn.classList.remove("visually-hidden")}function x(){n.loadMoreBtn.classList.add("visually-hidden")}function F(){n.loader.classList.remove("visually-hidden")}function O(){n.loader.classList.add("visually-hidden")}function D(e,t){const s=typeof e=="string"?document.querySelector(e):e;if(!s)return;const o=document.createElement("div");o.className="stars";const r=Math.min(100,Math.max(0,t/5*100));o.style.setProperty("--rating-percent",`${r}%`),s.appendChild(o)}async function R(){const e=await A();n.genreMenu.innerHTML=e.map(t=>`<li data-genre="${t.genre}">${t.genre}</li>`).join("")}function U({artist:e,albums:t}){const s={...e,albumsList:t||[],genresList:e.genres||[]};I(s),P(s.albumsList),n.modal.classList.remove("hidden"),document.body.classList.add("modal-open")}document.addEventListener("click",e=>{e.target.closest(".js-modal-close")&&(n.modal.classList.add("hidden"),document.body.classList.remove("modal-open"))});const _=new S(".swiper",{modules:[M,B],slidesPerView:1,spaceBetween:0,cssMode:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});c.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function G(){try{const{data:e}=await c.get("/feedbacks?limit=3&page=1"),t=e.data,s=document.getElementById("feedbacks-container");s.innerHTML="",t.forEach((o,r)=>{const a=document.createElement("div");a.classList.add("swiper-slide");const i=`raty-${r}`;a.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${i}"></div>
          <p class="feedback-text">"${o.descr}"</p>
          <p class="author-name">${o.name}</p>
        </div>
      `,s.appendChild(a),D(`#${i}`,o.rating)}),_.update()}catch(e){console.error("Error fetching feedbacks:",e)}}G();n.burger.addEventListener("click",()=>{n.navList.classList.add("is-open")});n.closeBtn.addEventListener("click",()=>{n.navList.classList.remove("is-open")});n.navLinks.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const s=e.getAttribute("href").substring(1),o=document.getElementById(s);if(o){const r=n.header.offsetHeight,a=o.getBoundingClientRect().top+window.pageYOffset-r;window.scrollTo({top:a,behavior:"smooth"}),n.navList.classList.contains("is-open")&&n.navList.classList.remove("is-open")}})});document.getElementById("loader");let m=1;const p=8;let f=null;async function b(){F(),x();try{const e=await E(m,p);h(e),f=Math.ceil(e.total/p)}catch(e){console.error("Failed to load artists:",e)}finally{O(),m<f&&H()}}n.loadMoreBtn.addEventListener("click",()=>{m++,b().catch(e=>{console.error("Failed to load more artists:",e)})});n.artistCardsContainer.addEventListener("click",async e=>{const t=e.target.closest(".artist-card-btn");if(!t)return;const o=t.closest(".artist-card").dataset.artist;if(!o){console.warn("Missing artist data");return}try{const r=JSON.parse(decodeURIComponent(o)),a=await q(r._id),i=await j(r._id),l={...a,genres:r.genres||[]};U({artist:l,albums:i})}catch(r){console.error("Failed to open artist modal:",r)}});b();n.toggleFiltersBtn.addEventListener("click",()=>{n.filtersContainer.classList.toggle("hidden")});n.genreButton.addEventListener("click",async()=>{n.genreMenu.classList.toggle("hidden"),n.genreMenu.innerHTML||await R()});n.genreMenu.addEventListener("click",async e=>{const t=e.target.dataset.genre;if(t)try{const s=await C(t);n.artistCardsContainer.innerHTML="",h(s),n.filtersContainer.classList.add("hidden"),s.length<8?n.loadMoreBtn.style.display="none":n.loadMoreBtn.style.display="block"}catch(s){console.error("Error fetching artists by genre:",s)}});document.addEventListener("DOMContentLoaded",()=>{n.sortingDropdown=document.querySelector("#sorting-dropdown"),n.sortingMenu=document.querySelector("#sorting-menu")});n.sortingMenu.addEventListener("click",e=>{e.target.dataset.value});
//# sourceMappingURL=index.js.map
