const route = require('koa-route')
const Koa = require('koa');
const logger = require('koa-logger');
const app = new Koa();
const port = 3333

// 日志
app.use(logger())

// 路径
app.use(route.get('/emm', ctx => {
  ctx.type = 'json'
  ctx.body = {
    state: 'emlia',
    data: [1, 2, 3]
  }
}))

app.use(route.get('/haha', ctx => {
  ctx.type = 'json'
  ctx.body = {
    state: 'haha',
    data: 'i am emlia'
  }
}))


// error
app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});

app.listen(port);
console.log(`serve is running at: http://localhost:${port}`)