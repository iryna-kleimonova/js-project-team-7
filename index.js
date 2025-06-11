import{a as c,S as w,N as $,P as S}from"./assets/vendor-CMkGVHbY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const s={burger:document.querySelector(".js-burger"),closeBtn:document.querySelector(".js-close"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),header:document.querySelector(".header"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),toggleFiltersBtn:document.getElementById("toggle-filters"),filtersContainer:document.getElementById("filters-container"),genreButton:document.getElementById("genre-button"),genreMenu:document.getElementById("genre-menu"),sortingDropdown:document.querySelector("#sorting-dropdown"),sortingMenu:document.querySelector("#sorting-menu"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},B=new IntersectionObserver(([e])=>{e.isIntersecting&&s.footer.classList.add("footer--visible")},{threshold:.8});B.observe(s.footer);c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function M(e=1,t=8){try{const n=`https://sound-wave.b.goit.study/api/artists?page=${e}&limit=${t}`,r=await fetch(n);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(o){throw console.error("Error in fetchArtists:",o),o}}async function E(e){try{return(await c.get(`/artists/${e}`)).data}catch(t){throw console.error("Error in fetchArtistById:",t),t}}async function k(e){try{return(await c.get(`/artists/${e}/albums`)).data}catch(t){throw console.error("Error in fetchArtistsAlbumsById:",t),t}}async function j(){try{return(await c.get("/genres")).data}catch{}}async function q(e){try{return(await c.get(`/artists?genre=${e}`)).data}catch{}}const A="/js-project-team-7/assets/sprite-3VxN5qeB.svg";function p(e){const t=e.artists.map(o=>{const{_id:n,strArtist:r,strBiographyEN:a,strArtistThumb:i,genres:l}=o;return`
        <li class="artist-card" data-id="${n}">
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
              <use href="${A}#icon-caret-right"></use>
            </svg>
          </button>
        </li>`}).join("");s.artistCardsContainer.insertAdjacentHTML("beforeend",t)}const I=document.querySelector(".artists-info"),C=document.querySelector(".artists-alboms");function T(e){const{strArtist:t="-",strArtistThumb:o,intFormedYear:n,intDiedYear:r,strGender:a="-",intMembers:i,strCountry:l="-",strBiographyEN:d="-",genresList:m=[]}=e,y=n?r?`${n} - ${r}`:`${n} - present`:"-",b=m.length?m.map(L=>`<button class="genre-btn">${L}</button>`).join(""):"-",v=`
    <div>
    <div class="close-button">
      <button class="js-modal-close modal-close">
        <svg width="32" height="32">
        <use href="../images/sprite.svg#icon-menu-close"></use>
        </svg>
    </div>
      <h2 class="artist-title">${t}</h2>
    </div>
    <div class="modal-artist-info">
      <div class="artist-img-container">
        <img src="${o||""}" alt="${t}" />
      </div>
      <ul class="artist-meta-list">
        <li><b>Years active:</b> ${y}</li>
        <li><b>Sex:</b> ${a}</li>
        <li><b>Members:</b> ${i??"-"}</li>
        <li><b>Country:</b> ${l}</li>
      </ul>
      <div class="artist-genres">
        <h3>Genres</h3>
        ${b}
      </div>
      <div class="artist-biography">
        <h3>Biography</h3>
        <p>${d}</p>
      </div>
      <div class="artist-albums">
        <h3>Albums</h3>
        <div id="albums-container">Loading albums...</div> <!-- місце для альбомів -->
      </div>
    </div>`;I.innerHTML=v,s.modal.classList.remove("hidden")}function P(e=[]){const t=document.querySelector("#albums-container");if(!e.length){t.innerHTML="<p>-</p>";return}const o=e.map(n=>{const r=n.tracks&&n.tracks.length?n.tracks.map(a=>`
              <li class="track-item">
                <span class="track-name">${a.strTrack||"-"}</span>
                <span class="track-duration">${a.intDuration||"-"}</span>
                ${a.movie?`<a class="track-link" href="${a.movie}" target="_blank" rel="noopener noreferrer">
                          <svg width="24" height="24">
                            <use href="../images/sprite.svg#icon-youtube"></use>
                          </svg>
                      </a>`:'<p class="track-link empty">-</p>'}
              </li>`).join(""):"<li>-</li>";return`
        <div class="album">
          <img src="${n.albumThumb||"placeholder.jpg"}" alt="${n.strAlbum}" class="album-cover" />
          <h4>${n.strAlbum||"-"}</h4>
          <p><b>Year Released:</b> ${n.intYearReleased||"-"}</p>
          <ul class="track-list">${r}</ul>
        </div>`}).join("");C.innerHTML=o}function H(){s.loadMoreBtn.classList.remove("visually-hidden")}function x(){s.loadMoreBtn.classList.add("visually-hidden")}function D(){s.loader.classList.remove("visually-hidden")}function N(){s.loader.classList.add("visually-hidden")}function F(e,t){const o=typeof e=="string"?document.querySelector(e):e;if(!o)return;const n=document.createElement("div");n.className="stars";const r=Math.min(100,Math.max(0,t/5*100));n.style.setProperty("--rating-percent",`${r}%`),o.appendChild(n)}async function O(){const e=await j();s.genreMenu.innerHTML=e.map(t=>`<li data-genre="${t.genre}">${t.genre}</li>`).join("")}function R({artist:e,albums:t}){console.log(t);const o={...e,albumsList:t||[]};console.log("Albums:",o.albumsList),T(o),P(o.albumsList),s.modal.classList.remove("hidden")}document.addEventListener("click",e=>{e.target.closest(".js-modal-close")&&s.modal.classList.add("hidden")});const G=new w(".swiper",{modules:[$,S],slidesPerView:1,spaceBetween:0,cssMode:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});c.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function Y(){try{const{data:e}=await c.get("/feedbacks?limit=3&page=1"),t=e.data,o=document.getElementById("feedbacks-container");o.innerHTML="",t.forEach((n,r)=>{const a=document.createElement("div");a.classList.add("swiper-slide");const i=`raty-${r}`;a.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${i}"></div>
          <p class="feedback-text">"${n.descr}"</p>
          <p class="author-name">${n.name}</p>
        </div>
      `,o.appendChild(a),F(`#${i}`,n.rating)}),G.update()}catch(e){console.error("Error fetching feedbacks:",e)}}Y();s.burger.addEventListener("click",()=>{s.navList.classList.add("is-open")});s.closeBtn.addEventListener("click",()=>{s.navList.classList.remove("is-open")});s.navLinks.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=e.getAttribute("href").substring(1),n=document.getElementById(o);if(n){const r=s.header.offsetHeight,a=n.getBoundingClientRect().top+window.pageYOffset-r;window.scrollTo({top:a,behavior:"smooth"}),s.navList.classList.contains("is-open")&&s.navList.classList.remove("is-open")}})});document.getElementById("loader");let u=1;const g=8;let f=null;async function h(){D(),x();try{const e=await M(u,g);p(e),f=Math.ceil(e.total/g)}catch(e){console.error("Failed to load artists:",e)}finally{N(),u<f&&H()}}s.loadMoreBtn.addEventListener("click",()=>{u++,h().catch(e=>{console.error("Failed to load more artists:",e)})});s.artistCardsContainer.addEventListener("click",async e=>{var r;const t=e.target.closest(".artist-card-btn");if(!t)return;const o=t.closest(".artist-card"),n=(r=o==null?void 0:o.dataset)==null?void 0:r.id;if(!n){console.warn("ID not found for artist card");return}try{const a=await E(n),i=await k(n);R({artist:a,albums:i})}catch(a){console.error("Failed to open artist modal:",a)}});h();s.toggleFiltersBtn.addEventListener("click",()=>{s.filtersContainer.classList.toggle("hidden")});s.genreButton.addEventListener("click",async()=>{s.genreMenu.classList.toggle("hidden"),s.genreMenu.innerHTML||await O()});s.genreMenu.addEventListener("click",async e=>{const t=e.target.dataset.genre;if(t)try{const o=await q(t);s.artistCardsContainer.innerHTML="",p(o),s.filtersContainer.classList.add("hidden"),o.length<8?s.loadMoreBtn.style.display="none":s.loadMoreBtn.style.display="block"}catch(o){console.error("Error fetching artists by genre:",o)}});document.addEventListener("DOMContentLoaded",()=>{s.sortingDropdown=document.querySelector("#sorting-dropdown"),s.sortingMenu=document.querySelector("#sorting-menu")});s.sortingMenu.addEventListener("click",e=>{e.target.dataset.value});
//# sourceMappingURL=index.js.map
