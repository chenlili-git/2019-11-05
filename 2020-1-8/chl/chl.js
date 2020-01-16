const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// 跨域处理  因为客户端是8081  服务端是80  所以是跨域
app.use((req, res, next) => {

    res.header("Access-Control-Allow-Credentials", true)
    // 第二个参数表示允许跨域的域名，* 代表所有域名  
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST')

    //
    res.header('Access-Control-Max-Age', 600)
    // 允许的 http 请求的方法
    // 允许前台获得的除 Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma 这几张基本响应头之外的响应头   添加自定义响应头Authorization
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    // 如果请求方式是options 就返回200 预请求
    if (req.method == 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next();
    }
})



//注册
app.use('/register', require('./router/user/register'));
app.use('/islogin', require('./router/user/islogin'));
app.use('/login', require('./router/user/login'));
app.use('/loginout', require('./router/user/loginout'));
app.use('/replacepwd', require('./router/user/replacepwd'));

app.use('/asidelist', require('./router/asidelist/asidelist'));


app.listen(80);
