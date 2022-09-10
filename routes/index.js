//總路由
// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const home = require('./modules/home')// 引入 home 模組程式碼
const todos = require('./modules/todos')// 引入 todos 模組程式碼
const users = require('./modules/users') // 引入 users 模組程式碼
const auth = require('./modules/auth')
const { authenticator } = require('../middleware/auth')  // 載入middleware物件中的 authenticator（middleware.authenticator）

//要注意路由順序避免重新導向的次數過多（將首頁根目錄的放最下面）
// 將網址結構符合 /todos 字串開頭的 request 導向 todos 模組 
router.use('/todos', authenticator, todos)
//將網址結構符合 /users 字串開頭的 request 導向 users 模組
router.use('/users', users)
//將網址結構符合 /auth 字串開頭的 request 導向 auth 模組
router.use('/auth', auth)
// 將網址結構符合 / 字串的 request 導向 home 模組 
router.use('/', authenticator, home)

module.exports = router // 匯出路由器