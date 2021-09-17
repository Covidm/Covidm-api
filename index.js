const express = require('express')
const fs = require('fs')
const { createSecureServer } = require('http2')
const app = express()
const port = process.env.PORT || 8080
const axios = require('axios').default;

const api ="http://32e5-122-179-97-105.ngrok.io/case"


app.set('src' , './src')


app.get('/', (req, res) => {
  fs.readFile('./src/test.json' , 'utf8' , (err,data) => {
      if(err){
          throw err
      }
      res.send(JSON.parse(data))
  })

})
// india cases

app.get('/case' , (req,res) => {
  fs.readFile('./src/Covid/total_cases_india.json' , 'utf8' , (err,data) => {
    if(err){
      throw err
    }
    res.send(JSON.parse(data))
  })
})


// api test

// const searchForCountry = async countryName => {
//   loading.style.display = "block";
//   errors.textContent = "";
//   try {
//     const response = await axios.get(`${api}/${countryName}`);
//     if(response.data ==="Country not found"){ throw error;  }
//     loading.style.display = "none";
//     todayCases.textContent = response.data.todayCases;
//     todayDeaths.textContent = response.data.todayDeaths;
//     cases.textContent = response.data.cases;
//     recovered.textContent = response.data.recovered;
//     deaths.textContent = response.data.deaths;
//     tests.textContent =  response.data.totalTests;
//     results.style.display = "block";
//   } catch (error) {
//     loading.style.display = "none";
//     results.style.display = "none";
//     errors.textContent =  errornotfound();
//   }
// };







app.get('/api/cases/:id' , (req,res) => {
  
})

app.get('/all' , (req,res) => {
  fs.readFile('./src/Covid/country.json' , 'utf8' , (err,data) => {
    if(err){
      throw err
    }
    res.send(JSON.parse(data))
  })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})