$("#menu li").not(".dropdown").on("click",function(){$("#menu").css("height","1px"),$("#menu").attr("aria-expanded","false"),$("#menu").toggleClass("in")}),$(".tilt h3").hide(),$(".tilt").hover(function(){$("h3",this).show()},function(){$("h3",this).hide()}),jQuery(document).ready(function(i){i("#myCarousel").carousel({interval:5e3}),i("#carousel-text").html(i("#slide-content-0").html()),i("[id^=carousel-selector-]").click(function(){var t=this.id.substr(this.id.lastIndexOf("-")+1);t=parseInt(t);i("#myCarousel").carousel(t)}),i("#myCarousel").on("slid.bs.carousel",function(t){var e=i(".item.active").data("slide-number");i("#carousel-text").html(i("#slide-content-"+e).html())})}),jQuery(document).ready(function(){$("button.toogle").click(function(){$("span.sub-text").slideToggle()})}),$(".nav li").click(function(){$(this).siblings("li").removeClass("active"),$(this).addClass("active")});

$(document).ready(function(){
	$(".leftmenu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 500);
	});
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	 
	$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});
});
