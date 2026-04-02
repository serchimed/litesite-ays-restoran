(function(){
  var els = document.querySelectorAll('ul.prd li, .pdt, details, article');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function(e){ e.classList.add('visible'); });
    return;
  }
  els.forEach(function(e){ e.classList.add('reveal'); });
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('visible'); io.unobserve(en.target); }
    });
  }, { threshold: 0.08 });
  els.forEach(function(e){ io.observe(e); });
})();
