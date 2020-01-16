import {instance} from './index';
import qs from 'qs';
//登录
export const login=(obj)=>instance.post("http://localhost:80/login",obj);
//验证登录
export const islogin=()=>instance.post("http://localhost:80/islogin");
//退出登录
export const loginout=()=>instance.post("http://localhost:80/loginout");
//注册
export const register=(obj)=>instance.post("http://localhost:80/register",obj);
//重置密码
export const replacepwd=(obj)=>instance.post("http://localhost:80/replacepwd",obj);



//侧边tree

export const asidelist=()=>instance.get("http://localhost:80/asidelist");