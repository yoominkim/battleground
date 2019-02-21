// selector_01.js

(function($) {
// console.log('jquery 가 동작합니다.');
 var wrap = $('#wrap');
 var unit = 60;
 wrap.css({width:60 + 'rem',height:'auto', minHeight:30 + 'rem', backgroundColor:'#ccc', //'rdba(' + 255 + ',' + 255 + ',' + 255 + ',' + 255 + ',' + 0.5 + )'
  margin:'auto'});

 //headBox{margin:auto; width:80%; height:auto; text-align:center; background-color:#059; color:#333; padding-bottom:1rem; border-bottom:0.2rem solid #fff;}
var white = '#fff';
var solid = 'solid';
var headBox = $('#headBox');
 headBox. css({margin:'auto', width:80+ '%', height:'auto', textAlign:'center', backgroundColor:'#059', color:'#fff', paddingBottom:1 + 'rem', borderBottom: 0.2 + 'rem ' + solid + ' ' + white})

var listBox = $('#list');
var listOuter = listBox.children('ul');
var listLi = listOuter.children('li');
// var listLi = listOuter.find('li');\
var full = 100 + '%';

listBox.css({margin:'auto', width: full, height: 'auto', backgroundColor:'#acf'})
listOuter.css({width: full, height:'auto', padding:5+'rem ', boxSizing:'border-box', backgroundColor:'#fa0'})
listLi.css({width: full, height:2.5+ 'rem', textAlign : 'center',paddingTop:1+'rem', borderBottom:'0.2rem solid #333'})
// listOuter.children('li:nth-child(1)').css({backgroundColor:'#aca'});
// listOuter.children('li:nth-child(2n)').css({backgroundColor:'#fca'});
// listOuter.children('li:nth-child(3)').css({backgroundColor:'#acf'});

listOuter.children('li:nth(1)').css({backgroundColor:'#acf'});
listOuter.children('li').eq(-2).css({backgroundColor:'#aca'});
listOuter.children('li:eq(2)').css({backgroundColor:'#fca'});

var color1 = ['#fff', '#ccc', '#acf', '#f06', '#47a'];
var colorLen = color1.length;
var listLilen = listLi.length;
console.log(listLi);

var i=0;
for(; i < listLilen; i += 1){
listLi.eq(i).css({backgroundColor:color1[i]});
}

// //step01-----------------------------
// /* 처음값은 i가 0이다..*/
// for( ;
//   //*i를 4가 될 때까지 기능을 수행하려한다.;){
//   //* 어떠한 표현을 진행
//   //*i에다 1을 더해서...
// var i=0;
// for(; i<=4 ;){
//   console.log(i);
//   i+=1;
// }

// //step02-----------------------------
// for(
//   /* 처음값은 i가 0이다..*/;
//   /*i를 4가 될 때까지 기능을 수행하려한다. */;
//  /*i에다 1을 더해서...*/
//  ){
//   // 어떠한 표현을 진행
// }


// //step03-----------------------------
// var i=0;
// for(; i<=4; i+=1){
//   console.log(i);
// }
// // console.log(i); // var i값이 나온다!!
//jquery 선택자
/*
*직접 선탣하는 방법, idm class $()
      - $('div'), $('#box'), $('.box'), $('div>ul a')
*메소드를 활용하는 방법, children, find
      - $('div>ul a')일 경우
      $('div').children('ul')
      $('div').find('a')

*순서를 선택하는 방법, eq
      - $('li').eq(1) //순서는 처음이 0(css선택에서는 1부터)

*부모를 선택하는 방법, parent()
      $('#wrap').parent()

*형제를 선택하는 방법, siblings, next, prev, nextAll, preAll


*/
// $
$('li').parentsUntil('#wrap').css({height:'100rem', backgroundColor:'#f6a'})
$('li').eq(2).siblings().css({marginLeft:'3rem'})


})(jQuery);