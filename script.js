
document.addEventListener('DOMContentLoaded', function(){
  var reveals = document.querySelectorAll('.reveal');
  var obs = new IntersectionObserver(function(entries){ entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('visible'); }); }, {threshold:0.12});
  reveals.forEach(function(r){ obs.observe(r); });
});
