//sub4_all.js
(function($){
	var article = $('.article1_conbox');
	var articleDt = article.children('dt');
	var articleDd = article.children('dd');
	var articleBtn = articleDt.children('button');


	console.log(articleDt);

articleBtn.on('click', function(e){
	e.preventDefault();
	var click = $(this).parents('dt').index()/2;
	console.log(click);
	articleDt.eq(click).addClass('active');
	articleDt.eq(click).siblings('dt').removeClass('active');
	articleDd.eq(click).addClass('active');
	articleDd.eq(click).siblings('dd').removeClass('active');


});


















})(jQuery);