
$('#menu li').not('.dropdown').on('click', function(){
	$('#menu').css("height", "1px");
	$('#menu').attr('aria-expanded', "false");
	$('#menu').toggleClass('in');
})



$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 10000
    })
    $('.fdi-Carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});


$('.nav li').click(function() {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
});



//updateLeftMenu();

function updateLeftMenu(){
  var leftmenu = document.getElementById('leftmenu');
  if ($(window).width() < 1195){
    leftmenu.children[0].classList.remove('affix');
  }
  else{
    leftmenu.children[0].classList.add('affix');
  }
}

//window.addEventListener("resize", updateLeftMenu);

$(document).ready(function(){$(".animscroll").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),n=$(e).offset().top;$("body,html").animate({scrollTop:n},500)}),$(window).scroll(function(){$(this).scrollTop()>100?$(".scrollup").fadeIn():$(".scrollup").fadeOut()}),$(".scrollup").click(function(){return $("html, body").animate({scrollTop:0},500),!1})});

