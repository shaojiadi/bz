/*锚点*/
var list = document.querySelector('[data-list="scroll"]');
list.addEventListener('click',function(e){
  if(e.target.nodeName == 'A'){
    var str = e.target.innerHTML;
     switch(str){
      case '梅赛德斯-奔驰':
        move(800);
        break;
      case '瞰思未来 C.A.S.E':
        move(1650);
        break;
      case '心所向 驰以恒':
        move(4500);
        break;
    }
  }
});
function move(l){
  document.documentElement.scrollTop =l;
}

  /*电梯*/
window.onscroll=function(){
  var scrollTop=this.document.body.scrollTop
    ||document.documentElement.scrollTop;
    console.log(scrollTop);
  if(scrollTop>=700){
    navs.className='fix';
  }else{
    navs.className='nav';
  }
}
$('.generic').focus(function(){
  var cl=$(this);
 // console.log(cl);
  cl.parent().addClass('change');
})
$('.generic').blur(function(){
  var cl=$(this);
 // console.log(cl);
  cl.parent().removeClass('change');
})