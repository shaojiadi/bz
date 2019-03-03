//发现更多
$('#findMore').hover(
  function(){
    $('.promo-panel-to2').toggle();
    $('.by-car-d1').fadeToggle();
  }
)
$('.genden').hover(
  function(){
    $('.promo-panel-to3').toggle();
    $('.genden-text-d2').fadeToggle();
  }
)
$('.star').hover(
  function(){
    $('.promo-panel-to4').toggle();
    $('.start-text-d2').fadeToggle();
  }
)

var tabs=document.querySelectorAll('[data-toggle=tab]');
for(var tab of tabs){
  tab.onclick=function(){
    var tab=this;
    var divs=document.querySelectorAll('#container>div');
    for(var div of divs){
      div.style.display='none';
    }
    var id=tab.getAttribute('data-target');
    var div=document.querySelector(id);
    div.style.display='block';
  }
}
$('.biaoti').focus(function(){
  var cl=$(this);
  cl.addClass('change');
})
$('.biaoti').blur(function(){
  var cl=$(this);
  cl.removeClass('change');
})


window.addEventListener('load',function(){
  var xhr=new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(xhr.readyState == 4&& xhr.status == 200){
      var result = xhr.responseText;
      result=JSON.parse(result);
      lunbo(result);
  }
}
xhr.open('get','/user/select',true);
xhr.send(null);
})
function lunbo(data){
  var lunbo=document.querySelector('[data-toggle=lunbo]');
  console.log(lunbo)
  var html='';
      html=`<div class='brand_container'>
      <div class='brand_content'>
          <ul>
              <li class='p1'>
                  <a href="#">
                      <img src="${data[6].imgpath}" alt="">
                  </a>
                  <div class='carsouel-inner'>
                      <p class='carsouel-tit'>标准轴距E级车运动版</p>
                      <h1 class='carsouel-tra'>智者_大成</h1>
                      <span>梅赛德斯-奔驰标准轴距E级车运动版，以智慧并肩社会中坚力量。</span>
                      <a href="" class='more-less details'>更多详情</a>
                  </div>
              </li>
              <li class='p2'>
                  <a href="#">
                      <img src="${data[7].imgpath}" alt="">
                  </a>
                  <div class='carsouel-inner'>
                      <p class='carsouel-tit'>S级轿车</p>
                      <h1 class='carsouel-tra'>引领天下之势</h1>
                      <span>梅赛德斯-奔驰S级轿车，与先行同行，领时代之先。</span>
                      <a href="" class='more-less details'>更多详情</a>
                  </div>
              </li>
              <li class='p3'>
                  <a href="#">
                      <img src="${data[8].imgpath}" alt="">
                  </a>
                  <div class='carsouel-inner'>
                      <p class='carsouel-tit'>新一代长距轴C级轿车</p>
                      <h1 class='carsouel-tra'>成就人生主角</h1>
                      <span>新一代梅赛德斯-奔驰长轴距C级运动轿车，壮志人生，领衔主角。</span>
                      <a href="" class='more-less details'>更多详情</a>
                  </div>
              </li>
              <li class='p4'>
                  <a href="#">
                      <img src="${data[9].imgpath}" alt="">
                  </a>
                  <div class='carsouel-inner'>
                      <h1 class='carsouel-tra'>技惊_四座</h1>
                      <span>全新梅赛德斯-AMG GT 四门跑车，预售现已开启</span>
                      <a href="" class='more-less details'>更多详情</a>
                  </div>
              </li>
              <li class='p5'>
                  <a href="#">
                      <img src="${data[10].imgpath}" alt="">
                  </a>
                  <div class='carsouel-inner'>
                      <p>新梅斯德斯-奔驰长轴距GLC SUV</p>
                      <h1 class='carsouel-tra'>敢为_英雄</h1>
                      <span>加长轴距，不拘规格，尽显英雄胸襟；新梅赛德斯-奔驰长轴距GLC SUV，英雄之路，不惮险阻。</span>
                      <a href="" class='more-less details'>更多详情</a>
                  </div>
              </li> 
              <li class='p6'>
                  <a href="#">
                      <img src="${data[11].imgpath}" alt="">
                  </a>
                  <div class='carsouel-inner'>
                      <h1 class='carsouel-tra'>如愿之礼_随礼好享</h1>
                      <span>在线订购梅赛德斯-AMG GLE 43 4MATIC，赠精品好礼！</span>
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
  lunbo.innerHTML=html;

    

  
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


