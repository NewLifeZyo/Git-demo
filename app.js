const express=require('express');

const path=require('path')

const bodyparser=require('body-parser')

const session=require('express-session')

//app.use(session({secret:"secret key"}))
//配置获取post的数据
const app=express();
require('./model/connect')
app.use(bodyparser.urlencoded({extended:false}))

// 配置动态模板
app.engine('html',require('express-art-template'))
app.set('views',path.join(__dirname,'views'))
app.set('view engine','html')
//托管静态资源文件
app.use(express.static(path.join(__dirname,'public')))
//引入路由模块
const admin=require('./router/admin')
const home=require('./router/home')
//匹配路由路径 注册路由中间件
app.use('/home',home)
app.use('/admin',admin)

app.listen(80,()=>{
    console.log('网站服务器启动成功,请访问http://localhost:80');  
})