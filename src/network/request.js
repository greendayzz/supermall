import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/z8",
    timeout: 5000
  });

  //2axios的拦截器
  //2.1请求拦截的作用
  instance.interceptors.request.use(config => {
    // console.log(config);
    //1.比如config中的一些信息不符合服务器的要求

    //2.比如每次发送网络请求时，都希望在界面显示一个请求的图标

    //3.某些网络请求，比如登录(token)，必须携带一些特殊的信息

    return config;
  }, err => {
    // console.log(err);
  })

  //2.2响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })

  //3..发送真正的网络请求  在调用实例化axios时，axios会自动生成一个promise，因此此处直接return，外面在用的时候
  //直接按照promise的用法使用，利用resolve和reject进行网络请求成功和失败的处理
  return instance(config)
}
