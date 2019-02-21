// battleground_infobox2.js

(function($) {

	// infoBox02
	var infoBox02 = $('#infoBox02');
	var imgBox = $('.image_box_01');
	var mvOuter = imgBox.children('.movie_outer');
	var mv = mvOuter.children('div');
	var infoArrow = $('.arrow_box');
	var rBtn =  infoArrow.children('.next_button');
	var lBtn =  infoArrow.children('.prev_button');
	var mvLast = mv.last().clone(true);
	var num = 0;
	var infoIndi = $('.image_box_indi_01');
	var winW = $(window).width();



if(winW <= 768){
	mvOuter.prepend(mvLast);
	mv = mvOuter.children('div');
	var mvLen = mv.length;
	// console.log(mvLen);
	mvOuter.css({width: mvLen * 100 + '%', marginLeft: -100 + '%', position:'relative', left:0});
	mv.css({width: 100/ mvLen + '%'});

	var infoIndiFn = function(n, len){
		var l = len-1 || mvLen-1;
		infoIndi.text( (n + 1) + '/' + l);
		console.log('n: '+n, 'len: '+l);
	};
	
	

	lBtn.on('click', function(e) {
		e.preventDefault();
			num -= 1;
		if(num<0){
			num = mvLen - 2
			mvOuter.animate({left: 100 +'%'}, function(){
			mvOuter.css({left:num * -100 + '%'});
			infoIndiFn(num);
			});
		}else{
			mvOuter.animate({left: num * -100 + '%'});
			infoIndiFn(num);
		};
	});
		

	rBtn.on('click', function(e){
		e.preventDefault();
		num += 1;
		if(num>mvLen-2){
			mvOuter.css({left: 100 + '%' });
			num = 0;
			mvOuter.animate({left:num * -100 + '%'});
			infoIndiFn(num);
			
		}else{
			mvOuter.animate({left: num * -100 + '%'});
			infoIndiFn(num);
			
		}
	});

	}; // winW <= 768
	// infoIndiFn(0,20);



	// var Info2Fn = function(){
	// 	mvOuter.
	// };
	
		
	// 	Info2Fn();
	// 	mvOuter.css({width: 200 + '%' });
	mvLast = mv.eq(-1);

if(winW >= 769){
	infoIndiFn = function(n, len){
		var l = len;
		infoIndi.text( n + '/' + l);
		console.log('n: '+n, 'len: '+l);
	};


	mvOuter.css({width: 200 + '%' });
	mv.css({width: 16 + '%'});
mvOuter.prepend(mvLast);
	mvOuter.css({marginLeft:0});

	mv = mvOuter.children('div');
	mvWidth = mv.eq(0).width();

	mv.eq(1).addClass('active');
	lBtn.on('click', function(e){
		e.preventDefault();
		var index = $(this).index();
		mv.removeClass('active');
		mvOuter.animate({marginLeft:mvWidth}, function(){
			mvOuter.css({marginLeft:0});
		mv.eq(-1).prependTo(mvOuter);
		mv = mvOuter.children('div');
		mv.eq(1).addClass('active');
		var n = parseInt(mv.eq(1).attr('data-num'));
		infoIndiFn(n, mv.length);
		});
	});


	rBtn.on('click', function(e){
		e.preventDefault();
		mv.removeClass('active');
		mvOuter.animate({marginLeft: -mvWidth}, function(){
			mvOuter.css({marginLeft:0});
		mv.eq(0).appendTo(mvOuter);
		mv = mvOuter.children('div');
		mv.eq(1).addClass('active');
		var n = parseInt(mv.eq(1).attr('data-num'));
		infoIndiFn(n, mv.length);
		});
	});
}
	
	




})(jQuery);