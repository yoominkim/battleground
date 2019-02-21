/*slide_banner_02.js*/

(function($) {
console.log('!!!!');
// **jquery이용하여 슬라이드 광고배너를 만들기.
// 기본 선택자 변수로 성정
 var viewOuter = $('.view_banner_outer');
 // viewOuter.animate({marginLeft:-100+'%'})
 var viewIndi = $('.view_indicator').find('li');

// step_01 인디케이터 버튼을 클릭하여 광고 이동하게 만들기(step_04에서 다시 설정)
// viewIndi.on('click', function(event) {
//   event.preventDefault();
//   var _thisI = $(this).index() ; //index() 해당 순서위치를 파악하는 기능

//   console.log(_thisI);
//   var _index = _thisI * 100;
//   viewOuter.animate({marginLeft:-_index + '%'});

// -----------------------------------

// viewIndi.children('a').on('click', function(event) {
//   event.preventDefault();
//   var _thisP = $(this).parent();
//   var _thisI = _thisP.index(); //index() 해당 순서위치를 파악하는 기능
//   console.log(_thisI);
//   var _index = _thisI * 100;

//   viewIndi.removeClass('action');
//   viewIndi.eq(_thisI).addClass('action');

//   console.log(_thisI);
//   viewOuter.animate({marginLeft:-_index + '%'});
// });





// // step_02 오른쪽 버튼을 클릭하여 오른쪽 광고로 이동하게 만들기(step_04에서 다시 설정)
// var next = $('.next_btn');
//   var slideI = 0;
// next.on('click', function(e) {
//   e.preventDefault();

//   slideI += 1;
//   var _index = slideI * 100;
//   viewOuter.animate({marginLeft:-_index + '%'});
// });

// // step_03 왼쪽 버튼을 클릭하여 이전 광고로 이동하게 만들기
// var prev = $('.prev_btn')
// prev.on('click', function(e) {
//   e.preventDefault();

//   slideI -= 1;
//   var _index = slideI * 100;
//   viewOuter.animate({marginLeft:-_index + '%'});
  // });


// step_04 해당광고의 끝으로 이동하면 버튼 사라지게 만들기
var next = $('.next_btn');
var prev = $('.prev_btn');
var _slideI = 0;
var liLeng = viewIndi.length-1; //length는 갯수를 파악하는 것, 0이 없다는 의미

next.on('click', function(e) {
  e.preventDefault();
  slideI += 1; 
  if(slideI > liLeng){ slideI = liLeng} //이미지가 없는 오른쪽으로 더 넘어가지 않도록
  var _index = slideI * 100; //%로 효과내주기위해
  viewOuter.animate({marginLeft:-_index + '%'}); //오른쪽이미지 나오게
  viewIndi.removeClass('action'); //일단 action없애기
  viewIndi.eq(slideI).addClass('action'); //slideI에 몇번재든 클릭하면 action만들어내기
});



prev.on('click', function(e) {
  e.preventDefault();
  slideI -= 1; 
  if(slideI < 0){slideI = 0; } //0보다 더 왼쪽 뒤로 가지 않도록
  var _index = slideI * 100; //아래 넘어가는 것 %로 효과내주기위해
  viewOuter.animate({marginLeft:-_index + '%'}); //왼쪽이미지 나오게
  viewIndi.removeClass('action'); //일단 action없애기
  viewIndi.eq(slideI).addClass('action'); //slideI에 몇번재든 클릭하면 action만들어내기
});



  viewIndi.children('a').on('click', function(event) {
   event.preventDefault();
   var _thisP = $(this).parent(); //a에 형제가 없으므로 부모인 li의 형제에 이름주기
   slideI = _thisP.index(); //index() 해당 순서위치를 파악하는 기능-li의 순서위치 파악 
   var _index = slideI * 100; //아래 넘어가는 것 %로 효과내주기위해
   viewOuter.animate({marginLeft:-_index + '%'}); 
   viewIndi.removeClass('action'); //일단 action없애기
   viewIndi.eq(slideI).addClass('action'); //slideI에 몇번재든 클릭하면 action만들어내기
 });
//eq는 순서를 지정해서 처리를 하게 되는 것
//index는 선택하 아이가 몇번째인지 찾아서 나에게 알려주는 것


// step_05 인디케이터와 순서값을 연동하여 처리되게 만들기 


})(jQuery);