import axios from 'axios';
const instance=axios.create();

axios.defaults.headers['Content-Type']='x-www-from-urlencoded';
instance.interceptors.request.use(config=>{
    console.log('请求拦截');
    const token=sessionStorage.getItem('token');
    if(token){
        config.headers['Authorization']=token;
    }
    return config;
},error=>{
    return Promise.reject(error);
})

instance.interceptors.response.use(config=>{
    console.log('响应拦截',config);
    if(config.data.token){
        sessionStorage.setItem('token',config.data.token)
    }
    if(config.data.user){
        sessionStorage.setItem('user',JSON.stringify(config.data.user))
    }
    return config.data;
},error=>{
    return Promise.reject(error);
})

export {instance};