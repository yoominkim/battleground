// battleground_adbanner.js
(function($) {
	// header
	// adBanner
	var ad = $('#adBanner');
	var adImgUl = ad.children('.ad_imgbox');
	var adImgLi = adImgUl.children('li');
	var adImgLiLast = adImgLi.eq(-1).clone(true);
	var moreAd = ad.children('.ad_detail');
	


	adImgLi.eq(0).before(adImgLiLast);

	adImgLi = adImgUl.children('li');
	adImgLi.show();
	var showI = 0;
	var adImgLen = adImgLi.length;
	// console.log(adImgLen);
		adImgUl.css({width: adImgLen * 100 + '%', marginLeft: -100+'%', position:'relative', left: showI});
		adImgLi.css({width:100 / adImgLen + '%', float:'left'});


	var btnArea = ad.children('.arrow_box');
	var nextBtn = btnArea.children('.next_button');
	var prevBtn = btnArea.children('.prev_button');
	var SlideBanner = function(){
		adImgLi.eq(showI).addClass('active');
		adImgLi.eq(showI).siblings('li').removeClass('active');

		// adImgUl.animate({left: showI * -100 + '%'},500);
	}


	nextBtn.on('click',function(e) {
		e.preventDefault();

		if(showI >= adImgLen-2){
			// showI += 1;
			adImgUl.css({left:100+'%'});
			showI = 0;
			adImgUl.animate({left: showI * -100 + '%'},500);
		}else{
			showI += 1;
			adImgUl.stop(true,true).animate({left: showI * -100 + '%'},500);
		}
		console.log(showI);
	});


	prevBtn.on('click',function(e){
		e.preventDefault();
		if(showI <= 0){
			adImgUl.animate({left:100 +'%'},500, function(){
			showI = adImgLen-2;
			adImgUl.css({left:showI * -100 + '%'});
			})
		}else{
			showI -= 1;
			adImgUl.stop(true,true).animate({left: showI * -100 + '%'},500);

		}
	});





})(jQuery);