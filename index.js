import{a as l,S as w,N as k,P as E}from"./assets/vendor-Cj1XzFCq.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const a={burger:document.querySelector(".js-burger"),closeBtn:document.querySelector(".js-close"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),header:document.querySelector(".header"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),toggleFiltersBtn:document.getElementById("toggle-filters"),filtersContainer:document.getElementById("filters-container"),genreButton:document.getElementById("genre-button"),genreMenu:document.getElementById("genre-menu"),sortingDropdown:document.querySelector("#sorting-dropdown"),sortingMenu:document.querySelector("#sorting-menu"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},B=new IntersectionObserver(([t])=>{t.isIntersecting&&a.footer.classList.add("footer--visible")},{threshold:.8});B.observe(a.footer);l.defaults.baseURL="https://sound-wave.b.goit.study/api";async function M(t=1,s=8){try{const o=`https://sound-wave.b.goit.study/api/artists?page=${t}&limit=${s}`,e=await fetch(o);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(r){throw console.error("Error in fetchArtists:",r),r}}async function j(t){try{return(await l.get(`/artists/${t}`)).data}catch(s){throw console.error("Error in fetchArtistById:",s),s}}async function q(t){try{return(await l.get(`/artists/${t}/albums`)).data.albumsList}catch(s){throw console.error("Error in fetchArtistsAlbumsById:",s),s}}const y="/js-project-team-7/assets/sprite-3VxN5qeB.svg";function A(t){const s=t.artists.map(r=>{const{_id:o,strArtist:e,strBiographyEN:n,strArtistThumb:i,genres:c}=r;return`
        <li class="artist-card" data-id="${o}" data-artist="${encodeURIComponent(JSON.stringify(r))}">
          <img class="artist-card-img" src="${i}" alt="${e}" />

          <ul class="artist-card-genres">
            ${c.map(d=>`<li>${d}</li>`).join("")}
          </ul>

          <h3 class="artist-card-name">${e}</h3>

          <p class="artist-card-info">
            ${n?n.slice(0,100)+"...":"No description available"}
          </p>

          <button class="artist-card-btn" type="button">
            Learn More
            <svg class="artist-card-icon" width="24" height="24">
              <use href="${y}#icon-caret-right"></use>
            </svg>
          </button>
        </li>`}).join("");a.artistCardsContainer.insertAdjacentHTML("beforeend",s)}const I=document.querySelector(".artists-info"),u=document.querySelector(".artists-albums");function C(t){const{strArtist:s="-",strArtistThumb:r,intFormedYear:o,intDiedYear:e,strGender:n="-",intMembers:i,strCountry:c="-",strBiographyEN:d="-",genresList:f=[]}=t,v=o?e?`${o} - ${e}`:`${o} - present`:"-",L=f.length?f.map(S=>`<p class="genre-item">${S}</p>`).join(""):"-",$=`
    <h2 class="artist-title">${s}</h2>
    <div class="modal-artist-info">
      <div class="artist-img-container">
        <img src="${r||""}" alt="${s}" />
      </div>
      <ul class="artist-meta-list"> 
          <li class="artist-meta-list-item"><b>Years active</b><br>
            <p>${v}</p>
          </li>
          <li class="artist-meta-list-item"><b>Sex</b><br>
            <p>${n}</p>
          </li>
          <li class="artist-meta-list-item"><b>Members</b><br>
            <p>${i??"-"}</p>
          </li>
          <li class="artist-meta-list-item"<b>Country</b><br>
            <p>${c}</p>
          </li>
      </ul>
      
      <div class="artist-biography">
        <h3 class="artist-biography-title">Biography</h3>
        <p class="artist-biography-desc">${d}</p>
      </div>
      <div class="artist-genres">
        ${L}
      </div>
    </div>
  `;I.innerHTML=$}function T(t=[]){if(u.innerHTML="",!t.length){u.innerHTML="<h4>-</h4>";return}const s=`
    <h2 class="albums-title">Albums</h2>
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
  ${e.intDuration?P(e.intDuration):"-"}
