#介绍：  
  本demo是采用webpack打包，学习react-router所做，语法是按照es6的语法，主要包括路由的切换，生命周期的介绍，表单的提交，组件之间的通信，适合学习webpack和学习react的初学者
#目录结构
  ├── dist                        # 所有打包生成的文件   
  ├── src                         # 程序源文件   
  │   ├── app.js                 # 入口文件（路由配置文件）   
  │   ├── components             # 全局可复用的表现组件   
  │   ├── views                # 所有页面的文件    
  │   ├── assets               # 资源   
  │   │   ├── css             # css   
  │   │   └── mockCtrl        # 所有ajax请求的数据   
  ├── index.html                #主体html文件    
  ├── app.js                    #启动服务器文件    
  ├── webpack.config.js         #webpack配置文件
  
#安装：
  npm install
#使用：   
  npm start => node app.js
#build：   
  npm run build =>webpack 打包
#感谢
