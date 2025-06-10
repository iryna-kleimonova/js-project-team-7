import{a as d,S as k,N as q,P as B}from"./assets/vendor-CMkGVHbY.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const i={burger:document.querySelector(".js-burger"),closeBtn:document.querySelector(".js-close"),navList:document.querySelector(".js-nav-list"),navLinks:document.querySelectorAll(".nav-button"),header:document.querySelector(".header"),heroSection:document.querySelector(".js-hero"),getStartedBtn:document.querySelector(".js-hero-button"),artistCardsContainer:document.querySelector(".js-artist-list"),artistCards:document.querySelectorAll(".js-artist-card"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.getElementById("loader"),modal:document.querySelector(".js-modal"),modalCloseBtn:document.querySelector(".js-modal-close"),modalContent:document.querySelector(".js-modal-content"),modalFilters:document.querySelector(".js-modal-filters"),modalBody:document.querySelector(".js-modal-body"),aboutSection:document.querySelector(".js-about"),aboutImage:document.querySelector(".js-about-image"),aboutText:document.querySelector(".js-about-text"),testimonialsSection:document.querySelector(".js-testimonials"),testimonialsSlider:document.querySelector(".js-testimonials-slider"),testimonialPrevBtn:document.querySelector(".js-testimonials-btn-prev"),testimonialNextBtn:document.querySelector(".js-testimonials-btn-next"),footer:document.querySelector(".js-footer")},E=new IntersectionObserver(([t])=>{t.isIntersecting&&i.footer.classList.add("footer--visible")},{threshold:.8});E.observe(i.footer);d.defaults.baseURL="https://sound-wave.b.goit.study/api";async function A(t=1,s=8){try{const o=`https://sound-wave.b.goit.study/api/artists?page=${t}&limit=${s}`,e=await fetch(o);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.json()}catch(a){throw console.error("Error in fetchArtists:",a),a}}async function M(t){try{return(await d.get(`/artists/${t}`)).data}catch(s){throw console.error("Error in fetchArtistById:",s),s}}async function I(t){try{return(await d.get(`/artists/${t}/albums`)).data}catch(s){throw console.error("Error in fetchArtistsAlbumsById:",s),s}}const C="/js-project-team-7/assets/sprite-CtTkG4GV.svg";function P(t){const s=t.artists.map(a=>{const{_id:o,strArtist:e,strBiographyEN:r,strArtistThumb:n,genres:u}=a;return`
              <li class="artist-card" data-id="${o}">
              
                <img class="artist-card-img" src="${n}" alt="${e}" />
            
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
                 <use href="${C}#icon-caret-right"></use>
                 </svg>
                </button>
              </li>
            `}).join("");i.artistCardsContainer.insertAdjacentHTML("beforeend",s)}function T(t){console.log(t);const{strArtist:s="-",strArtistThumb:a,intFormedYear:o,intDiedYear:e,strGender:r="-",intMembers:n,strCountry:u="-",strBiographyEN:m="-",genresList:f=[],albumsList:y=[]}=t,L=o?e?`${o} - ${e}`:`${o} - present`:"-",$=f.length?f.map(c=>`<button class="genre-btn">${c}</button>`).join(""):"-",w=y.length?y.map(c=>{const j=c.tracks&&c.tracks.length?c.tracks.map(l=>console.log(l)`
                    <li class="track-item">
                      <span class="track-name">${l.trackTitle||"-"}</span>
                      <span class="track-duration">${l.trackDuration||"-"}</span>
                      ${l.youtubeLink?`<a class="track-link" href="${l.youtubeLink}" target="_blank" rel="noopener noreferrer">🔗</a>`:'<span class="track-link empty">-</span>'}
                      
                    </li>`).join(""):"<li>-</li>";return`
            <div class="album">
              <h4>${c.albumTitle||"-"}</h4>
              <ul class="track-list">${j}</ul>
            </div>`}).join(""):"-",S=`
    <div>
      <h2 class="artist-title">${s}</h2>
    </div>
    <div class="modal-artist-info">
      <div class="artist-img-container">
        <img src="${a||""}" alt="${s}" />
      </div>
      <ul class="artist-meta-list">
        <li><b>Years active:</b> ${L}</li>
        <li><b>Sex:</b> ${r}</li>
        <li><b>Members:</b> ${n??"-"}</li>
        <li><b>Country:</b> ${u}</li>
      </ul>
      <div class="artist-genres">
        <h3>Genres</h3>
        ${$}
      </div>
      <div class="artist-biography">
        <h3>Biography</h3>
        <p>${m}</p>
      </div>
      <div class="artist-albums">
        <h3>Albums</h3>
        ${w}
      </div>
    </div>`;i.modal.innerHTML=S,i.modal.classList.remove("hidden")}function x(){i.loadMoreBtn.classList.remove("visually-hidden")}function N(){i.loadMoreBtn.classList.add("visually-hidden")}function O(){i.loader.classList.remove("visually-hidden")}function D(){i.loader.classList.add("visually-hidden")}function F({artist:t,albums:s}){const a={...t,albumsList:s||[]};console.log(a),T(a),i.modal.classList.remove("hidden")}document.addEventListener("click",t=>{t.target.closest(".js-modal-close")&&i.modal.classList.add("hidden")});const H=new k(".feedback-swiper",{modules:[q,B],slidesPerView:1,spaceBetween:3,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:1},1024:{slidesPerView:1}}});d.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function R(){try{const{data:t}=await d.get("/feedbacks?limit=3&page=1"),s=t.data,a=document.getElementById("feedbacks-container");a.innerHTML="",s.forEach((o,e)=>{const r=document.createElement("div");r.classList.add("swiper-slide");const n=`raty-${e}`;r.innerHTML=`
        <div class="feedback-card">
          <div class="rating-star" id="${n}"></div>
          <p class="feedback-text">"${o.descr}"</p>
          <p class="author-name">${o.name}</p>
        </div>
      `,a.appendChild(r),U(`#${n}`,o.rating)}),H.update()}catch(t){console.error("Error fetching feedbacks:",t)}}function U(t,s){const a=typeof t=="string"?document.querySelector(t):t;if(!a)return;const o=document.createElement("div");o.className="stars";const e=Math.min(100,Math.max(0,s/5*100));o.style.setProperty("--rating-percent",`${e}%`),a.appendChild(o)}R();const V=document.querySelector(".js-burger"),G=document.querySelector(".js-close"),h=document.querySelector(".js-nav-list"),Y=document.querySelectorAll(".nav-button"),_=document.querySelector(".header");V.addEventListener("click",()=>{h.classList.add("is-open")});G.addEventListener("click",()=>{h.classList.remove("is-open")});Y.forEach(t=>{t.addEventListener("click",s=>{s.preventDefault();const a=t.getAttribute("href").substring(1),o=document.getElementById(a);if(o){const e=_.offsetHeight,r=o.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:r,behavior:"smooth"}),h.classList.remove("is-open")}})});document.getElementById("loader");let p=1;const b=8;let g=null;async function v(){O(),N();try{const t=await A(p,b);P(t),g=Math.ceil(t.total/b)}catch(t){console.error("Failed to load artists:",t)}finally{D(),p<g&&x()}}i.loadMoreBtn.addEventListener("click",()=>{p++,v().catch(t=>{console.error("Failed to load more artists:",t)})});i.artistCardsContainer.addEventListener("click",async t=>{var e;const s=t.target.closest(".artist-card-btn");if(!s)return;const a=s.closest(".artist-card"),o=(e=a==null?void 0:a.dataset)==null?void 0:e.id;if(!o){console.warn("ID not found for artist card");return}try{const r=await M(o),n=await I(o);F({artist:r,albums:n})}catch(r){console.error("Failed to open artist modal:",r)}});v();
//# sourceMappingURL=index.js.map
