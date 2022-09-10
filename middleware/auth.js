module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) { //req.isAuthenticated()是 Passport.js 提供的函式，會根據 request 的登入狀態回傳 true 或 false
      return next()
    }
    req.flash('warning_msg', '請先登入才能使用！')  // 設定warning_msg的訊息
    res.redirect('/users/login')
  }
}