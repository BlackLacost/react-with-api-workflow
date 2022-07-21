import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 4000

app.get('/api/products', (req, res) => {
  res.json({ products: 'products' })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

app.listen(port, (err) => {
  if (err) return console.log(err)
  console.log('Server running on port: ', port)
})
