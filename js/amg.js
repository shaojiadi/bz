var tabs=document.querySelectorAll("[data-toggle=tab]");
for(var tab of tabs){
  tab.onclick=function(){
    var tab=this;
    var show1=document.getElementsByClassName("show")[0];
    show1.className="";
    var uls=document.querySelectorAll("#container>ul");
    for (var ul of uls){
      
    }
    var id=tab.getAttribute("data-target")
    var ul=document.querySelector(id);
    ul.className="show menu-car-list2";
    var s=document.querySelector("#container")
    if(tab.innerHTML!=="SUV"){
      s.style.height="315px";
    }else{
      s.style.height="550px";
    }
  }
}

$('.menu-car-l1').click(function(){
  console.log($('.menu-car-l1'));
  var cl=$(this);
  cl.addClass('color-txt').siblings().removeClass('color-txt');
})
//视频播放
$('img#vio').click(function(){
  var $vio = $(this);
  $vio.hide();
  var v1 = document.getElementById('v1');
  v1.play();
})
$('img#vio2').click(function(){
  var $vio2 = $(this);
  $vio2.hide();
  var v2 = document.getElementById('v2');
  v2.play();
})
$('img#vio3').click(function(){
  var $vio3 = $(this);
  $vio3.hide();
  var v3 = document.getElementById('v3');
  v3.play();
})

/*select*/
var tabs=document.querySelectorAll("[data-toggle='TAB']");
var conten = document.querySelectorAll('[data-text="conten"]>div');
for(let i=0;i<tabs.length;i++) {
  tabs[i].addEventListener('click',function(){
    // 移除div 上的 active class
    for(var key of conten) {
      key.classList.remove('active');
    }
    // 给当前下标的div加上 active class
    conten[i].classList.add('active');
  });
}
$('.font').click(function(){
  var font=$(this);
  font.addClass('changecolor').siblings().removeClass('changecolor');
}
)
    
var tab2=document.querySelectorAll("[data-toggle='TB']");
var content = document.querySelectorAll('[data-text="content"]>div');
for(let i=0;i<tab2.length;i++) {
  tab2[i].addEventListener('click',function(){
    // 移除div 上的 active class
    for(var key of content) {
      key.classList.remove('active');
    }
    // 给当前下标的div加上 active class
    content[i].classList.add('active');
  });
}

 /*锚点*/
 var list = document.querySelector('[data-list="scroll"]');
 list.addEventListener('click',function(e){
   if(e.target.nodeName == 'A'){
     var str = e.target.innerHTML;
      switch(str){
       case '车型':
         move(1150);
         break;
       case '关于AMG':
         move(1700);
         break;
       case '体验AMG':
         move(4200);
         break;
       case 'AMG赛车活动':
         move(5100);
         break;
       case 'AMG车主俱乐部':
         move(8000);
         break;
     }
   }
 });
 function move(l){
   document.documentElement.scrollTop =l;
 }
   
/*电梯*/
window.addEventListener('scroll',function(){
  var scrollTop=this.document.body.scrollTop
    ||document.documentElement.scrollTop;
  if(scrollTop>=700){
    navs.className='fix';
  }else{
    navs.className='nav';
  }
});
$('.generic').focus(function(){
  var cl=$(this);
 // console.log(cl);
  cl.addClass('change');
})
$('.generic').blur(function(){
  var cl=$(this);
 // console.log(cl);
  cl.removeClass('change');
})




