$(document).ready(function(){

	AOS.init();
	var list = 1;

	//      header   마우스 올렸을 때    //

	$(".shop > a").eq(0).mouseenter(function(){

			$(".sub_cv").stop().show();
			$(".h_bg").stop().show();
	});
	$(".sub_cv").mouseleave(function(){

			$(".sub_cv").stop().hide();
			$(".h_bg").stop().hide();
	});

	//      visual 슬라이더     //

	$(".prev").click(function(){

		$(".c2_right").stop().animate({"margin-left":"0"},function(){
			 $(".c2_right > li").last().prependTo(".c2_right");
				$(".c2_right").css({"margin-left":"-100%"});
		});

		if(list == 0) {

				list = 4;
		}
		else {

				list--;
		}

		$(".c2_left li").hide();
		$(".c2_left li").eq(list).show();

	});

	$(".next").click(function(){

		$(".c2_right").stop().animate({"margin-left":"-200%"},function(){
			 $(".c2_right li").eq(0).appendTo(".c2_right");
				$(".c2_right").css({"margin-left":"-100%"});
		});

		if(list == 4) {

			list = 0;
		}

		else {

			list++;
		}

		$(".c2_left li").hide();
		$(".c2_left li").eq(list).show();

	});



	//review 슬라이더
	$(".review_list").bxSlider({

		speed: 30000,
		slideMargin: 20,
		ticker: true,
		tickerHover: true,
		maxSlides: 15,
		minSlides:8,
		slideWidth: 250

	});   

	//스크롤 내렸을때 유투브 구간까지 도달하면 헤더는 디자인 변경

	$(window).scroll(function(){

		var sc_top = $(this).scrollTop();

		var cont1 = $(".cont_1").offset().top;

		if(sc_top >= cont1) {

			$("#header").addClass("on");
			$(".logo img").attr("src","image/logo_white.png");
			$(".icon li:first-child img").attr("src","image/search_white.png");
			$(".icon li:last-child img").attr("src","image/cart_white.png")
			$(".s_menu li a").addClass("on");
			$(".top").fadeIn(500);
			$(".ham_menu img").attr("src","image/ham_menu_white.png");
		}
		else {

			$("#header").removeClass("on");
			$(".logo img").attr("src","image/logo.png");
			$(".icon li:first-child img").attr("src","image/gnb_search_3.png");
			$(".icon li:last-child img").attr("src","image/gnb_cart_3.png");
			$(".s_menu li a").removeClass("on")
			$(".top").fadeOut(500);
			$(".ham_menu img").attr("src","image/ham_menu.png");
		}
	});

	//      오른쪽아래 버튼누르면 맨위로       //
	$(".top").click(function(){
		$("html,body").animate({"scrollTop":0})   

	});


	//모바일 메뉴 나오게 하기
	$(".ham_menu").click(function(){
		$(".ham_cover").addClass("on");
	});

	//모바일 매뉴 숨기기
	$(".ham_close").click(function(){
		$(".ham_cover").removeClass("on");
	});

	//쇼핑 메뉴 누르면 서브메뉴 나오게

	$(".ham_list > li > a").click(function(){

		//show() --> hide() // hide() -- > show()
		$(this).siblings(".ham_sub").slideToggle();
		$(this).parent().toggleClass("on");
	});


});
