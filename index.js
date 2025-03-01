import{a as v,i as d,S as _}from"./assets/vendor-D3PmPE7A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const b="48882544-91bb6160508b612126ca5843a",w="https://pixabay.com/api/",S=40;async function g(t,r=1){try{return(await v.get(w,{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:S}})).data}catch{return d.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),{hits:[],totalHits:0}}}function P(t){const{webformatURL:r,largeImageURL:i,tags:c,likes:e,views:s,comments:o,downloads:L}=t;return`<li class="gallery__item">
          <a href="${i}" class="gallery__link"> 
            <img src="${r}" alt="${c}" class="gallery__image" />
          </a>
          <div class="stats">
            <div class="stats-item">
              <p class="stats-text">Likes</p>
              <p class="stats-number">${e}</p>
            </div>
            <div class="stats-item">
              <p class="stats-text">Views</p>     
              <p class="stats-number">${s}</p>
            </div>
            <div class="stats-item">
              <p class="stats-text">Comments</p>  
              <p class="stats-number">${o}</p>
            </div>
            <div class="stats-item">
              <p class="stats-text">Downloads</p>
              <p class="stats-number">${L}</p>
            </div>
          </div>
        </li>`}function h(t){return t.map(P).join("")}const f=new _(".gallery__list a",{captionsData:"alt",captionDelay:250}),R=document.querySelector(".form__container"),u=document.querySelector(".gallery__list"),m=document.querySelector(".loader"),a=document.querySelector(".load-more");let l="",n=1;const y=40;let p=0;R.addEventListener("submit",async t=>{if(t.preventDefault(),l=t.target.elements.search.value.trim(),!l){d.warning({message:"Please enter a search term!",position:"topRight"});return}n=1,u.innerHTML="",a.classList.add("hidden"),m.classList.remove("hidden");const r=await g(l,n);if(m.classList.add("hidden"),r.hits.length===0){d.error({message:"Sorry, there are no images matching your search query!",position:"topRight"});return}p=r.totalHits,u.innerHTML=h(r.hits),f.refresh(),p>y&&a.classList.remove("hidden")});a.addEventListener("click",async()=>{n+=1,a.classList.add("hidden"),m.classList.remove("hidden");const t=await g(l,n);m.classList.add("hidden"),u.insertAdjacentHTML("beforeend",h(t.hits)),f.refresh(),n*y>=p?(a.classList.add("hidden"),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):a.classList.remove("hidden"),q()});function q(){const t=document.querySelector(".gallery__item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
