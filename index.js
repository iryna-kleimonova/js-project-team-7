import{a as c,S,N as B,P as q}from"./assets/vendor-Cj1XzFCq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const s={burger:document.querySelector(".js-burger"),closeBtn:document.querySelector(".js-close"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),header:document.querySelector(".header"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),toggleFiltersBtn:document.getElementById("toggle-filters"),filtersContainer:document.getElementById("filters-container"),genreButton:document.getElementById("genre-button"),genreMenu:document.getElementById("genre-menu"),sortingDropdown:document.querySelector("#sorting-dropdown"),sortingMenu:document.querySelector("#sorting-menu"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},j=new IntersectionObserver(([e])=>{e.isIntersecting&&s.footer.classList.add("footer--visible")},{threshold:.8});j.observe(s.footer);c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function A(e=1,t=8){try{const o=`https://sound-wave.b.goit.study/api/artists?page=${e}&limit=${t}`,r=await fetch(o);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(n){throw console.error("Error in fetchArtists:",n),n}}async function C(e){try{return(await c.get(`/artists/${e}`)).data}catch(t){throw console.error("Error in fetchArtistById:",t),t}}async function T(e){try{return(await c.get(`/artists/${e}/albums`)).data.albumsList}catch(t){throw console.error("Error in fetchArtistsAlbumsById:",t),t}}async function I(){try{return(await c.get("/genres")).data}catch{}}async function P(e){try{return(await c.get(`/artists?genre=${e}`)).data}catch{}}const y="/js-project-team-7/assets/sprite-3VxN5qeB.svg";function h(e){const t=e.artists.map(n=>{const{_id:o,strArtist:r,strBiographyEN:a,strArtistThumb:i,genres:d}=n;return`
        <li class="artist-card" data-id="${o}" data-artist="${encodeURIComponent(JSON.stringify(n))}">
          <img class="artist-card-img" src="${i}" alt="${r}" />

          <ul class="artist-card-genres">
            ${d.map(l=>`<li>${l}</li>`).join("")}
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
        </li>`}).join("");s.artistCardsContainer.insertAdjacentHTML("beforeend",t)}const N=document.querySelector(".artists-info"),u=document.querySelector(".artists-albums");function H(e){const{strArtist:t="-",strArtistThumb:n,intFormedYear:o,intDiedYear:r,strGender:a="-",intMembers:i,strCountry:d="-",strBiographyEN:l="-",genresList:g=[]}=e,$=o?r?`${o} - ${r}`:`${o} - present`:"-",k=g.length?g.map(M=>`<p class="genre-item">${M}</з>`).join(""):"-",E=`
    <h2 class="artist-title">${t}</h2>
    <div class="modal-artist-info">
      <div class="artist-img-container">
        <img src="${n||""}" alt="${t}" />
      </div>
      <ul class="artist-meta-list">
        <li><b>Years active:</b> ${$}</li>
        <li><b>Sex:</b> ${a}</li>
        <li><b>Members:</b> ${i??"-"}</li>
        <li><b>Country:</b> ${d}</li>
      </ul>
      
      <div class="artist-biography">
        <h3 class="artist-biography-title">Biography</h3>
        <p class="artist-biography-desc">${l}</p>
      </div>
      <div class="artist-genres">
        ${k}
      </div>
    </div>
  `;N.innerHTML=E}function x(e=[]){if(u.innerHTML="",!e.length){u.innerHTML="<h4>-</h4>";return}const t=`
    <h2 class="albums-title">Albums</h2>
  ${e.map(n=>{const o=n.tracks&&n.tracks.length?`
              <ul class="track-list">
                <li class="track-header">
                  <span>Track</span>
                  <span>Time</span>
                  <span>Link</span>
                </li>
              ${n.tracks.map(r=>`
                <li class="track-item">
                  <span class="track-name">${r.strTrack||"-"}</span>
                  <span class="track-duration">
  ${r.intDuration?F(r.intDuration):"-"}
</span>
                  ${r.movie?`<a class="track-link" href="${r.movie}" target="_blank" rel="noopener noreferrer">
                          <svg width="24" height="24">
                            <use href="${y}#icon-youtube"></use>
                          </svg>
                        </a>`:'<span class="track-link empty"></span>'}
                    </li>`).join("")}
              </ul>`:"<p>No tracks</p>";return`
          <div class="album">
            <h3 class="album-title">${n.strAlbum||"-"}</h3>
            ${o}
          </div>`}).join("")}
  `;u.innerHTML=t}function F(e){const t=Math.floor(e/1e3),n=Math.floor(t/60),o=t%60;return`${n}:${o.toString().padStart(2,"0")}`}function O(){s.loadMoreBtn.classList.remove("visually-hidden")}function D(){s.loadMoreBtn.classList.add("visually-hidden")}function R(){s.loader.classList.remove("visually-hidden")}function U(){s.loader.classList.add("visually-hidden")}function _(e,t){const n=typeof e=="string"?document.querySelector(e):e;if(!n)return;const o=document.createElement("div");o.className="stars";const r=Math.min(100,Math.max(0,t/5*100));o.style.setProperty("--rating-percent",`${r}%`),n.appendChild(o)}async function G(){const e=await I();s.genreMenu.innerHTML=e.map(t=>`<li data-genre="${t.genre}">${t.genre}</li>`).join("")}function V({artist:e,albums:t}){const n={...e,albumsList:t||[],genresList:e.genres||[]};H(n),x(n.albumsList),s.modal.classList.remove("hidden"),document.body.classList.add("modal-open")}function v(e){e.target.closest(".js-modal-close")&&(s.modal.classList.add("hidden"),document.body.classList.remove("modal-open"))}function b(e){e.key==="Escape"&&s.modal.classList.add("hidden")}function L(e){e.target===s.modal&&s.modal.classList.add("hidden")}function Y(e){document.addEventListener("click",v),document.addEventListener("keydown",b),e.modal.addEventListener("click",L)}function J(e){document.removeEventListener("click",v),document.removeEventListener("keydown",b),e.modal.removeEventListener("click",L)}Y(s);J(s);const K=new S(".swiper",{modules:[B,q],slidesPerView:1,spaceBetween:0,cssMode:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});c.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function z(){try{const{data:e}=await c.get("/feedbacks?limit=3&page=1"),t=e.data,n=document.getElementById("feedbacks-container");n.innerHTML="",t.forEach((o,r)=>{const a=document.createElement("div");a.classList.add("swiper-slide");const i=`raty-${r}`;a.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${i}"></div>
          <p class="feedback-text">"${o.descr}"</p>
          <p class="author-name">${o.name}</p>
        </div>
      `,n.appendChild(a),_(`#${i}`,o.rating)}),K.update()}catch(e){console.error("Error fetching feedbacks:",e)}}z();s.burger.addEventListener("click",()=>{s.navList.classList.add("is-open")});s.closeBtn.addEventListener("click",()=>{s.navList.classList.remove("is-open")});s.navLinks.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("href").substring(1),o=document.getElementById(n);if(o){const r=s.header.offsetHeight,a=o.getBoundingClientRect().top+window.pageYOffset-r;window.scrollTo({top:a,behavior:"smooth"}),s.navList.classList.contains("is-open")&&s.navList.classList.remove("is-open")}})});document.getElementById("loader");let m=1;const p=8;let f=null;async function w(){R(),D();try{const e=await A(m,p);h(e),f=Math.ceil(e.total/p)}catch(e){console.error("Failed to load artists:",e)}finally{U(),m<f&&O()}}s.loadMoreBtn.addEventListener("click",()=>{m++,w().catch(e=>{console.error("Failed to load more artists:",e)})});s.artistCardsContainer.addEventListener("click",async e=>{const t=e.target.closest(".artist-card-btn");if(!t)return;const o=t.closest(".artist-card").dataset.artist;if(!o){console.warn("Missing artist data");return}try{const r=JSON.parse(decodeURIComponent(o)),a=await C(r._id),i=await T(r._id),d={...a,genres:r.genres||[]};V({artist:d,albums:i})}catch(r){console.error("Failed to open artist modal:",r)}});w();s.toggleFiltersBtn.addEventListener("click",()=>{s.filtersContainer.classList.toggle("hidden")});s.genreButton.addEventListener("click",async()=>{s.genreMenu.classList.toggle("hidden"),s.genreMenu.innerHTML||await G()});s.genreMenu.addEventListener("click",async e=>{const t=e.target.dataset.genre;if(t)try{const n=await P(t);s.artistCardsContainer.innerHTML="",h(n),s.filtersContainer.classList.add("hidden"),n.length<8?s.loadMoreBtn.style.display="none":s.loadMoreBtn.style.display="block"}catch(n){console.error("Error fetching artists by genre:",n)}});document.addEventListener("DOMContentLoaded",()=>{s.sortingDropdown=document.querySelector("#sorting-dropdown"),s.sortingMenu=document.querySelector("#sorting-menu")});s.sortingMenu.addEventListener("click",e=>{e.target.dataset.value});
//# sourceMappingURL=index.js.map
