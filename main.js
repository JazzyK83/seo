!function(){"use strict";let e=(e,t=!1)=>(e=e.trim(),t)?[...document.querySelectorAll(e)]:document.querySelector(e),t=(t,s,l,a=!1)=>{let i=e(s,a);i&&(a?i.forEach(e=>e.addEventListener(t,l)):i.addEventListener(t,l))},s=(e,t)=>{e.addEventListener("scroll",t)},l=e("#navbar .scrollto",!0),a=()=>{let t=window.scrollY+200;l.forEach(s=>{if(!s.hash)return;let l=e(s.hash);l&&(t>=l.offsetTop&&t<=l.offsetTop+l.offsetHeight?s.classList.add("active"):s.classList.remove("active"))})};window.addEventListener("load",a),s(document,a);let i=t=>{let s=e("#header"),l=s.offsetHeight;s.classList.contains("header-scrolled")||(l-=20);let a=e(t).offsetTop;window.scrollTo({top:a-l,behavior:"smooth"})},o=e("#header");if(o){let n=()=>{window.scrollY>100?o.classList.add("header-scrolled"):o.classList.remove("header-scrolled")};window.addEventListener("load",n),s(document,n)}let r=e(".back-to-top");if(r){let c=()=>{window.scrollY>100?r.classList.add("active"):r.classList.remove("active")};window.addEventListener("load",c),s(document,c)}t("click",".mobile-nav-toggle",function(t){e("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}),t("click",".navbar .dropdown > a",function(t){e("#navbar").classList.contains("navbar-mobile")&&(t.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))},!0),t("click",".scrollto",function(t){if(e(this.hash)){t.preventDefault();let s=e("#navbar");if(s.classList.contains("navbar-mobile")){s.classList.remove("navbar-mobile");let l=e(".mobile-nav-toggle");l.classList.toggle("bi-list"),l.classList.toggle("bi-x")}i(this.hash)}},!0),window.addEventListener("load",()=>{window.location.hash&&e(window.location.hash)&&i(window.location.hash)});let d=e("#preloader");d&&window.addEventListener("load",()=>{d.remove()}),GLightbox({selector:".glightbox"}),GLightbox({selector:".gallery-lightbox"}),new Swiper(".testimonials-slider",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),window.addEventListener("load",()=>{AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})}),new PureCounter}();