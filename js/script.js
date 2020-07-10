function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});

$(document).ready(function() {
	$('.language__ru').mouseover(function() {$('.language__eng').toggleClass('disactive')});
	$('.language__ru').mouseleave(function() {$('.language__eng').toggleClass('disactive')});
	$('.language__eng').mouseover(function() {$('.language__ru').toggleClass("disactive")});
	$('.language__eng').mouseleave(function() {$('.language__ru').toggleClass("disactive")});
});

// 
// 
// 

$(document).ready(function() {
	$('.menu').click(function() {
		$(this).toggleClass("burgerDisactive")
		$('.close').toggleClass("burgerDisactive")
		$('.close').css('position', 'fixed')
		$('.burger__menu').toggleClass("burgerActive")
	});
	$('.close').click(function() {
		$('.menu').toggleClass("burgerDisactive")
		$(this).toggleClass("burgerDisactive")
		$('.burger__menu').toggleClass("burgerActive")
	});
});

let menu = document.querySelector('.menu');
let close = document.querySelector('.close');
let burgerMenu = document.querySelector('.burger__menu');

function burgerClose() {
	menu.classList.toggle("burgerDisactive");
	close.classList.toggle("burgerDisactive");
	burgerMenu.classList.toggle("burgerActive");
}

let bLink1 = document.querySelector('.burger__link_1');
let bLink2 = document.querySelector('.burger__link_2');
let bLink3 = document.querySelector('.burger__link_3');
let bLink4 = document.querySelector('.burger__link_4');
let bLink5 = document.querySelector('.burger__link_5');

bLink1.addEventListener("click", function() {burgerClose()});
bLink2.addEventListener("click", function() {burgerClose()});
bLink3.addEventListener("click", function() {burgerClose()});
bLink4.addEventListener("click", function() {burgerClose()});
bLink5.addEventListener("click", function() {burgerClose()});