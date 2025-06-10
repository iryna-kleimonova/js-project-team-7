import{a as d,S,N as j,P as B}from"./assets/vendor-CMkGVHbY.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const n={burger:document.querySelector(".js-burger"),closeBtn:document.querySelector(".js-close"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),header:document.querySelector(".header"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},E=new IntersectionObserver(([t])=>{t.isIntersecting&&n.footer.classList.add("footer--visible")},{threshold:.8});E.observe(n.footer);d.defaults.baseURL="https://sound-wave.b.goit.study/api";async function q(t=1,s=8){try{const o=`https://sound-wave.b.goit.study/api/artists?page=${t}&limit=${s}`,e=await fetch(o);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(a){throw console.error("Error in fetchArtists:",a),a}}async function A(t){try{return(await d.get(`/artists/${t}`)).data}catch(s){throw console.error("Error in fetchArtistById:",s),s}}async function M(t){try{return(await d.get(`/artists/${t}/albums`)).data}catch(s){throw console.error("Error in fetchArtistsAlbumsById:",s),s}}const I="/js-project-team-7/assets/sprite-CtTkG4GV.svg";function C(t){const s=t.artists.map(a=>{const{_id:o,strArtist:e,strBiographyEN:r,strArtistThumb:i,genres:u}=a;return`
              <li class="artist-card" data-id="${o}">
              
                <img class="artist-card-img" src="${i}" alt="${e}" />
            
                <ul class="artist-card-genres">
                  ${u.map(m=>`<li>${m}</li>`).join("")}
                </ul>

                <h3 class="artist-card-name">${e}</h3>
            
                <p class="artist-card-info">
                  ${r?r.slice(0,100)+"...":"No description available"}
                </p>
            
                <button class="artist-card-btn" type="button">
                 Learn More
                 <svg class="artist-card-icon" width="24" height="24">
                 <use href="${I}#icon-caret-right"></use>
                 </svg>
                </button>
              </li>
            `}).join("");n.artistCardsContainer.insertAdjacentHTML("beforeend",s)}function P(t){console.log(t);const{strArtist:s="-",strArtistThumb:a,intFormedYear:o,intDiedYear:e,strGender:r="-",intMembers:i,strCountry:u="-",strBiographyEN:m="-",genresList:p=[],albumsList:h=[]}=t,v=o?e?`${o} - ${e}`:`${o} - present`:"-",L=p.length?p.map(c=>`<button class="genre-btn">${c}</button>`).join(""):"-",$=h.length?h.map(c=>{const k=c.tracks&&c.tracks.length?c.tracks.map(l=>console.log(l)`
                    <li class="track-item">
                      <span class="track-name">${l.trackTitle||"-"}</span>
                      <span class="track-duration">${l.trackDuration||"-"}</span>
                      ${l.youtubeLink?`<a class="track-link" href="${l.youtubeLink}" target="_blank" rel="noopener noreferrer">🔗</a>`:'<span class="track-link empty">-</span>'}
                      
                    </li>`).join(""):"<li>-</li>";return`
            <div class="album">
              <h4>${c.albumTitle||"-"}</h4>
              <ul class="track-list">${k}</ul>
            </div>`}).join(""):"-",w=`
    <div>
      <h2 class="artist-title">${s}</h2>
    </div>
    <div class="modal-artist-info">
      <div class="artist-img-container">
        <img src="${a||""}" alt="${s}" />
      </div>
      <ul class="artist-meta-list">
        <li><b>Years active:</b> ${v}</li>
        <li><b>Sex:</b> ${r}</li>
        <li><b>Members:</b> ${i??"-"}</li>
        <li><b>Country:</b> ${u}</li>
      </ul>
      <div class="artist-genres">
        <h3>Genres</h3>
        ${L}
      </div>
      <div class="artist-biography">
        <h3>Biography</h3>
        <p>${m}</p>
      </div>
      <div class="artist-albums">
        <h3>Albums</h3>
        ${$}
      </div>
    </div>`;n.modal.innerHTML=w,n.modal.classList.remove("hidden")}function T(){n.loadMoreBtn.classList.remove("visually-hidden")}function x(){n.loadMoreBtn.classList.add("visually-hidden")}function N(){n.loader.classList.remove("visually-hidden")}function O(){n.loader.classList.add("visually-hidden")}function D({artist:t,albums:s}){const a={...t,albumsList:s||[]};console.log(a),P(a),n.modal.classList.remove("hidden")}document.addEventListener("click",t=>{t.target.closest(".js-modal-close")&&n.modal.classList.add("hidden")});const F=new S(".feedback-swiper",{modules:[j,B],slidesPerView:1,spaceBetween:3,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});d.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function H(){try{const{data:t}=await d.get("/feedbacks?limit=3&page=1"),s=t.data,a=document.getElementById("feedbacks-container");a.innerHTML="",s.forEach((o,e)=>{const r=document.createElement("div");r.classList.add("swiper-slide");const i=`raty-${e}`;r.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${i}"></div>
          <p class="feedback-text">"${o.descr}"</p>
          <p class="author-name">${o.name}</p>
        </div>
      `,a.appendChild(r),R(`#${i}`,o.rating)}),F.update()}catch(t){console.error("Error fetching feedbacks:",t)}}function R(t,s){const a=typeof t=="string"?document.querySelector(t):t;if(!a)return;const o=document.createElement("div");o.className="stars";const e=Math.min(100,Math.max(0,s/5*100));o.style.setProperty("--rating-percent",`${e}%`),a.appendChild(o)}H();n.burger.addEventListener("click",()=>{n.navList.classList.add("is-open")});n.closeBtn.addEventListener("click",()=>{n.navList.classList.remove("is-open")});n.navLinks.forEach(t=>{t.addEventListener("click",s=>{s.preventDefault();const a=t.getAttribute("href").substring(1),o=document.getElementById(a);if(o){const e=n.header.offsetHeight,r=o.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:r,behavior:"smooth"}),n.navList.classList.contains("is-open")&&n.navList.classList.remove("is-open")}})});document.getElementById("loader");let f=1;const y=8;let g=null;async function b(){N(),x();try{const t=await q(f,y);C(t),g=Math.ceil(t.total/y)}catch(t){console.error("Failed to load artists:",t)}finally{O(),f<g&&T()}}n.loadMoreBtn.addEventListener("click",()=>{f++,b().catch(t=>{console.error("Failed to load more artists:",t)})});n.artistCardsContainer.addEventListener("click",async t=>{var e;const s=t.target.closest(".artist-card-btn");if(!s)return;const a=s.closest(".artist-card"),o=(e=a==null?void 0:a.dataset)==null?void 0:e.id;if(!o){console.warn("ID not found for artist card");return}try{const r=await A(o),i=await M(o);D({artist:r,albums:i})}catch(r){console.error("Failed to open artist modal:",r)}});b();
//# sourceMappingURL=index.js.map
