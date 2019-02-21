//sub1_all.js
(function($){
	var st;
	var winH = $(window).height();
	var articleBox = $('.article2_box');
	var artiOffset = articleBox.offset().top;
	var winW = $(window).width()
	var scrStart;
	var WinScroll = function(){
		st = $(window).scrollTop();

		if(st >= scrStart){
			articleBox.addClass('active');
		}else{
			articleBox.removeClass('active');
		}
	};

	

	if(winW <= 480){
		scrStart = artiOffset - (winH / 4 * 3);
	}

	if(winW >= 481 && winW < 768){
		scrStart = artiOffset - (winH / 4 * 3);
	}

	if(winW >= 769 && winW < 1366){
		scrStart = artiOffset - winH;
	}

	if(winW >= 1367){
		scrStart = artiOffset - winH;
	}




	WinScroll();

 $(window).on('scroll',WinScroll);
 $(window).on('resize',WinScroll);


	var sectionCon1 = $('.section1_con_01');
	var sectionCon2 = $('.section1_con_02');
	var conOffset = sectionCon1.offset().top;
	var sectionBtn1 = $('.section1_buttonbox_01');
	var sectionBtn2 = $('.section1_buttonbox_02');
	var sectionUp;

	var SectionFn = function(){
		st = $(window).scrollTop();
		if(st >= sectionUp){
			sectionBtn1.addClass('active');
			sectionBtn2.addClass('active');
	}else{
		sectionBtn1.removeClass('active');
		sectionBtn2.removeClass('active');}
	};

	if(winW >= 769 && winW < 1366){
		sectionUp = conOffset - (winH / 5);
	}
	if(winW >= 1367){
		sectionUp = conOffset - (winH / 9);
	}

	SectionFn();

	$(window).on('scroll',SectionFn);
	$(window).on('resize',SectionFn);
	

})(jQuery);