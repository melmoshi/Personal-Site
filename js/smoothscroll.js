$(".navbar-collapse ul li a[href^='#']").on('click', function(e) {
// prevent default anchor click behavior
   e.preventDefault();
// store hash
   var hash = this.hash;
// animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top-78
     }, 300, function(){
// when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});


$(".fadeIn a[href^='#']").on('click', function(e) {
// prevent default anchor click behavior
   e.preventDefault();
// store hash
   var hash = this.hash;
// animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top-78
     }, 700, function(){
// when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});