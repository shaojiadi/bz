

$('#header').html(`
        <nav class="navheader">
            <div class="nav-top">
                <div class="nav-logo">
                    <a href="#"><img src="http://127.0.0.1:3000/mercedes-benz-logo.png" alt=""></a>	 
                </div>
                <ul class="navul">
                    <li class='nav-li'> <a href="details.html">车型</a> </li>
                    <li class='nav-li'> <a href="https://www.mercedes-benz.com.cn/special-offer.html">购车指南</a>  </li>
                    <li class='nav-li'> <a href="bzG.html">G系</a> </li>
                    <li class='nav-li'> <a href="brand-introduction.html" target="">品牌介绍</a> </li>
                    <li class='nav-li'> <a href="amg.html">梅赛德斯-AMG</a></li>
                    <li class='nav-li'> 
                        <a href="javascript:;">
                            <img src="http://127.0.0.1:3000/search.png" alt="" class='search-img'>
                        </a> 
                    </li>
                </ul>
                <div class="navlogin">
                    <ul class="navuser">
                        <li> <a href="http://127.0.0.1:3000/login.html">登录</a></li>
                        <li> <a href="">注册</a> </li>
                    </ul>
                </div>
                <div class='navlogins'>
                    <ul class="navuser">
                        <li>
                            <img src="http://127.0.0.1:3000/头像.png" alt="" class='tx'>
                        <li>
                        <li> <a href="">你好,${localStorage.getItem('uname')
                        }</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class='navfoot'>
            <div class='nav-foot'>
                <div class='nav-foot-ser'>
                    <img src="http://127.0.0.1:3000/search.png" alt="" class='nav-foot-i1'>
                    <input type="text" placeholder="搜索梅赛德斯-奔驰" class='nav-ser'>
                    <a href=''>
                        <img src="http://127.0.0.1:3000/向右箭头.png" alt="" class='nav-foot-i2'>
                    </a>
                </div>
             </div>
        </div>
`);


$('#foote').html(`
<div class='footer'>
<div class='footer-top'>
    <ul>
        <li><a href="#" class='footer-top-size'>车型</a></li>
        <li><a href="#">轿车</a></li>
        <li><a href="#">SUV</a></li>
        <li><a href="#">轿跑车和敞篷车</a></li>
        <li><a href="#">MPV</a></li>
        <li><a href="#">EQC</a></li>
        <li><a href="#">车型总览</a></li>
    </ul>
    <ul>
        <li><a href="#" class='footer-top-size'>购车指南</a></li>
        <li><a href="#">在线购车</a></li>
        <li><a href="#">限时购车新方案</a></li>
        <li><a href="#">查找经销商</a></li>
        <li><a href="#">预约试驾</a></li>
        <li><a href="#">下载产品手册</a></li>
        <li><a href="#">车型比较</a></li>
    </ul>
    <ul>
        <li><a href="#" class='footer-top-size'>客户服务</a></li>
        <li><a href="#">保养菜单</a></li>
        <li><a href="#">手机端服务体验</a></li>
        <li><a href="#">原厂配件</a></li>
        <li><a href="#">事故与保险服务</a></li>
        <li><a href="#">24小时道路救援</a></li>
        <li><a href="#">召回通知</a></li>
    </ul>
    <ul>
        <li><a href="#" class='footer-top-size'>奔驰天下</a></li>
        <li><a href="#">奔驰杂志</a></li>
        <li><a href="#">奔驰新闻</a></li>
        <li><a href="#">奔驰驾驶学院</a></li>
        <li><a href="#">供应商平台信息</a></li>
        <li><a href="#">企业责任</a></li>
        <li><a href="#">环保信息清单</a></li>
    </ul>
</div>
<div class='footer-middle'>
    <div class='footer-middle-m'>
        <h3> <a href=""> 关注我们</a></h3>
        <a href="https://weibo.com/"><img src="http://127.0.0.1:3000/sina_mouse_over.png"class='footer-middle-image1'></a> 
        <a href="https://weixin.qq.com/"><img src="http://127.0.0.1:3000/wechat_mouse_over.png"class='footer-middle-image2'></a>  
        <a href="https://www.zhihu.com"><img src="http://127.0.0.1:3000/zhihu_mouse_over.png"class='footer-middle-image3'></a>  
    </div>
</div>
<div class='footer-bottom'>
    <div class='footer-bottom-m'>
        <ul>
            <li> <a href="">© 2018 北京梅赛德斯-奔驰销售服务有限公司 版权所有</a></li>
            <li class='fots'> <a href="">网站地图</a></li>
            <li class='fots'> <a href="">隐私条款</a> </li>
            <li class='fots'> <a href="">京ICP备09046804号-2</a> </li>
            <li class='fots'> <a href="">法律声明</a> </li>
            <li class='fots'> <a href="">京网安备 11010502035702号</a> </li>
        </ul>
    </div>
</div>
</div>
`);


$('.search-img').click(function(){
    $('.navfoot').slideToggle('1s');
})


var navlogin=document.getElementsByClassName('navlogin');                  
var navlogins=document.getElementsByClassName('navlogins');
window.addEventListener('load',function(){
    if(localStorage.getItem('uid')){
        navlogin[0].style.cssText='display:none';
        navlogins[0].style.cssText='display:block';
    }
})