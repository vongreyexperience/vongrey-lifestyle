
document.addEventListener('DOMContentLoaded', function(){
  var els = document.querySelectorAll('.reveal');
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold:0.12});
  els.forEach(function(el){ obs.observe(el); });
});
