
/*---For Search Bar---*/

var search = document.querySelector('.search')
var searchBar = document.querySelector('.search-bar')
var searchCancel = document.querySelector('.search-cancel');

search.onclick = function(){
    searchBar.classList.add('search-bar-active')
}

searchCancel.onclick = function(){
searchBar.classList.remove('search-bar-active');
}

/*--For-make-Menu-on mobile---*/
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
});



/*---For making the animation ---*/
var hero = document.querySelector(".hero");
var headline = document.querySelector('.headline');
var img2 = document.querySelector(".container-shop");
var img3 = document.querySelector(".s");

var tl = new TimelineMax();

tl.fromTo(hero,1, {height: "10%"}, {height: "65%", ease: Power2.easeInOut},)
.fromTo(hero,1, {width: '100%'}, {width: '90%', ease: Power2.easeInOut })
.fromTo(headline,1, {opacity:0, y:-70}, {opacity:1, y:-30}, "-=1")
.fromTo(img2,1, {opacity:0, x:-90}, {opacity:1, x:0}, "-=0.1")
.fromTo(img3,1, {opacity:0, x:90}, {opacity:1, x:0}, "-=0.1")


/*---For changing the image in the frame  ---*/

function ChangeImage(img) {
  $("#changedPicture").attr("src", img);
}



