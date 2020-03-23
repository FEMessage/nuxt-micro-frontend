module.exports = (headers) => {
  return (req, res, next) => {
    // req 是 Node.js http request 对象

    // res 是 Node.js http response 对象
    Object.keys(headers).forEach((key) => {
      res.setHeader(key, headers[key])
    })

    // next是一个调用下一个中间件的函数
    // 如果您的中间件不是最终执行，请不要忘记在最后调用next！
    next()
  }
}
