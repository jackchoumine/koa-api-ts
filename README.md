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

## koa 相关资料

[koa 中文文档](https://koa.bootcss.com/)

[awesome koa](https://github.com/ellerbrock/awesome-koa)

[awesome koa](https://github.com/fineen/awesome-koa)
