// battleground_main.js
(function($) {


// contentBox
var content = $('.info_box_08');
var imgBox = $('.image_box_05');
var mvOuter = imgBox.children('.movie_outer');
var mv = mvOuter.children('div');
var rBtn = imgBox.children('.arrow_box').children('.next_button');
var lBtn = imgBox.children('.arrow_box').children('.prev_button');
var mvLast = mv.last().clone(true);
var num = 0;
var infoIndi = $('.image_box_indi_02');


mvOuter.prepend(mvLast);
mv = mvOuter.children('div');
mvLen = mv.length;
console.log(mvLen);
imgBox.css({overflow:'hidden'})
mvOuter.css({width: mvLen * 100 + '%', marginLeft:-100+'%', position:'relative', left:num});
mv.css({width: 100 / mvLen + '%', float:'left'});

var infoIndiFn = function(n, len){
	var l = len-1 || mvLen-1;
	infoIndi.text(n + 1 + '/' + l);
	console.log('n: '+n, 'len: '+l);
};

rBtn.on('click',function(e){
	e.preventDefault();
	num+=1;
	if(num > mvLen-2 ){
	mvOuter.css({left: 100 + '%'});
	num = 0;
	mvOuter.animate({left: num * -100 + '%'});
	infoIndiFn(num);
	}else{
		mvOuter.animate({left: num * -100 + '%'});
		infoIndiFn(num);
	}
})

lBtn.on('click', function (e){
	e.preventDefault();
	num-=1;
	if(num < 0){
		mvOuter.animate({left: 100 + '%'}, function(){
			num = mvLen -2;
			mvOuter.css({left: num * -100 + '%'});
		infoIndiFn(num);

		})
	}else{
		mvOuter.animate({left: num * -100 + '%'});
		infoIndiFn(num);

	}
})

})(jQuery);