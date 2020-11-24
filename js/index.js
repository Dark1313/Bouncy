(function () {
 if (typeof NodeList !== 'undefined' && NodeList.prototype && !NodeList.prototype.forEach) {
 NodeList.prototype.forEach = Array.prototype.forEach;
 }

})();

document.querySelectorAll('.portfolio-link').forEach((elem) => {
 elem.addEventListener('click', function(e) {
 e.preventDefault();
 const id = e.target.getAttribute('href').replace('#','');
 document.querySelectorAll('.portfolio-tab-row').forEach(
 (child) => child.classList.remove('show','active')
 );
 document.getElementById(id).classList.add('active');
 });
});

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false
    });
});

$(document).ready(function(){
    $('.slider-two').slick({
        dots: true,
        arrows: false,
        //verticalSwiping: true
    });
});

$(document).ready(function(){
    $('.lates-news-slider').slick({
        dots: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
    });
});

$(document).ready(function (){
    $('.header-burger').click(function(event) {
        $('.header-burger, .header-menu').toggleClass('active');
    });
});

