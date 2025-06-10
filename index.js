import{a as c,S as M,N as k,P as E}from"./assets/vendor-CMkGVHbY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const r={burger:document.querySelector(".js-burger"),closeBtn:document.querySelector(".js-close"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),header:document.querySelector(".header"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),toggleFiltersBtn:document.getElementById("toggle-filters"),filtersContainer:document.getElementById("filters-container"),genreButton:document.getElementById("genre-button"),genreMenu:document.getElementById("genre-menu"),sortingDropdown:document.querySelector("#sorting-dropdown"),sortingMenu:document.querySelector("#sorting-menu"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},j=new IntersectionObserver(([e])=>{e.isIntersecting&&r.footer.classList.add("footer--visible")},{threshold:.8});j.observe(r.footer);c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function q(e=1,t=8){try{const a=`https://sound-wave.b.goit.study/api/artists?page=${e}&limit=${t}`,s=await fetch(a);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return await s.json()}catch(n){throw console.error("Error in fetchArtists:",n),n}}async function A(e){try{return(await c.get(`/artists/${e}`)).data}catch(t){throw console.error("Error in fetchArtistById:",t),t}}async function C(e){try{return(await c.get(`/artists/${e}/albums`)).data}catch(t){throw console.error("Error in fetchArtistsAlbumsById:",t),t}}async function I(){try{return(await c.get("/genres")).data}catch{}}async function T(e){try{return(await c.get(`/artists?genre=${e}`)).data}catch{}}const P="/js-project-team-7/assets/sprite-3VxN5qeB.svg";function b(e){const t=e.artists.map(n=>{const{_id:a,strArtist:s,strBiographyEN:o,strArtistThumb:i,genres:u}=n;return`
              <li class="artist-card" data-id="${a}">
              
                <img class="artist-card-img" src="${i}" alt="${s}" />
            
                <ul class="artist-card-genres">
                  ${u.map(m=>`<li>${m}</li>`).join("")}
                </ul>

                <h3 class="artist-card-name">${s}</h3>
            
                <p class="artist-card-info">
                  ${o?o.slice(0,100)+"...":"No description available"}
                </p>
            
                <button class="artist-card-btn" type="button">
                 Learn More
                 <svg class="artist-card-icon" width="24" height="24">
                 <use href="${P}#icon-caret-right"></use>
                 </svg>
                </button>
              </li>
            `}).join("");r.artistCardsContainer.insertAdjacentHTML("beforeend",t)}function x(e){console.log(e);const{strArtist:t="-",strArtistThumb:n,intFormedYear:a,intDiedYear:s,strGender:o="-",intMembers:i,strCountry:u="-",strBiographyEN:m="-",genresList:f=[],albumsList:p=[]}=e,L=a?s?`${a} - ${s}`:`${a} - present`:"-",w=f.length?f.map(l=>`<button class="genre-btn">${l}</button>`).join(""):"-",$=p.length?p.map(l=>{const S=l.tracks&&l.tracks.length?l.tracks.map(d=>console.log(d)`
                    <li class="track-item">
                      <span class="track-name">${d.trackTitle||"-"}</span>
                      <span class="track-duration">${d.trackDuration||"-"}</span>
                      ${d.youtubeLink?`<a class="track-link" href="${d.youtubeLink}" target="_blank" rel="noopener noreferrer">🔗</a>`:'<span class="track-link empty">-</span>'}
                      
                    </li>`).join(""):"<li>-</li>";return`
            <div class="album">
              <h4>${l.albumTitle||"-"}</h4>
              <ul class="track-list">${S}</ul>
            </div>`}).join(""):"-",B=`
    <div>
      <h2 class="artist-title">${t}</h2>
    </div>
    <div class="modal-artist-info">
      <div class="artist-img-container">
        <img src="${n||""}" alt="${t}" />
      </div>
      <ul class="artist-meta-list">
        <li><b>Years active:</b> ${L}</li>
        <li><b>Sex:</b> ${o}</li>
        <li><b>Members:</b> ${i??"-"}</li>
        <li><b>Country:</b> ${u}</li>
      </ul>
      <div class="artist-genres">
        <h3>Genres</h3>
        ${w}
      </div>
      <div class="artist-biography">
        <h3>Biography</h3>
        <p>${m}</p>
      </div>
      <div class="artist-albums">
        <h3>Albums</h3>
        ${$}
      </div>
    </div>`;r.modal.innerHTML=B,r.modal.classList.remove("hidden")}function N(){r.loadMoreBtn.classList.remove("visually-hidden")}function D(){r.loadMoreBtn.classList.add("visually-hidden")}function H(){r.loader.classList.remove("visually-hidden")}function F(){r.loader.classList.add("visually-hidden")}function O(e,t){const n=typeof e=="string"?document.querySelector(e):e;if(!n)return;const a=document.createElement("div");a.className="stars";const s=Math.min(100,Math.max(0,t/5*100));a.style.setProperty("--rating-percent",`${s}%`),n.appendChild(a)}async function G(){const e=await I();r.genreMenu.innerHTML=e.map(t=>`<li data-genre="${t.genre}">${t.genre}</li>`).join("")}function R({artist:e,albums:t}){const n={...e,albumsList:t||[]};console.log(n),x(n),r.modal.classList.remove("hidden")}document.addEventListener("click",e=>{e.target.closest(".js-modal-close")&&r.modal.classList.add("hidden")});const U=new M(".swiper",{modules:[k,E],slidesPerView:1,spaceBetween:0,cssMode:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!1},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});c.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function V(){try{const{data:e}=await c.get("/feedbacks?limit=3&page=1"),t=e.data,n=document.getElementById("feedbacks-container");n.innerHTML="",t.forEach((a,s)=>{const o=document.createElement("div");o.classList.add("swiper-slide");const i=`raty-${s}`;o.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${i}"></div>
          <p class="feedback-text">"${a.descr}"</p>
          <p class="author-name">${a.name}</p>
        </div>
      `,n.appendChild(o),O(`#${i}`,a.rating)}),U.update()}catch(e){console.error("Error fetching feedbacks:",e)}}V();r.burger.addEventListener("click",()=>{r.navList.classList.add("is-open")});r.closeBtn.addEventListener("click",()=>{r.navList.classList.remove("is-open")});r.navLinks.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("href").substring(1),a=document.getElementById(n);if(a){const s=r.header.offsetHeight,o=a.getBoundingClientRect().top+window.pageYOffset-s;window.scrollTo({top:o,behavior:"smooth"}),r.navList.classList.contains("is-open")&&r.navList.classList.remove("is-open")}})});document.getElementById("loader");let g=1;const y=8;let h=null;async function v(){H(),D();try{const e=await q(g,y);b(e),h=Math.ceil(e.total/y)}catch(e){console.error("Failed to load artists:",e)}finally{F(),g<h&&N()}}r.loadMoreBtn.addEventListener("click",()=>{g++,v().catch(e=>{console.error("Failed to load more artists:",e)})});r.artistCardsContainer.addEventListener("click",async e=>{var s;const t=e.target.closest(".artist-card-btn");if(!t)return;const n=t.closest(".artist-card"),a=(s=n==null?void 0:n.dataset)==null?void 0:s.id;if(!a){console.warn("ID not found for artist card");return}try{const o=await A(a),i=await C(a);R({artist:o,albums:i})}catch(o){console.error("Failed to open artist modal:",o)}});v();r.toggleFiltersBtn.addEventListener("click",()=>{r.filtersContainer.classList.toggle("hidden")});r.genreButton.addEventListener("click",async()=>{r.genreMenu.classList.toggle("hidden"),r.genreMenu.innerHTML||await G()});r.genreMenu.addEventListener("click",async e=>{const t=e.target.dataset.genre;if(t)try{const n=await T(t);r.artistCardsContainer.innerHTML="",b(n),r.filtersContainer.classList.add("hidden"),n.length<8?r.loadMoreBtn.style.display="none":r.loadMoreBtn.style.display="block"}catch(n){console.error("Error fetching artists by genre:",n)}});document.addEventListener("DOMContentLoaded",()=>{r.sortingDropdown=document.querySelector("#sorting-dropdown"),r.sortingMenu=document.querySelector("#sorting-menu")});r.sortingMenu.addEventListener("click",e=>{e.target.dataset.value});
//# sourceMappingURL=index.js.map