window.addEventListener('load',function(){
  var xhr=new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(xhr.readyState == 4&& xhr.status == 200){
      var result = xhr.responseText;
      result=JSON.parse(result);
      console.log(result);
      lb(result);
  }
}
xhr.open('get','/user/select',true);
xhr.send(null);
})
function lb(data){
  var lb=document.querySelector('[data-toggle=lb]');
  console.log(lb)
  var html='';
      html=`<div class='brand_container'>
      <div class='brand_content'>
          <ul>
              <li class='p1'>
                  <a href="#">
                      <img src="${data[0].imgpath}"  alt="">
                  </a>
                  <div class='carsouel-inner'>
                      <p class='carsouel-tit'>AMG驾驶学员</p>
                      <h1 class='carsouel-tra'>十分血性_满分夺冠</h1>
                      <span>即刻加入梅赛德斯-AMG战队，全速集结，驾驭非凡</span>
                      <a href="" class='more-less details'>更多详情</a>
                  </div>
              </li>
              <li class='p2'>
                  <a href="#">
                      <img src="${data[1].imgpath}" alt="">
                  </a>
                  <div class='carsouel-inner'>
                      <span>专为AMG尊贵车主打造的专属在线社区</span>
                      <a href="" class='more-less details'>更多详情</a>
                  </div>
              </li>
              <li class='p3'>
                  <a href="#">
                      <img src="${data[2].imgpath}" alt="">
                  </a>
                  <div class='carsouel-inner'>
                      <h1 class='carsouel-tra'>技惊_四座</h1>
                      <span>全新梅赛德斯-AMG GT 四门跑车，预售现已开启</span>
                      <a href="" class='more-less details'>更多详情</a>
                  </div>
              </li>
              <li class='p4'>
                  <a href="#">
                      <img src="${data[3].imgpath}" alt="">
                  </a>
                  <div class='carsouel-inner'>
                      <p class='carsouel-tit'>新一代梅赛德斯-AMG C 63</p>
                      <h1 class='carsouel-tra'>速战_速决</h1>
                      <span>与昨日速战速决，让超越明天成为习惯</span>
                      <a href="" class='more-less details'>更多详情</a>
                  </div>
              </li>
              <li class='p5'>
                  <a href="#">
                      <img src="${data[4].imgpath}" alt="">
                  </a>
                  <div class='carsouel-inner'>
                      <p class='carsouel-tit'>全新梅赛德斯-AMG GLC 63 4MATIC+ 轿跑 SUV</p>
                      <h1 class='carsouel-tra'>乘风_驾势</h1>
                      <span>凌厉锋芒耀眼夺目，非凡气势摄人心魂</span>
                      <a href="" class='more-less details'>更多详情</a>
                  </div>
              </li> 
              <li class='p6'>
                  <a href="#">
                      <img src="${data[5].imgpath}" alt="">
                  </a>
                  <div class='carsouel-inner'>
                      <p class='carsouel-tit'>梅赛德斯-AMG GT 家族</p>
                      <h1 class='carsouel-tra'>不言_而驭</h1>
                      <span>四大猛将齐聚赛道，御风之速，一驭便知</span>
                      <a href="" class='more-less details'>更多详情</a>
                  </div>
              </li>                     
          </ul>
      </div>
      <a href='javascript:;'>
          <img src="http://127.0.0.1:3000/introduce/左.png" alt="" class='btn_left'>
      </a>
      <a href="javascript:;" >
          <img src="http://127.0.0.1:3000/introduce/右.png" alt="" class="btn_right">
      </a>
      <div class="buttons clearfix">
          <a href="javascript:;" class="color"></a>
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
      </div>
  </div>`
  lb.innerHTML=html;

   
  //顶部轮播
$(function () {
  //鼠标移入显示左右箭头
  var timer = '';
  $('.brand_container').mouseover(function () {
    $('.btn_left').show('1000');
    $('.btn_right').show('1000');
    clearInterval(timer);
  }).mouseleave(function () {
    $('.btn_left').hide('1000');
    $('.btn_right').hide('1000');
    timer = setInterval(btn_right, 3000);
  });
  
  var arr = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'];
  var index = 0;
  
  //上一张
  $('.btn_left').on('click', function () {
    btn_left();
  });
  
  //下一张
  $('.btn_right').on('click', function () {
    btn_right();
  });
  
  //图片自动轮播
  timer = setInterval(btn_right, 3000);
  
  //点击上一张的封装函数
  function btn_left() {
    arr.unshift(arr[5]);
    arr.pop();
    $('.brand_container li').each(function (i, e) {
      $(e).removeClass().addClass(arr[i]);
    })
    index--;
    if (index < 0) {
      index = 5;
    }
    show();
  }
  
  //点击下一张的封装函数
  function btn_right() {
    arr.push(arr[0]);
    arr.shift();
    $('.brand_container li').each(function (i, e) {
      $(e).removeClass().addClass(arr[i]);
    })
    index++;
    if (index > 5) {
      index = 0;
    }
    show();
  }
  
  //点击底部的按钮切换图片
  $('.buttons a').each(function () {
    $(this).on('click', function () {
      var myindex = $(this).index();
      var mindex = myindex - index;
      if (mindex == 0) {
        return;
      }
      else if (mindex > 0) {
        var newarr = arr.splice(0, mindex);
        //$.merge() 函数用于合并两个数组内容到第一个数组
        arr = $.merge(arr, newarr);
        $('.brand_container li').each(function (i, e) {
          $(e).removeClass().addClass(arr[i]);
        })
        index = myindex;
        show();
      }
      else if (mindex < 0) {
        //reverse() 方法用于颠倒数组中元素的顺序。
        arr.reverse();
        var oldarr = arr.splice(0, -mindex);
        arr = $.merge(arr, oldarr);
        arr.revrerse();
        $('.band_container li').each(function (i, e) {
          $(e).removeClass().addClass(arr[i]);
        })
        index = myindex;
        show();
      }
    })
  })
  
  //底部按钮高亮
  function show() {
    $('.buttons a').eq(index).addClass('color').siblings().removeClass('color');
  }
})

}

