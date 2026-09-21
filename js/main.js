(function () {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('active');
    }, 5500);
  }

  var mapBtn = document.getElementById('mapLoad');
  var mapBox = document.getElementById('mapEmbed');
  if (mapBtn && mapBox) {
    mapBtn.addEventListener('click', function () {
      var src = mapBox.getAttribute('data-src');
      if (!src) return;
      mapBox.innerHTML = '<iframe title="Karte Nottuln" loading="lazy" src="' + src + '"></iframe>';
    });
  }

  var buttons = document.querySelectorAll('.filter-btn');
  var galleries = document.querySelectorAll('.gallery[data-category]');
  if (buttons.length && galleries.length) {
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        galleries.forEach(function (g) {
          var cat = g.getAttribute('data-category');
          var head = document.getElementById(cat);
          var show = filter === 'all' || filter === cat;
          g.style.display = show ? '' : 'none';
          if (head) head.style.display = show ? '' : 'none';
        });
      });
    });
  }

  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<img alt="Referenzfoto">';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector('img');
  document.querySelectorAll('.gallery a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      lbImg.src = a.getAttribute('href');
      lb.classList.add('open');
    });
  });
  lb.addEventListener('click', function () { lb.classList.remove('open'); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') lb.classList.remove('open');
  });
})();
