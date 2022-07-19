const navbarTop = document.getElementById("navbar_top")
const sideToggler = document.getElementById("side_toggler")
const navNavMain = document.getElementById("sidenav-main")
const navLinkText = document.querySelector("navlikn_text")

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbarTop.classList.add('fixed-top');
        document.body.style.background = 'black';
      } else {
        navbarTop.classList.remove('fixed-top');
        document.body.style.background = 'black';
      } 
  });
}); 


sideToggler.addEventListener('click', function() {
  document.getElementById('sidenav-main').style.width='5vw';
  navLinkText.style.display="none!important";
  navNavMain.style.display="none!important";
})