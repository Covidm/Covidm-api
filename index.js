const express = require('express')
const fs = require('fs')
const { createSecureServer } = require('http2')
const app = express()
const port = 3000

app.set('src' , './src')


app.get('/', (req, res) => {
  fs.readFile('./src/test.json' , 'utf8' , (err,data) => {
      if(err){
          throw err
      }
      res.send(JSON.parse(data))
  })
})

app.get('/case' , (req,res) => {
  fs.readFile('./src/Covid/total_cases_india.json' , 'utf8' , (err,data) => {
    if(err){
      throw err
    }
    res.send(JSON.parse(data))
  })
})


app.get('/api/cases/:id' , (req,res) => {
  
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})