const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routers/user'); //引入用户路由
var app=express();
app.use(bodyParser.urlencoded({
  extended:false
}));
app.listen(3000,(err)=>{
  console.log('服务器创建成功');
});
//挂载静态文件
app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('picture'));
//挂载路由
app.use('/user',userRouter);
