### 启动服务器

    pm2 start app.js --name app --watch

 - 启动后，每次修改app.js后，不需要重新启动，--watch会监听文件变化
  
### 停止服务器
    pm2 stop app

### 查看日志
    pm2 logs app

### 例子
    1. http://localhost:3333/emm

    返回

    {"state":"emlia","data":[1,2,3]}

    2. http://localhost:3333/haha
     返回

    {"state":"haha","data":"i am emlia"}