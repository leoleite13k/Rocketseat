const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoscape: true,
  express: app,
  watch: true
})

app.set('view engine', 'njk')
app.use(express.urlencoded({ extended: false }))

const midCheckAgeQueryParam = (req, res, next) => {
  const { age } = req.query

  if (!age) {
    return res.redirect('/')
  }
  return next()
}

app.get('/', (req, res) => {
  return res.render('start')
})

app.get('/minor', midCheckAgeQueryParam, (req, res) => {
  const { age } = req.query

  return res.render('minor', { age })
})

app.get('/major', midCheckAgeQueryParam, (req, res) => {
  const { age } = req.query

  return res.render('major', { age })
})

app.post('/check', (req, res) => {
  const { age } = req.body

  if (age >= 18) {
    return res.redirect(`/major?age=${age}`)
  } else {
    return res.redirect(`minor?age=${age}`)
  }
})

app.listen(3000)
