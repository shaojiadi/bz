var lis=document.querySelectorAll(
    "#toTop>button"
);
 
var items = null;
var scrollTop=document.body.scrollTop ||document.documentElement.scrollTop;
    for(let i=0;i<lis.length;i++){
        (function(i){
            lis[i].onmouseover =function(){
                lis[i].className=""
                lis[i].className = "totop";
            }
            lis[i].onmouseout=function(){
                if(items==i){
                    lis[i].className = "totop";
                }else{
                    var li=this;
                    li.className="totop0";
                }
            }
        })(i);

        (function(i){
            lis[i].onclick=function(){
                console.log(i);
                if(i==0){
                    window.scrollTo(0,900);
                }else if(i==1){
                    window.scrollTo(0,2250);
                }
                else if(i==2){
                    window.scrollTo(0,3300);
                }else if(i==3){
                    window.scrollTo(0,4900);
                }else if(i==4){
                    window.scrollTo(0,5650);
                }else if(i==5){
                    window.scrollTo(0,7100);
                }
            }
        })(i)
    };
window.onscroll=function(){
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
   
    var lis=document.querySelectorAll(
        "#toTop>button"
    );
    var s=[800,2000,3200,4700,5600,7000];   
    for (var li of lis){
        li.className=""
        li.className="totop0";
  }
  if(scrollTop>=s[0]&&scrollTop<=s[1]){
        lis[0].className="totop"
        items = 0;
    }else if(scrollTop>s[1]&&scrollTop<=s[2]){
        lis[1].className="totop" 
        items = 1;
    }else if(scrollTop>s[2]&&scrollTop<=s[3]){
        lis[2].className="totop" 
        items = 2;
    }else if(scrollTop>s[3]&&scrollTop<=s[4]){
        lis[3].className="totop" 
        items = 3;
    }else if(scrollTop>s[4]&&scrollTop<=s[5]){
        lis[4].className="totop" 
        items = 4;
    }else if(scrollTop>s[5]){
        lis[5].className="totop"
        items = 5;    
    }
    if(scrollTop>500)
        toTop.style.display='block';
    else
        toTop.style.display='none';
}
