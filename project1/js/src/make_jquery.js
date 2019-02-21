//make_jquery.js


(function($){
  $('body').prepend('<div id="wrap"></div>');
  $('#wrap').append('<header id="headBox"></header>');
  $('#wrap').append('<section id="viewBox"></section>');
  $('#wrap').append('<article id="newsBox"></article>');
  $('#wrap').append('<article id="conBox"></article>');
  $('#wrap').append('<footer id="footBox"></footer>');

  var headBox = $('#headBox');
  
  headBox.css({width:'100%', height:'31.25rem', backgroundColor:'#a7a'});
  headBox.prepend('<h1><a href="../../index.html">index page 이동</a></h1>');
  headBox.children('h1').css({backgroundColor:'#ccf'});
  headBox.append('<nav id="gnb"></nav>');
  headBox.children('nav').prepend('<h2 class="hidden"><span>global navigation</span></h2>');

  var nav = $('#gnb');
  nav.css({width:'10rem', height:'10rem', backgroundColor:'#aac'});
  nav.append('<ul></ul>');
  for(var i=0; i < 5 ; i+=1 ){
   $(nav.children('ul')).append('<li><a href="#">link_name_0'+ [i+1] +'</a></li>');
   };

  var navUl = $(nav.children('ul'));
  var navLi = $(nav.find('li'));
  navUl.css({width:'100%', height:'10rem', backgroundColor:'#fac',});
  navLi.css({width:'100%', height:'20%', backgroundColor:'#aff'});

 //===========#headBox end

  var viewBox = $('#viewBox');
  viewBox.css({width:'100%', height:'31.25rem', backgroundColor:'#ada'});
  viewBox.prepend('<h2>viewBox</h2>');
  viewBox.append('<div class="view_btn"><ul class="view_indi_btn"></ul></div>')
  var viewIndi = $(viewBox.children('.view_btn'));
  var viewUl = $(viewBox.find('.view_indi_btn'));
  for(var i=0; i < 4; i+=1 ){
    $(viewUl.append('<li><a href="#link_0'+ [i+1] +'">narr_0'+ [i+1] +'</a></li>'))
  };


  viewBox.append('<div class="view_slide_btn"></div>');
  var viewSlide = $('.view_slide_btn');
  viewSlide.prepend('<button type="button">다음내용 보기</button>');
  viewSlide.children('button').after('<button type="button">이전내용 보기</button>')

  viewBox.append('<div class="view_banner"></div>');
  var viewBanner = $('.view_banner');


  for(var i=0; i < 4; i+=1 ){
  viewBanner.append('<div id="link_0'+ [i+1] +'"><h3>광고내용제목_0'+ [i+1] +'</h3><p>광고설명_0'+ [i+1] +'</p><div class="view_link"><a href="http://link_0'+ [i+1] +'">자세히보기</a></div></div>');
 };


 //========#viewBox end

 
 var newsBox = $('#newsBox');
 newsBox.css({width:'100%', height:'31.25rem', backgroundColor:'#ddc'});
 newsBox.prepend('<h2>newsBox</h2>');
 newsBox.children('h2').after('<div class="news_outer"></div>');
 var newsOuter = (newsBox.find('.news_outer'));
 // newsOuter.css({width:});







})(jQuery);