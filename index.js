import{a as c,S as k,N as M,P as E}from"./assets/vendor-Cj1XzFCq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const s={burger:document.querySelector(".js-burger"),closeBtn:document.querySelector(".js-close"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),header:document.querySelector(".header"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),toggleFiltersBtn:document.getElementById("toggle-filters"),filtersContainer:document.getElementById("filters-container"),genreButton:document.getElementById("genre-button"),genreMenu:document.getElementById("genre-menu"),sortingDropdown:document.querySelector("#sorting-dropdown"),sortingMenu:document.querySelector("#sorting-menu"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},B=new IntersectionObserver(([e])=>{e.isIntersecting&&s.footer.classList.add("footer--visible")},{threshold:.8});B.observe(s.footer);c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function q(e=1,t=8){try{const o=`https://sound-wave.b.goit.study/api/artists?page=${e}&limit=${t}`,r=await fetch(o);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(n){throw console.error("Error in fetchArtists:",n),n}}async function j(e){try{return(await c.get(`/artists/${e}`)).data}catch(t){throw console.error("Error in fetchArtistById:",t),t}}async function A(e){try{return(await c.get(`/artists/${e}/albums`)).data.albumsList}catch(t){throw console.error("Error in fetchArtistsAlbumsById:",t),t}}async function C(){try{return(await c.get("/genres")).data}catch{}}async function T(e){try{return(await c.get(`/artists?genre=${e}`)).data}catch{}}const y="/js-project-team-7/assets/sprite-3VxN5qeB.svg";function v(e){const t=e.artists.map(n=>{const{_id:o,strArtist:r,strBiographyEN:a,strArtistThumb:i,genres:d}=n;return`
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
        </li>`}).join("");s.artistCardsContainer.insertAdjacentHTML("beforeend",t)}const I=document.querySelector(".artists-info"),u=document.querySelector(".artists-albums");function P(e){const{strArtist:t="-",strArtistThumb:n,intFormedYear:o,intDiedYear:r,strGender:a="-",intMembers:i,strCountry:d="-",strBiographyEN:l="-",genresList:p=[]}=e,L=o?r?`${o} - ${r}`:`${o} - present`:"-",w=p.length?p.map(S=>`<p class="genre-item">${S}</p>`).join(""):"-",$=`
    <h2 class="artist-title">${t}</h2>
    <div class="modal-artist-info">
      <div class="artist-img-container">
        <img src="${n||""}" alt="${t}" />
      </div>
      <ul class="artist-meta-list">
        <div class="artist-img-container-first">
          <li><b>Years active</b><br>
            <p>${L}</p>
          </li>
          <li><b>Sex</b><br>
            <p>${a}</p>
          </li>
        </div>
        <div class="artist-img-container-second">
          <li><b>Members</b><br>
            <p>${i??"-"}</p>
          </li>
          <li><b>Country</b><br>
            <p>${d}</p>
          </li>
        </div>
      </ul>
      
      <div class="artist-biography">
        <h3 class="artist-biography-title">Biography</h3>
        <p class="artist-biography-desc">${l}</p>
      </div>
      <div class="artist-genres">
        ${w}
      </div>
    </div>
  `;I.innerHTML=$}function N(e=[]){if(u.innerHTML="",!e.length){u.innerHTML="<h4>-</h4>";return}const t=`
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
  ${r.intDuration?H(r.intDuration):"-"}
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
  `;u.innerHTML=t}function H(e){const t=Math.floor(e/1e3),n=Math.floor(t/60),o=t%60;return`${n}:${o.toString().padStart(2,"0")}`}function x(){s.loadMoreBtn.classList.remove("visually-hidden")}function F(){s.loadMoreBtn.classList.add("visually-hidden")}function O(){s.loader.classList.remove("visually-hidden")}function D(){s.loader.classList.add("visually-hidden")}function R(e,t){const n=typeof e=="string"?document.querySelector(e):e;if(!n)return;const o=document.createElement("div");o.className="stars";const r=Math.min(100,Math.max(0,t/5*100));o.style.setProperty("--rating-percent",`${r}%`),n.appendChild(o)}async function U(){const e=await C();s.genreMenu.innerHTML=e.map(t=>`<li data-genre="${t.genre}">${t.genre}</li>`).join("")}function _({artist:e,albums:t}){const n={...e,albumsList:t||[],genresList:e.genres||[]};P(n),N(n.albumsList),s.modal.classList.remove("hidden"),document.body.classList.add("modal-open")}document.addEventListener("click",e=>{e.target.closest(".js-modal-close")&&(s.modal.classList.add("hidden"),document.body.classList.remove("modal-open"),g())});document.addEventListener("keydown",e=>{e.key==="Escape"&&(s.modal.classList.add("hidden"),g())});s.modal.addEventListener("click",e=>{e.target===s.modal&&(s.modal.classList.add("hidden"),g())});function g(){document.removeEventListener("click",this),document.removeEventListener("keydown",this),s.modal.removeEventListener("click",this)}const G=new k(".swiper",{modules:[M,E],slidesPerView:1,spaceBetween:0,cssMode:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});c.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function V(){try{const{data:e}=await c.get("/feedbacks?limit=3&page=1"),t=e.data,n=document.getElementById("feedbacks-container");n.innerHTML="",t.forEach((o,r)=>{const a=document.createElement("div");a.classList.add("swiper-slide");const i=`raty-${r}`;a.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${i}"></div>
          <p class="feedback-text">"${o.descr}"</p>
          <p class="author-name">${o.name}</p>
        </div>
      `,n.appendChild(a),R(`#${i}`,o.rating)}),G.update()}catch(e){console.error("Error fetching feedbacks:",e)}}V();s.burger.addEventListener("click",()=>{s.navList.classList.add("is-open")});s.closeBtn.addEventListener("click",()=>{s.navList.classList.remove("is-open")});s.navLinks.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("href").substring(1),o=document.getElementById(n);if(o){const r=s.header.offsetHeight,a=o.getBoundingClientRect().top+window.pageYOffset-r;window.scrollTo({top:a,behavior:"smooth"}),s.navList.classList.contains("is-open")&&s.navList.classList.remove("is-open")}})});document.getElementById("loader");let m=1;const f=8;let h=null;async function b(){O(),F();try{const e=await q(m,f);v(e),h=Math.ceil(e.total/f)}catch(e){console.error("Failed to load artists:",e)}finally{D(),m<h&&x()}}s.loadMoreBtn.addEventListener("click",()=>{m++,b().catch(e=>{console.error("Failed to load more artists:",e)})});s.artistCardsContainer.addEventListener("click",async e=>{const t=e.target.closest(".artist-card-btn");if(!t)return;const o=t.closest(".artist-card").dataset.artist;if(!o){console.warn("Missing artist data");return}try{const r=JSON.parse(decodeURIComponent(o)),a=await j(r._id),i=await A(r._id),d={...a,genres:r.genres||[]};_({artist:d,albums:i})}catch(r){console.error("Failed to open artist modal:",r)}});b();s.toggleFiltersBtn.addEventListener("click",()=>{s.filtersContainer.classList.toggle("hidden")});s.genreButton.addEventListener("click",async()=>{s.genreMenu.classList.toggle("hidden"),s.genreMenu.innerHTML||await U()});s.genreMenu.addEventListener("click",async e=>{const t=e.target.dataset.genre;if(t)try{const n=await T(t);s.artistCardsContainer.innerHTML="",v(n),s.filtersContainer.classList.add("hidden"),n.length<8?s.loadMoreBtn.style.display="none":s.loadMoreBtn.style.display="block"}catch(n){console.error("Error fetching artists by genre:",n)}});document.addEventListener("DOMContentLoaded",()=>{s.sortingDropdown=document.querySelector("#sorting-dropdown"),s.sortingMenu=document.querySelector("#sorting-menu")});s.sortingMenu.addEventListener("click",e=>{e.target.dataset.value});
//# sourceMappingURL=index.js.map
