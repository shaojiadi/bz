const express = require('express');
const router = express.Router();
const pool = require('../pool')

//用户注册模块
router.post("/register",(req,res)=>{
	//执行sql语句，将注册的数据插入到ts_user表中，成功响应对象{1}
	var $obj=req.body;
    pool.query("insert into bz_user set ?",[$obj],(err,result)=>{ 
        if(err) throw err ;
        if(result.affectedRows>0){
			res.send({code:1});
        }
    })
});
router.get('/queryregister',(req,res)=>{
	var uname=req.query.uname;
	pool.query('SELECT*FROM bz_user WHERE uname=?',[uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send({code:1});
		}else{
			res.send({code:-1});
		}
	})
})
//用户登陆模块
router.get('/login', (req,res) => {
	var obj = req.query;
	var $uname=obj.uname;
	if(!$uname){
		res.send({code:401,msg:'uname required'})
		return;
	}
	var $upwd=obj.upwd;
	if(!$upwd){
		res.send({code:402,msg:'upwd required'})
		return;
	}
	var sql = "SELECT * FROM bz_user where uname=? and upwd=?";
	pool.query(sql, [$uname,$upwd], (err, result) => {
		if (err) throw err;
		if(result.length>0){
			res.send({code:1,data:result});
		}else{
			res.send("用户名或密码错误");
		}
	})
})

//查询轮播图
router.get('/select',(req,res)=>{
	var sql='SELECT * FROM bz_carousel_item';
	pool.query(sql,(err,result)=>{
		if(err) throw err;
			res.send(result);
	})
})

//查询详情
router.get('/query',(req,res)=>{
	var sql='SELECT * FROM bz_detail';
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})

//导出模块
module.exports = router;
