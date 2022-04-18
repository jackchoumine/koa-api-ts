# koa-api 项目

`Context` 对象，封装了 request 和 response 对象。

`context.req` 和 `context.res` 是 node 原生的 node 对象。原生的`res.end`等不支持。

`ctx.app`实例的引用。

`ctx.app.emit` 发送事件。

`ctx.cookies.get(name)` `ctx.cookies.set(name)`

> 中间件如何写？

多个中间件形成前进后出的栈结构。

```ts
function one(ctx: Context, next: Next) {
  console.log('--> one')
  next()
  console.log('<-- one')
}

function two(ctx: Context, next: Next) {
  console.log('--> two')
  next()
  console.log('<-- two')
}

function three(ctx: Context, next: Next) {
  console.log('--> three')
  next() // FIXME 中间件不调用 next,执行权不会向后传递，从而实现拦截
  // 比如，登录验证
  // NOTE 如何使用中间件记录请求返回时间？
  console.log('<-- three')
}

app.use(one)
app.use(two)
app.use(three)
```

输出

```bash
--> one
--> two
--> three
<-- three
<-- two
<-- one
```

### 异步中间件

```ts
app.use(async (ctx, next) => {
  const data = await util.promisify(fs.readFile)(path.join(__dirname, './public/main.js'), 'utf-8')
  ctx.body = data
  next()
})
```

### 组合中间件

```ts
app.use(compose([two, one, three]))
// app.use(one)
// app.use(two)
// app.use(three)
```

## 异常处理

```ts
ctx.throw(500)
ctx.throw(404)
ctx.throw(400)
app.use(async (ctx, next) => {
  try {
    const data = await util.promisify(fs.readFile)(path.join(__dirname, './public'), 'utf-8')
    ctx.body = data
    next()
  } catch (error) {
    ctx.status = 500
    ctx.body = '服务器内部错误'
    // 会抛出错误，中间程序
    // ctx.throw(500) //, '服务器内部错误')
  }
})
```

> 多个异常，如何统一处理？

在最外层即最顶部的中间件捕获异常。

```ts
app.use(async (ctx, next) => {
  try {
    console.log('--->处理异常')
    await next()
    // FIXME 为何不使用 await next()，无法捕获呢？
    console.log('<---处理异常')
  } catch (error: any) {
    console.log(error.message)
    ctx.status = 500
    ctx.body = error.message || '服务器错误'
  }
})

app.use((ctx, next) => {
  // const data = await util.promisify(fs.readFile)(path.join(__dirname, './public/main.js'), 'utf-8')
  // ctx.body = data
  JSON.parse('hello')
  ctx.body = 'hello world'
  console.log('--->hello world')
  next()
  console.log('<---hello world')
})
```

继续看

[koa 异常处理](https://www.bilibili.com/video/BV1W64y1h7qi?p=11&spm_id_from=pageDriver)

## 前端后端交互

1. post

2. form-data

3. 文件上传

4. 静态资源

## 日志

使用 `log4js` 记录日志

可设置级别、分割文件

# jwt 认证

## 数据库

1. 连接

2. 分页

3. 数据库查询优化

4.

## 资料参考

[TypeScript 从系统入门到项目实战 -- 慕课网](https://www.youtube.com/watch?v=tae8pRmB0UI&list=PL9nxfq1tlKKkG8HjoiTDk6YFeyQslC8s6)

[koa 中文文档](https://koa.bootcss.com/)

[awesome koa](https://github.com/ellerbrock/awesome-koa)

[awesome koa](https://github.com/fineen/awesome-koa)

[Koa.js basics in 7-step tutorial](https://ralabs.org/blog/koa-basics-in-7-step-tutorial/)
