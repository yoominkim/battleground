// battleground_infobox1.js
(function($) {

	//infoBox01
	// info_dl 
	var winW = $(window).width();
	var infoDl = $('.info_dl')
	var infoDlDt = infoDl.find('dt');
	var infoDlDd = infoDl.find('dd');
	var btn = infoDlDt.find('button');
	var btnt = btn.contents();

	// console.log(btnt);
	var infoFn = function(winW){
		if (winW >= 768){
		btnt.unwrap();
		}
	};
	infoFn(winW);
	infoDlDt.css({paddingTop : 2 + '%' , boxSizing:'borderBox', fontSize:'1.2rem'});
	

	$(window).on('resize',function(){
		var nw = $(window).width();
		if (winW!==nw) {location.reload();}
		infoFn(nw);
	});






// console.log(infoDlDd);
	infoDlDt.on('click',function(){
		var index = $(this).index();
		console.log(index);
		infoDlDd.removeClass('active');
		$(this).next('dd').addClass('active');
	});

	// infoFn(winW);


	// infoDlDd.({})
	var cardScroll;
	var cardFn = function(){
		cardScroll = $(window).scrollTop();
		if(cardScroll >= 300){
			infoDlDd.addClass('card_ani');
		}else{
			infoDlDd.removeClass('card_ani');
		}
	}
	cardFn();

	$(window).on('scroll', function(){
		cardFn();
		// console.log(cardScroll);
	})


	})(jQuery);