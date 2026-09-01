document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.getElementById('navToggle');
  var menu=document.getElementById('mobileMenu');
  if(toggle&&menu){
    toggle.addEventListener('click',function(){
      var open=menu.classList.toggle('open');
      toggle.classList.toggle('open',open);
      toggle.setAttribute('aria-expanded',open);
    });
    menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open');toggle.classList.remove('open');toggle.setAttribute('aria-expanded','false');});});
  }
  var filters=document.querySelectorAll('.filter-btn');
  var galleries=document.querySelectorAll('.gallery');
  filters.forEach(function(btn){
    btn.addEventListener('click',function(){
      filters.forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');
      var f=btn.getAttribute('data-filter');
      galleries.forEach(function(g){
        var cat=g.getAttribute('data-category');
        g.style.display=(f==='all'||cat===f)?'grid':'none';
      });
    });
  });
  var header=document.getElementById('header');
  if(header){window.addEventListener('scroll',function(){if(window.scrollY>10){header.style.boxShadow='0 4px 20px rgba(11,31,51,.12)';}else{header.style.boxShadow='0 2px 12px rgba(11,31,51,.04)';}});}
});