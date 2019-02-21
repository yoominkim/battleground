//sub2_all.js

(function($){
	var article2 = $('.article2_conbox');
	var conboxDt = article2.children('dt');
	var conboxDd = article2.children('dd');
	var conTitle = conboxDt.children('button');
	var index;

	conTitle.on('click', function(e){
		e.preventDefault();
		var active = $(this).parents('dt')
		active.addClass('active');
		active.siblings('dt').removeClass('active');
		active.next('dd').slideDown();
		active.next('dd').siblings('dd').slideUp();
	});

console.log(index);

})(jQuery);