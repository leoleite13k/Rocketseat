const express = require('express')
const routes = express.Router()
const UserController = require('./app/controllers/UserController')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)
const SessionController = require('./app/controllers/SessionController')

routes.get('/', SessionController.create)
routes.post('/signin', SessionController.store)

routes.get('/signup', UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

routes.get('/app/dashboard', (req, res) => {
  console.log(req.session.user)
  res.render('dashboard')
})
module.exports = routes
