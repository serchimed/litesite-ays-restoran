let _nav = document.querySelector("nav");
let _btn = document.getElementById("menu-btn");
let _icon = document.getElementById("menu-icon");
let _header = document.querySelector("header");

if (_btn && _nav) {
  _btn.addEventListener("click", function() {
    _nav.classList.toggle("open");
    if (_icon) {
      _icon.src = _nav.classList.contains("open") ? "/img/menu-close.png" : "/img/menu-open.png";
    }
  });
  _nav.querySelectorAll("a").forEach(function(a) {
    a.addEventListener("click", function() {
      _nav.classList.remove("open");
      if (_icon) { _icon.src = "/img/menu-open.png"; }
    });
  });
}

if (_header) {
  var _hasHero = document.querySelector(".hero");
  if (!_hasHero) {
    _header.classList.add("scrolled");
  }
  window.addEventListener("scroll", function() {
    if (!_hasHero) { return; }
    if (window.scrollY > 50) {
      _header.classList.add("scrolled");
    } else {
      _header.classList.remove("scrolled");
    }
  }, { passive: true });
}
