// battleground_infobox2.js

(function($) {

	var info3 = $('#infoBox03');
	var infobox07 = $('.info_box_07');
	var mvOuter = infobox07.find('.movie_outer')
	var infoMv = mvOuter.children('div');
	var infoMvLast = infoMv.last().clone(true);
	var num = 0;

	var leftBtn = infobox07.find('.next_button');
	var rightBtn = infobox07.find('.prev_button');

	mvOuter.prepend(infoMvLast);
	infoMv = mvOuter.children('div');
	var infoMvLen = infoMv.length;
	infobox07.css({overflow:'hidden'});
 	mvOuter.css({width: infoMvLen * 100 + '%', marginLeft: 100 + '%', position:'relative', left:num});
 	infoMv.css({width: 100 / infoMvLen + '%', float:'left'});


 	leftBtn.on('click',function(e){
 		e.preventDefault();
 		num-=1;
 		if(num<0){
 			mvOuter.animate({left: 100 + '%'}, function(){
 				num= infoMvLen-2;
 			mvOuter.css({left: num * -100 + '%'})
 			})
 		}else{
 			num = infoMvLen-2
 			mvOuter.animate({left: num * 100 + '%'})}
 	});





})(jQuery);