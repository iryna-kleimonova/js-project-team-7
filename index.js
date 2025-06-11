import{a as c,S as $,N as B,P as M}from"./assets/vendor-Cj1XzFCq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const n={burger:document.querySelector(".js-burger"),closeBtn:document.querySelector(".js-close"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),header:document.querySelector(".header"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),toggleFiltersBtn:document.getElementById("toggle-filters"),filtersContainer:document.getElementById("filters-container"),genreButton:document.getElementById("genre-button"),genreMenu:document.getElementById("genre-menu"),sortingDropdown:document.querySelector("#sorting-dropdown"),sortingMenu:document.querySelector("#sorting-menu"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},S=new IntersectionObserver(([e])=>{e.isIntersecting&&n.footer.classList.add("footer--visible")},{threshold:.8});S.observe(n.footer);c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function E(e=1,t=8){try{const o=`https://sound-wave.b.goit.study/api/artists?page=${e}&limit=${t}`,r=await fetch(o);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(s){throw console.error("Error in fetchArtists:",s),s}}async function k(e){try{return(await c.get(`/artists/${e}`)).data}catch(t){throw console.error("Error in fetchArtistById:",t),t}}async function j(e){try{return(await c.get(`/artists/${e}/albums`)).data.albumsList}catch(t){throw console.error("Error in fetchArtistsAlbumsById:",t),t}}async function q(){try{return(await c.get("/genres")).data}catch{}}async function A(e){try{return(await c.get(`/artists?genre=${e}`)).data}catch{}}const I="/js-project-team-7/assets/sprite-3VxN5qeB.svg";function h(e){const t=e.artists.map(s=>{const{_id:o,strArtist:r,strBiographyEN:a,strArtistThumb:i,genres:l}=s;return`
        <li class="artist-card" data-id="${o}">
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
              <use href="${I}#icon-caret-right"></use>
            </svg>
          </button>
        </li>`}).join("");n.artistCardsContainer.insertAdjacentHTML("beforeend",t)}const T=document.querySelector(".artists-info"),u=document.querySelector(".artists-albums");function C(e){const{strArtist:t="-",strArtistThumb:s,intFormedYear:o,intDiedYear:r,strGender:a="-",intMembers:i,strCountry:l="-",strBiographyEN:d="-",genresList:g=[]}=e,b=o?r?`${o} - ${r}`:`${o} - present`:"-",v=g.length?g.map(w=>`<button class="genre-btn">${w}</button>`).join(""):"-",L=`
    <div class="close-button">
      <button class="js-modal-close modal-close">
        <svg width="32" height="32">
          <use href="../images/sprite.svg#icon-menu-close"></use>
        </svg>
      </button>
    </div>
    <h2 class="artist-title">${t}</h2>
    <div class="modal-artist-info">
      <div class="artist-img-container">
        <img src="${s||""}" alt="${t}" />
      </div>
      <ul class="artist-meta-list">
        <li><b>Years active:</b> ${b}</li>
        <li><b>Sex:</b> ${a}</li>
        <li><b>Members:</b> ${i??"-"}</li>
        <li><b>Country:</b> ${l}</li>
      </ul>
      <div class="artist-genres">
        <h3>Genres</h3>
        ${v}
      </div>
      <div class="artist-biography">
        <h3>Biography</h3>
        <p>${d}</p>
      </div>
    </div>
  `;T.innerHTML=L}n.modal.classList.remove("hidden");function P(e=[]){if(u.innerHTML="",!e.length){u.innerHTML="<p>-</p>";return}const t=e.map(s=>{const o=s.tracks&&s.tracks.length?s.tracks.map(r=>`
                <li class="track-item">
                  <span class="track-name">${r.strTrack||"-"}</span>
                  <span class="track-duration">${r.intDuration||"-"}</span>
                  ${r.movie?`<a class="track-link" href="${r.movie}" target="_blank" rel="noopener noreferrer">
                          <svg width="24" height="24">
                            <use href="../images/sprite.svg#icon-youtube"></use>
                          </svg>
                        </a>`:'<p class="track-link empty">-</p>'}
                </li>`).join(""):"<li>-</li>";return`
        <div class="album">
          <img src="${s.albumThumb||"placeholder.jpg"}" alt="${s.strAlbum}" class="album-cover" />
          <h4>${s.strAlbum||"-"}</h4>
          <p><b>Year Released:</b> ${s.intYearReleased||"-"}</p>
          <ul class="track-list">${o}</ul>
        </div>`}).join("");u.innerHTML=t}function H(){n.loadMoreBtn.classList.remove("visually-hidden")}function x(){n.loadMoreBtn.classList.add("visually-hidden")}function D(){n.loader.classList.remove("visually-hidden")}function N(){n.loader.classList.add("visually-hidden")}function F(e,t){const s=typeof e=="string"?document.querySelector(e):e;if(!s)return;const o=document.createElement("div");o.className="stars";const r=Math.min(100,Math.max(0,t/5*100));o.style.setProperty("--rating-percent",`${r}%`),s.appendChild(o)}async function O(){const e=await q();n.genreMenu.innerHTML=e.map(t=>`<li data-genre="${t.genre}">${t.genre}</li>`).join("")}function R({artist:e,albums:t}){console.log(t);const s={...e,albumsList:t||[]};console.log("Albums:",s.albumsList),C(s),P(s.albumsList),n.modal.classList.remove("hidden")}document.addEventListener("click",e=>{e.target.closest(".js-modal-close")&&n.modal.classList.add("hidden")});const G=new $(".swiper",{modules:[B,M],slidesPerView:1,spaceBetween:0,cssMode:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});c.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function Y(){try{const{data:e}=await c.get("/feedbacks?limit=3&page=1"),t=e.data,s=document.getElementById("feedbacks-container");s.innerHTML="",t.forEach((o,r)=>{const a=document.createElement("div");a.classList.add("swiper-slide");const i=`raty-${r}`;a.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${i}"></div>
          <p class="feedback-text">"${o.descr}"</p>
          <p class="author-name">${o.name}</p>
        </div>
      `,s.appendChild(a),F(`#${i}`,o.rating)}),G.update()}catch(e){console.error("Error fetching feedbacks:",e)}}Y();n.burger.addEventListener("click",()=>{n.navList.classList.add("is-open")});n.closeBtn.addEventListener("click",()=>{n.navList.classList.remove("is-open")});n.navLinks.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const s=e.getAttribute("href").substring(1),o=document.getElementById(s);if(o){const r=n.header.offsetHeight,a=o.getBoundingClientRect().top+window.pageYOffset-r;window.scrollTo({top:a,behavior:"smooth"}),n.navList.classList.contains("is-open")&&n.navList.classList.remove("is-open")}})});document.getElementById("loader");let m=1;const f=8;let p=null;async function y(){D(),x();try{const e=await E(m,f);h(e),p=Math.ceil(e.total/f)}catch(e){console.error("Failed to load artists:",e)}finally{N(),m<p&&H()}}n.loadMoreBtn.addEventListener("click",()=>{m++,y().catch(e=>{console.error("Failed to load more artists:",e)})});n.artistCardsContainer.addEventListener("click",async e=>{var r;const t=e.target.closest(".artist-card-btn");if(!t)return;const s=t.closest(".artist-card"),o=(r=s==null?void 0:s.dataset)==null?void 0:r.id;if(!o){console.warn("ID not found for artist card");return}try{const a=await k(o),i=await j(o);R({artist:a,albums:i})}catch(a){console.error("Failed to open artist modal:",a)}});y();n.toggleFiltersBtn.addEventListener("click",()=>{n.filtersContainer.classList.toggle("hidden")});n.genreButton.addEventListener("click",async()=>{n.genreMenu.classList.toggle("hidden"),n.genreMenu.innerHTML||await O()});n.genreMenu.addEventListener("click",async e=>{const t=e.target.dataset.genre;if(t)try{const s=await A(t);n.artistCardsContainer.innerHTML="",h(s),n.filtersContainer.classList.add("hidden"),s.length<8?n.loadMoreBtn.style.display="none":n.loadMoreBtn.style.display="block"}catch(s){console.error("Error fetching artists by genre:",s)}});document.addEventListener("DOMContentLoaded",()=>{n.sortingDropdown=document.querySelector("#sorting-dropdown"),n.sortingMenu=document.querySelector("#sorting-menu")});n.sortingMenu.addEventListener("click",e=>{e.target.dataset.value});
//# sourceMappingURL=index.js.map
