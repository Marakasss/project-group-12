(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s=document.querySelector(".header-burger-btn"),l=document.querySelector(".header-mobile-menu-close"),i=document.querySelector(".header-mobile-menu");let a=0,d=0;function v(){i.classList.add("is-open"),s.style.display="none",i.addEventListener("touchstart",m),i.addEventListener("touchmove",h)}function f(){i.classList.remove("is-open"),s.style.display="",i.removeEventListener("touchstart",m),i.removeEventListener("touchmove",h)}function m(o){a=o.touches[0].clientX}function h(o){d=o.touches[0].clientX,d-a>50&&f()}s&&l&&i&&(s.addEventListener("click",v),l.addEventListener("click",f));const y=document.querySelectorAll(".header-navigation-item"),L=document.querySelectorAll(".header-mobile-menu-navigation-item"),g=document.querySelectorAll(".section");function p(){let o="";g.forEach(n=>{const r=n.offsetTop,e=n.offsetHeight,t=r+e/2;t>=window.scrollY&&t<=window.scrollY+window.innerHeight&&(o=n.getAttribute("id"))});const c=(n,r)=>{n.forEach(e=>{e.getAttribute("href")===`#${o}`?e.classList.add(r):e.classList.remove(r)})};c(y,"header-navigation-item--current"),c(L,"header-mobile-menu-navigation-item--current")}window.addEventListener("scroll",p);window.addEventListener("load",p);
//# sourceMappingURL=index.js.map