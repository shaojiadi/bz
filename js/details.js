window.addEventListener('load',function(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4&&xhr.status==200){
            var result=xhr.responseText;
            result=JSON.parse(result);
            console.log(result)
            got(result);
        }
    }
    xhr.open('get','/user/query',true);
    xhr.send(null);
    
})
function got(data){
    var git=document.querySelector('[data-toggle="git"]');
    console.log(data[0].bz_detail_imgpath)
    var html1='';
    html1=`
    <div class='grid-item'>
            <div class='grid'>
                <img src="${data[0].bz_detail_imgpath}" alt="" class='carf-img'>
                <p class='car-txt'>${data[0].bz_detail_txt}</p>
                <p class='car-detail'>${data[0].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div >
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>S 320 L</span>
                                <span class='car-modal-price'>¥86.38万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span>S 350 L 尊贵版</span>
                                <span class='car-modal-price'>¥94.88万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span>S 350 L 豪华版</span>
                                <span class='car-modal-price'>¥102.88万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span>S 450 L</span>
                                <span class='car-modal-price'>¥113.98万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'> 
                            <a href="">
                                <span>S 450 L 4MATIC </span>
                                <span class='car-modal-price'>¥122.88万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span>S 500 L 4MATIC</span>
                                <span class='car-modal-price'>¥173.28万起</span>
                            </a>
                         </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list  list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[1].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[1].bz_detail_txt}</p>
              <p class='car-detail'>${data[1].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div >
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>S 450 4MATIC</span>
                                <span class='car-modal-price'>¥140.88万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span>S 560 4MATIC</span>
                                <span class='car-modal-price'>¥214.88万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span>S 680</span>
                                <span class='car-modal-price'>¥289.88万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span>S 680 双调典藏型</span>
                                <span class='car-modal-price'>¥309.88万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[2].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[2].bz_detail_txt}</p>
              <p class='car-detail'>${data[2].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div >
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>梅赛德斯- AMG S 63 L 4MATIC+</span>
                                <span class='car-modal-price'>¥232.88万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span class='magazin'>梅赛德斯-AMG S 65 L</span>
                                <span class='car-modal-price'>¥279.58万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[3].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[3].bz_detail_txt}</p>
              <p class='car-detail'>${data[3].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div >
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>E 200 L 轿车</span>
                                <span class='car-modal-price'>¥43.58万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>E 200 L 4MATIC 轿车</span>
                                <span class='car-modal-price'>¥45.80万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span>E 300 L 时尚型轿车</span>
                                <span class='car-modal-price'>¥47.58万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span>E 300 L 豪华型轿车</span>
                                <span class='car-modal-price'>¥50.28万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span>E 320 L 4MATIC 轿车</span>
                                <span class='car-modal-price'>¥62.98万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[4].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[4].bz_detail_txt}</p>
              <p class='car-detail'>${data[4].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div >
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>E 200 L 运动轿车</span>
                                <span class='car-modal-price'>¥43.58万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>E 200 L 4MATIC 运动轿车</span>
                                <span class='car-modal-price'>¥45.80万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span class='magazin'>E 300 L 时尚型运动轿车</span>
                                <span class='car-modal-price'>¥47.58万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span class='magazin'>E 300 L 豪华型运动轿车</span>
                                <span class='car-modal-price'>¥50.28万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span class='magazin'>E 320 L 4MATIC 运动轿车</span>
                                <span class='car-modal-price'>¥62.98万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[5].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[5].bz_detail_txt}</p>
              <p class='car-detail'>${data[5].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div >
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>E 200 运动版</span>
                                <span class='car-modal-price'>¥45.38万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>E 200 4MATIC 运动版</span>
                                <span class='car-modal-price'>¥47.48万起</span>
                            </a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">
                                <span>E 300 运动版</span>
                                <span class='car-modal-price'>¥51.68万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[6].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[6].bz_detail_txt}</p>
              <p class='car-detail'>${data[6].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div >
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>梅赛德斯-AMG E 43 4MATIC 特别版</span>
                                <span class='car-modal-price'>¥91.88万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[7].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[7].bz_detail_txt}</p>
              <p class='car-detail'>${data[7].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>全新梅赛德斯-AMG E 63 S 4MATIC+ 特别版</span>
                                <span class='car-modal-price'>¥166.88万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[8].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[8].bz_detail_txt}</p>
              <p class='car-detail'>${data[8].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>C 180 L 动感型 运动轿车</span>
                                <span class='car-modal-price'>¥31.58万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>C 180 L 时尚型 运动轿车</span>
                                <span class='car-modal-price'>¥32.58万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>C 260 L 运动轿车</span>
                                <span class='car-modal-price'>¥35.08万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>C 260 L 4MATIC 运动轿车</span>
                                <span class='car-modal-price'>¥38.28万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>C 300 L 运动轿车</span>
                                <span class='car-modal-price'>¥48.28万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class='grid-item'>
            <div class='grid'>   
              <img src="${data[9].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[9].bz_detail_txt}</p>
              <p class='car-detail'>${data[9].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>C 260 运动版</span>
                                <span class='car-modal-price'>¥31.88万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>C 260 4MATIC 运动版</span>
                                <span class='car-modal-price'>¥36.88万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>C 300 运动版</span>
                                <span class='car-modal-price'>46.08万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[10].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[10].bz_detail_txt}</p>
              <p class='car-detail'>${data[10].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>C 180 L 时尚型轿车</span>
                                <span class='car-modal-price'>¥32.38万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>C 260 L 轿车</span>
                                <span class='car-modal-price'>¥35.08万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>C 260 L 4MATIC 轿车</span>
                                <span class='car-modal-price'>¥38.28万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>C 300 L 轿车</span>
                                <span class='car-modal-price'>¥48.68万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[11].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[11].bz_detail_txt}</p>
              <p class='car-detail'>${data[11].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>C 180 旅行轿车</span>
                                <span class='car-modal-price'>¥36.38万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>C 260 旅行轿车</span>
                                <span class='car-modal-price'>¥39.98万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>C 260 4MATIC 旅行轿车</span>
                                <span class='car-modal-price'>¥45.68万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>C 300 旅行轿车</span>
                                <span class='car-modal-price'>¥53.88万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[12].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[12].bz_detail_txt}</p>
              <p class='car-detail'>${data[12].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>新一代梅赛德斯-AMG C 43 4MATIC 运动版</span>
                                <span class='car-modal-price'>¥61.88万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[13].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[13].bz_detail_txt}</p>
              <p class='car-detail'>${data[13].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>梅赛德斯-AMG C 63</span>
                                <span class='car-modal-price'>¥94.18万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
         <div class='grid-item'>
            <div class='grid'>
              <img src="${data[14].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[14].bz_detail_txt}</p>
              <p class='car-detail'>${data[14].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                        <a href='' class='all-vechies-grida'>配置车型
                            <span>></span>
                        </a>
                    </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>A 180 L 轿车</span>
                                <span class='car-modal-price'>¥21.69万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>A 180 L 运动轿车</span>
                                <span class='car-modal-price'>¥23.59万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>A 200 L 轿车</span>
                                <span class='car-modal-price'>¥26.79万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>A 200 L 运动轿车</span>
                                <span class='car-modal-price'>¥27.19万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>A 200 L 运动轿车 先型特别版</span>
                                <span class='car-modal-price'>¥29.99万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div>
         <div class='grid-item'>
            <div class='grid'>
              <img src="${data[15].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[15].bz_detail_txt}</p>
              <p class='car-detail'>${data[15].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>CLA 180</span>
                                <span class='car-modal-price'>¥23.78万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>CLA 200 动感型</span>
                                <span class='car-modal-price'>¥25.68万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>CLA 200 时尚型</span>
                                <span class='car-modal-price'>¥27.48万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>CLA 200 暗夜特别版</span>
                                <span class='car-modal-price'>¥28.18万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>CLA 220 4MATIC</span>
                                <span class='car-modal-price'>¥30.68万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>CLA 260 4MATIC</span>
                                <span class='car-modal-price'>¥35.98万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'> 
              <img src="${data[16].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[16].bz_detail_txt}</p>
              <p class='car-detail'>${data[16].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>梅赛德斯-AMG A 45 4MATIC</span>
                                <span class='car-modal-price'>¥46.38万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[17].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[17].bz_detail_txt}</p>
              <p class='car-detail'>${data[17].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>梅赛德斯-AMG CLA 45 4MATIC</span>
                                <span class='car-modal-price'>¥55.88万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[18].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[18].bz_detail_txt}</p>
              <p class='car-detail'>${data[18].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>B级运动旅行车 </span>
                                <span class='car-modal-price'>¥22.58万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[19].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[19].bz_detail_txt}</p>
              <p class='car-detail'>${data[19].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>R 320 4MATIC 商务型 臻藏版</span>
                                <span class='car-modal-price'>¥54.88万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>R 320 4MATIC 豪华型 臻藏版</span>
                                <span class='car-modal-price'>¥63.28万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>R 400 4MATIC 臻藏版</span>
                                <span class='car-modal-price'>¥72.68万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<div class='carf-tit'>SUV</div>
<div>
    <div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[20].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[20].bz_detail_txt}</p>
              <p class='car-detail'>${data[20].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <a class='all-vechies-grida all-vechies-gridas'>配置车型
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>G 500</span>
                                <span class='car-modal-price'>¥155.88万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[21].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[21].bz_detail_txt}</p>
              <p class='car-detail'>${data[21].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <a class='all-vechies-grida all-vechies-gridas'>配置车型
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>全新梅赛德斯-AMG G 63</span>
                                <span class='car-modal-price'>¥219.88万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>梅赛德斯-AMG G 63 先型特别版</span>
                                <span class='car-modal-price'>¥244.88万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[22].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[22].bz_detail_txt}</p>
              <p class='car-detail'>${data[22].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLS 320 4MATIC 臻藏版</span>
                                <span class='car-modal-price'>¥95.68万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>GLS 350 d 4MATIC</span>
                                <span class='car-modal-price'>¥99.88万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLS 400 4MATIC 动感型</span>
                                <span class='car-modal-price'>¥107.58万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLS 400 4MATIC 动感型 臻藏版</span>
                                <span class='car-modal-price'>¥107.58万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLS 400 4MATIC 豪华型</span>
                                <span class='car-modal-price'>¥124.98万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>GLS 500 4MATIC</span>
                                <span class='car-modal-price'>¥152.38万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[23].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[23].bz_detail_txt}</p>
              <p class='car-detail'>${data[23].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>梅赛德斯-AMG GLS 63 4MATIC</span>
                                <span class='car-modal-price'>¥184.68万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[24].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[24].bz_detail_txt}</p>
              <p class='car-detail'>${data[24].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>GLE 300 d 4MATIC</span>
                                <span class='car-modal-price'>¥71.18万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLE 320 4MATIC 动感型臻藏版</span>
                                <span class='car-modal-price'>¥71.98万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLE 320 4MATIC 豪华型臻藏版</span>
                                <span class='car-modal-price'>¥76.28万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>GLE 350 d 4MATIC</span>
                                <span class='car-modal-price'>¥79.58万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>GLE 300 d 4MATIC</span>
                                <span class='car-modal-price'>¥71.18万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLE 400 4MATIC 臻藏版（特殊配置）</span>
                                <span class='car-modal-price'>¥83.88万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLE 400 4MATIC 臻藏版（特殊配置）</span>
                                <span class='car-modal-price'>¥86.28万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[25].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[25].bz_detail_txt}</p>
              <p class='car-detail'>${data[25].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>梅赛德斯-AMG GLE 43 4MATIC</span>
                                <span class='car-modal-price'>¥96.58万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[26].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[26].bz_detail_txt}</p>
              <p class='car-detail'>${data[26].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>梅赛德斯-AMG GLE 63 4MATIC</span>
                                <span class='car-modal-price'>¥172.88万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>梅赛德斯-AMG GLE 63 S 4MATIC</span>
                                <span class='car-modal-price'>¥184.88万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[27].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[27].bz_detail_txt}</p>
              <p class='car-detail'>${data[27].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>梅赛德斯-AMG GLE 43 4MATIC 轿跑 SUV</span>
                                <span class='car-modal-price'>¥98.98万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[28].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[28].bz_detail_txt}</p>
              <p class='car-detail'>${data[28].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>梅赛德斯-AMG GLE 63 4MATIC 轿跑 SUV</span>
                                <span class='car-modal-price'>¥179.98万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[29].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[29].bz_detail_txt}</p>
              <p class='car-detail'>${data[29].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>GLC 200 L 4MATIC</span>
                                <span class='car-modal-price'>¥39.98万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLC 260 L 4MATIC 动感型</span>
                                <span class='car-modal-price'>¥42.98万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLC 260 L 4MATIC 豪华型</span>
                                <span class='car-modal-price'>¥44.50万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLC 300 L 4MATIC 动感型</span>
                                <span class='car-modal-price'>¥48.98万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLC 300 L 4MATIC 豪华型</span>
                                <span class='car-modal-price'>¥57.60万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[30].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[30].bz_detail_txt}</p>
              <p class='car-detail'>${data[30].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLC 200 4MATIC 轿跑 SUV</span>
                                <span class='car-modal-price'>¥46.38万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLC 260 4MATIC 轿跑 SUV</span>
                                <span class='car-modal-price'>¥49.88万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLC 300 4MATIC 轿跑 SUV</span>
                                <span class='car-modal-price'>¥59.48万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[31].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[31].bz_detail_txt}</p>
              <p class='car-detail'>${data[31].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>GLA 200 动感型</span>
                                <span class='car-modal-price'>¥26.98万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>GLA 200 时尚型</span>
                                <span class='car-modal-price'>¥28.88万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLA 220 4MATIC 运动型</span>
                                <span class='car-modal-price'>¥32.48万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>GLA 260 4MATIC 运动型</span>
                                <span class='car-modal-price'>¥39.58万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<div class='carf-tit'>轿跑车&敞篷跑车</div>
<div>
    <div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[32].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[32].bz_detail_txt}</p>
              <p class='car-detail'>${data[32].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>CLS 300 动感型 四门轿跑车</span>
                                <span class='car-modal-price'>¥64.88万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>CLS 300 豪华型 四门轿跑车</span>
                                <span class='car-modal-price'>¥70.80万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>CLS 350 4MATIC 四门轿跑车</span>
                                <span class='car-modal-price'>¥80.80万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>CLS 350 4MATIC 四门轿跑车先型特别版</span>
                                <span class='car-modal-price'>¥83.80万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[33].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[33].bz_detail_txt}</p>
              <p class='car-detail'>${data[33].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>E 200 轿跑车</span>
                                <span class='car-modal-price'>¥52.88万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>E 200 4MATIC 轿跑车</span>
                                <span class='car-modal-price'>¥55.48万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>E 300 轿跑车</span>
                                <span class='car-modal-price'>¥60.48万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>E 350 4MATIC 轿跑车</span>
                                <span class='car-modal-price'>¥70.48万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[34].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[34].bz_detail_txt}</p>
              <p class='car-detail'>${data[34].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>E 200 敞篷轿跑车</span>
                                <span class='car-modal-price'>¥64.28万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>E 200 4MATIC 敞篷轿跑车</span>
                                <span class='car-modal-price'>¥66.28万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>E 300 敞篷轿跑车</span>
                                <span class='car-modal-price'>¥71.88万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[35].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[35].bz_detail_txt}</p>
              <p class='car-detail'>${data[35].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>C 260 轿跑车</span>
                                <span class='car-modal-price'>¥36.98万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>C 260 4MATIC 轿跑车</span>
                                <span class='car-modal-price'>40.48万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>C 300 轿跑车</span>
                                <span class='car-modal-price'>¥46.98万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[36].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[36].bz_detail_txt}</p>
              <p class='car-detail'>${data[36].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>新一代梅赛德斯-AMG C 43 4MATIC 轿跑车</span>
                                <span class='car-modal-price'>¥64.88万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[37].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[37].bz_detail_txt}</p>
              <p class='car-detail'>${data[37].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>新一代梅赛德斯-AMG C 63 轿跑车</span>
                                <span class='car-modal-price'>¥97.18万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[38].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[38].bz_detail_txt}</p>
              <p class='car-detail'>${data[38].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>SLC 260 动感型</span>
                                <span class='car-modal-price'>¥51.88万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                        <a href="">
                            <span>SLC 300 豪华运动型</span>
                            <span class='car-modal-price'>¥63.88万起</span>
                        </a>
                    </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[39].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[39].bz_detail_txt}</p>
              <p class='car-detail'>${data[39].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>梅赛德斯-AMG GT</span>
                                <span class='car-modal-price'>¥132.18万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>梅赛德斯-AMG GT S</span>
                                <span class='car-modal-price'>¥159.98万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>全新梅赛德斯-AMG GT C 中国特别版</span>
                                <span class='car-modal-price'>¥185.88万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[40].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[40].bz_detail_txt}</p>
              <p class='car-detail'>${data[40].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>梅赛德斯-AMG GT R</span>
                                <span class='car-modal-price'>¥215.58万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[41].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[41].bz_detail_txt}</p>
              <p class='car-detail'>${data[41].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>S 450 4MATIC 轿跑车</span>
                                <span class='car-modal-price'>¥124.38万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[42].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[42].bz_detail_txt}</p>
              <p class='car-detail'>${data[42].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span class='magazin'>梅赛德斯-AMG S 63 4MATIC+ 轿跑车</span>
                                <span class='car-modal-price'>¥234.78万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[43].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[43].bz_detail_txt}</p>
              <p class='car-detail'>${data[43].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>配置车型
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>SL 400</span>
                                <span class='car-modal-price'>¥101.68万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<div>
    <div class='carf-tit'>MPV</div>
    <div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[44].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[44].bz_detail_txt}</p>
              <p class='car-detail'>${data[44].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>V 260 领航版 </span>
                                <span class='car-modal-price'>¥48.50万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>V 260 尊贵版</span>
                                <span class='car-modal-price'>¥59.30万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>V 260 L 尊贵加长版</span>
                                <span class='car-modal-price'>¥61.80万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>V 260 AMG 运动版</span>
                                <span class='car-modal-price'>¥66.80万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='grid-item'>
            <div class='grid'>
              <img src="${data[45].bz_detail_imgpath}" alt="" class='carf-img'>
              <p class='car-txt'>${data[45].bz_detail_txt}</p>
              <p class='car-detail'>${data[45].price}</p>
            </div>
            <div class='all-vechies'>
                <div class='all-vechies-grid'>
                    <a href='' class='all-vechies-grida'>了解更多
                        <span>></span>
                    </a>
                </div>
                <div class='all-vechies-grid'>
                    <a class='all-vechies-grida all-vechies-gridas'>车型规格
                        <span class='btn'>^</span>
                    </a>
                    <ul class='all-vechies-list list'>
                        <li class='car-modal'>
                            <a href="">
                                <span>精英版</span>
                                <span class='car-modal-price'>¥29.60万起</span>
                            </a>
                        </li>
                        <li class='car-modal'>
                            <a href="">
                                <span>商务版</span>
                                <span class='car-modal-price'>¥34.90万起</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a class='all-vechies-grida all-vechies-gridas'>购车工具
                        <span class='btn2'>^</span>
                    </a>
                    <ul class='all-vechies-list list2'>
                        <li  class='car-modal'>
                            <a href="">下载产品手册</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">预约试驾</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">金融计算器</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">查找经销商</a>
                        </li>
                        <li  class='car-modal'>
                            <a href="">车型比较</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`;
        git.innerHTML=html1

        $('.grid').mouseenter(
          function(){
              var $grid=$(this);
              $grid.parent().find($('.all-vechies')).slideDown(200).addClass('add');
          }
      )
      $('.grid-item').mouseleave(
        function(){
            var $grid=$(this);
            $grid.find($('.all-vechies')).slideUp(200).addClass('add');
        }
      )
      /*按钮*//
      $('.btn').click(function(){
          var $btn=$(this);
          $btn.toggleClass('tras');
          $btn.css('transition','1s');
          $('.list').slideToggle();
      })
      $('.btn2').click(function(){
          var $btn2=$(this);
          $btn2.toggleClass('tras');
          $btn2.css('transition','1s');
          $('.list2').slideToggle();
      })
      
      /* 缩略文字*/
      var oldText=$('.magazin').html();
      if(oldText.length>13){
          var newText=oldText.substring(0,9)+'...';
          $('.magazin').html(newText);
      }
      /**跳转*/
      var list = document.querySelector('[data-list="scroll"]');
      list.addEventListener('click',function(e){
        if(e.target.nodeName == 'A'){
          var str = e.target.innerHTML;
        
      
          switch(str){
            case '轿车':
              move(250);
              break;
            case 'SUV':
              move(2530);
              break;
            case '轿跑车 &amp; 敞篷跑车':
              move(3890);
              break;
            case 'MPV':
              move(5210);
              break;
          }
        }
      });
      function move(l){
        document.documentElement.scrollTop = l;
      }
        
      /*电梯*/
      window.addEventListener('scroll',function(){
        var scrollTop=this.document.body.scrollTop
          ||document.documentElement.scrollTop;
        if(scrollTop>=245){
          toTop.className='str-nav';
        }else{
          toTop.className='';
        }
      });
      
      $('.cl').focus(function(){
        var cl=$(this);
        cl.addClass('change');
      })
      $('.cl').blur(function(){
        var cl=$(this);
        cl.removeClass('change');
      })
    }