</span>
                  ${e.movie?`<a class="track-link" href="${e.movie}" target="_blank" rel="noopener noreferrer">
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
  `;u.innerHTML=s}function P(t){const s=Math.floor(t/1e3),r=Math.floor(s/60),o=s%60;return`${r}:${o.toString().padStart(2,"0")}`}function N(){a.loadMoreBtn.classList.remove("visually-hidden")}function x(){a.loadMoreBtn.classList.add("visually-hidden")}function F(){a.loader.classList.remove("visually-hidden")}function H(){a.loader.classList.add("visually-hidden")}function O(t,s){const r=typeof t=="string"?document.querySelector(t):t;if(!r)return;const o=document.createElement("div");o.className="stars";const e=Math.min(100,Math.max(0,s/5*100));o.style.setProperty("--rating-percent",`${e}%`),r.appendChild(o)}function D({artist:t,albums:s}){const r={...t,albumsList:s||[],genresList:t.genres||[]};C(r),T(r.albumsList),a.modal.classList.remove("hidden"),document.body.classList.add("modal-open")}document.addEventListener("click",t=>{t.target.closest(".js-modal-close")&&(a.modal.classList.add("hidden"),document.body.classList.remove("modal-open"),p())});document.addEventListener("keydown",t=>{t.key==="Escape"&&(a.modal.classList.add("hidden"),document.body.classList.remove("modal-open"),p())});a.modal.addEventListener("click",t=>{t.target===a.modal&&(a.modal.classList.add("hidden"),document.body.classList.remove("modal-open"),p())});function p(){document.removeEventListener("click",this),document.removeEventListener("keydown",this),a.modal.removeEventListener("click",this)}const R=new w(".swiper",{modules:[k,E],slidesPerView:1,spaceBetween:0,cssMode:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});l.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function U(){try{const{data:t}=await l.get("/feedbacks?limit=3&page=1"),s=t.data,r=document.getElementById("feedbacks-container");r.innerHTML="",s.forEach((o,e)=>{const n=document.createElement("div");n.classList.add("swiper-slide");const i=`raty-${e}`;n.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${i}"></div>
          <p class="feedback-text">"${o.descr}"</p>
          <p class="author-name">${o.name}</p>
        </div>
      `,r.appendChild(n),O(`#${i}`,o.rating)}),R.update()}catch(t){console.error("Error fetching feedbacks:",t)}}U();a.burger.addEventListener("click",()=>{a.navList.classList.add("is-open")});a.closeBtn.addEventListener("click",()=>{a.navList.classList.remove("is-open")});a.navLinks.forEach(t=>{t.addEventListener("click",s=>{s.preventDefault();const r=t.getAttribute("href").substring(1),o=document.getElementById(r);if(o){const e=a.header.offsetHeight,n=o.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:n,behavior:"smooth"}),a.navList.classList.contains("is-open")&&a.navList.classList.remove("is-open")}})});document.getElementById("loader");let m=1;const g=8;let h=null;async function b(){F(),x();try{const t=await M(m,g);A(t),h=Math.ceil(t.total/g)}catch(t){console.error("Failed to load artists:",t)}finally{H(),m<h&&N()}}a.loadMoreBtn.addEventListener("click",()=>{m++,b().catch(t=>{console.error("Failed to load more artists:",t)})});a.artistCardsContainer.addEventListener("click",async t=>{const s=t.target.closest(".artist-card-btn");if(!s)return;const o=s.closest(".artist-card").dataset.artist;if(!o){console.warn("Missing artist data");return}try{const e=JSON.parse(decodeURIComponent(o)),n=await j(e._id),i=await q(e._id),c={...n,genres:e.genres||[]};D({artist:c,albums:i})}catch(e){console.error("Failed to open artist modal:",e)}});b();
//# sourceMappingURL=index.js.map
