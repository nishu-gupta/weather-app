// Lect 43 Hello Express!!

// const express = require('express')

// const app = express()

// app.get('', (req,res) => {
//      res.send('Hello Express!!!!')
// })

// app.get('/help', (req, res) => {
//      res.send('Help Page')
// })

// app.listen('3000', ()=> {
//      console.log('Server is going on port 3000')
// })

//____________________________________Challange for Lect 43____________________________________________________

// const express = require('express')

// const app = express()

// app.get('', (req,res) => {
//    res.send('Hello Express!!!!')
// })

// app.get('/help', (req, res) => {
//      res.send('Help Page')
// })

// app.get('/about', (req,res) => {
//      res.send('About Page')
// })

// app.get('/weather', (req,res) => {
//      res.send('Weather Page')
// })

// app.listen('3000', ()=> {
//      console.log('Server is going on port 3000')
// })

//------------------------------------------------------------------------------------------------------------------------------------

//Lect 44 Serving up HTML and JSON

// const express = require('express')

// const app = express()

// app.get('', (req,res) => {
//      res.send('<h1>Hello Express!!!!<h1>')
// })

// app.get('/help', (req, res) => {
//      res.send('Help Page')
// })

// app.get('/about', (req,res) => {
//      res.send('About Page')
// })

// app.get('/weather', (req,res) => {
//      res.send('Weather Page)
//    

// app.listen('3000', ()=> {
//      console.log('Server is going on port 3000')
// })

//_______________________________Challenge for Lect 44________________________________________________

// const express = require('express')

// const app = express()

// app.get('', (req,res) => {
//      res.send('Hello Express!!!!')
// })

// app.get('/help', (req, res) => {
//      res.send('Help Page')
// })

// app.get('/about', (req,res) => {
//      res.send('<h1>About Page<h1>')
// })

// app.get('/weather', (req,res) => {
//      res.send({
//           forecast: 'its foggy today',
//           location: 'Patiala'
//      })
// })

// app.listen('3000', ()=> {
//      console.log('Server is going on port 3000')
// })

//------------------------------------------------------------------------------------------------------------------------------------


// Lect 45 Serving up Static Assets

// const path = require('path')

// const express = require('express')

// const app = express()

// const pathDirectory = path.join('__dirname', '../public')

// app.use(express.static(pathDirectory))

// app.get('', (req,res) => {
//      res.send('Hello Express!!!!')
// })

// // app.get('/help', (req, res) => {
// //      res.send('Help Page')
// // })

// // app.get('/about', (req,res) => {
// //      res.send('<h1>About Page<h1>')
// // })

// app.get('/weather', (req,res) => {
//      res.send({
//           forecast: 'its foggy today',
//           location: 'Patiala'
//      })
// })

// app.listen('3000', ()=> {
//      console.log('Server is going on port 3000')
// })

//___________________________________Challenge for lect 45_____________________________________________

// const path = require('path')

// const express = require('express')

// const app = express()

// const pathDirectory = path.join('__dirname', '../public')

// app.use(express.static(pathDirectory))

// app.get('', (req,res) => {
//      res.send('Hello Express!!!!')
// })

// app.get('/weather', (req,res) => {
//      res.send({
//           forecast: 'its foggy today',
//           location: 'Patiala'
//      })
// })

// app.listen('3000', ()=> {
//      console.log('Server is going on port 3000')
// })

//------------------------------------------------------------------------------------------------------------------------------------

// Lect 46 Serving up CSS, JS , images and more

// link the style.css, app.js and img file from public folder in the above code  

//-----------------------------------------------------------------------------------------------------------------------------------

// Lect 47 Dynamic pages with templating

// const path = require('path')
// const express = require('express')

// const app = express()

// const pathDirectory = path.join('__dirname', '../public')
// app.use(express.static(pathDirectory))

// app.set('view engine', 'hbs')

// app.get('', (req, res) => {
//      //res.render('index')
//      res.render('index', {
//           title: 'Learing a Nodejs',
//           name: 'Andrew Mead'
//      })
// })

// app.get('/about', (req,res) => {
//      res.render('about', {
//           title: 'I am Learing NodeJs',
//           name: 'I am Hitender'
//      })
// })

// app.get('/help', (req,res) => {
//      res.render('help', {
//           title: 'Helping in Coding',
//           name: 'I am Hitender'
//      })
// })



// app.get('/weather', (req,res) => {
//      res.send({
//           forecast: 'its foggy today',
//           location: 'Patiala'
//      })
// })

// app.listen('3000', ()=> {
//      console.log('Server is going on port 3000')
// })

//------------------------------------------------------------------------------------------------------------------------------------

//Lect 48 Customise the views directory

// const path = require('path')
// const express = require('express')

// const app = express()

// // define Paths for Express config
// const pathDirectory = path.join(__dirname, '../public')
// const viewPath = path.join(__dirname, '../templates')

// // setup static directory to serve
// app.use(express.static(pathDirectory))

// // setup handlers engine and views location
// app.set('views', viewPath)
// app.set('view engine', 'hbs')

// app.get('', (req, res) => {
//      //res.render('index')
//      res.render('index', {
//           title: 'Learing a Nodejs',
//           name: 'Andrew Mead'
//      })
// })

// app.get('/about', (req,res) => {
//      res.render('about', {
//           title: 'I am Learing NodeJs',
//           name: 'I am Hitender'
//      })
// })

// app.get('/help', (req,res) => {
//      res.render('help', {
//           title: 'Helping in Coding',
//           name: 'I am Hitender'
//      })
// })



// app.get('/weather', (req,res) => {
//      res.send({
//           forecast: 'its foggy today',
//           location: 'Patiala'
//      })
// })

// app.listen('3000', ()=> {
//      console.log('Server is going on port 3000')
// })

//------------------------------------------------------------------------------------------------------------------------------------

// Lect 49 Advanced Tempelating

// const path = require('path')
// const express = require('express')
// const hbs = require('hbs')


// const app = express()

// // define Paths for Express config
// const pathDirectory = path.join(__dirname, '../public')
// const viewPath = path.join(__dirname, '../templates/views')
// const partialPath = path.join(__dirname, '../templates/partials')

// // setup static directory to serve
// app.use(express.static(pathDirectory))

// // setup handlers engine and views location
// app.set('views', viewPath)
// app.set('view engine', 'hbs')
// hbs.registerPartials(partialPath)

// app.get('', (req, res) => {
//      //res.render('index')
//      res.render('index', {
//           title: 'Learing a Nodejs',
//           name: 'Andrew Mead'
//      })
// })

// app.get('/about', (req,res) => {
//      res.render('about', {
//           title: 'I am Learing NodeJs',
//           name: 'I am Hitender'
//      })
// })

// app.get('/help', (req,res) => {
//      res.render('help', {
//           title: 'Helping in Coding',
//           name: 'I am Hitender'
//      })
// })


// app.get('/weather', (req,res) => {
//      res.send({
//          forcast : 'its foggy today',
//           location: 'Patiala'
//      })
// })

// app.listen('3000', ()=> {
//      console.log('Server is going on port 3000')
// })

//------------------------------------------------------------------------------------------------------------------------------------

// Lect 50 404 Page

// const path = require('path')
// const express = require('express')
// const hbs = require('hbs')


// const app = express()

// // define Paths for Express config
// const pathDirectory = path.join(__dirname, '../public')
// const viewPath = path.join(__dirname, '../templates/views')
// const partialPath = path.join(__dirname, '../templates/partials')

// // setup static directory to serve
// app.use(express.static(pathDirectory))

// // setup handlers engine and views location
// app.set('views', viewPath)
// app.set('view engine', 'hbs')
// hbs.registerPartials(partialPath)

// app.get('', (req, res) => {
//      //res.render('index')
//      res.render('index', {
//           title: 'Learing a Nodejs',
//           name: 'Nishu'
//      })
// })

// app.get('/about', (req,res) => {
//      res.render('about', {
//           title: 'I am Learing NodeJs',
//           name: 'Hitender'
//      })
// })

// app.get('/help', (req,res) => {
//      res.render('help', {
//           title: 'Helping in Coding',
//           name: 'Hitender'
//      })
// })

// app.get('/weather', (req,res) => {
//      res.send({
//          forcast : 'its foggy today',
//           location: 'Patiala'
//      })
// })

// // app.get('/help/*', (req,res)=> {
// //      res.send('Help Page not found')
// // })

// // app.get('*', (req,res) => {
// //      res.send('My 404 page')
// // })

// app.get ('/help/*', (req,res)=> {
//      res.render('404', {
//           title: 404,
//           name: 'Nishu Gupta',
//           errorMessage: 'Help Page not found'
//      })
// })

// app.get ('*', (req,res)=> {
//      res.render('404', {
//           title: 404,
//           name: 'Nishu Gupta',
//           errorMessage: 'Page not found'
//      })
// })


// app.listen('3000', ()=> {
//      console.log('Server is going on port 3000')
// })

//------------------------------------------------------------------------------------------------------------------------------------

//Lect 54 the Query String

// const path = require('path')
// const express = require('express')
// const hbs = require('hbs')


// const app = express()

// // define Paths for Express config
// const pathDirectory = path.join(__dirname, '../public')
// const viewPath = path.join(__dirname, '../templates/views')
// const partialPath = path.join(__dirname, '../templates/partials')

// // setup static directory to serve
// app.use(express.static(pathDirectory))

// // setup handlers engine and views location
// app.set('views', viewPath)
// app.set('view engine', 'hbs')
// hbs.registerPartials(partialPath)

// app.get('', (req, res) => {
//      //res.render('index')
//      res.render('index', {
//           title: 'Learing a Nodejs',
//           name: 'Nishu'
//      })
// })

// app.get('/about', (req,res) => {
//      res.render('about', {
//           title: 'I am Learing NodeJs',
//           name: 'Hitender'
//      })
// })

// app.get('/help', (req,res) => {
//      res.render('help', {
//           title: 'Helping in Coding',
//           name: 'Hitender'
//      })
// })

// app.get('/weather', (req,res) => {
//      if(!req.query.address) {
//           return res.send({
//                Error: 'You have to provide a Address term'
//           })        
//      }
//      res.send({
//           address: req.query.address, 
//           forcast : 'its foggy today',
//           location: 'Patiala'
//      })   
    
// })

// app.get ('/help/*', (req,res)=> {
//      res.render('404', {
//           title: 404,
//           name: 'Nishu Gupta',
//           errorMessage: 'Help Page not found'
//      })
// })

// app.get('/products', (req, res) => {
//      if(!req.query.search) {
//           return res.send({
//                Error: 'You must provide a Search Term'
//           })
//      }
//      console.log(req.query.search)
//      res.send({
//           product: []
//      })
// })

// app.get ('*', (req,res)=> {
//      res.render('404', {
//           title: 404,
//           name: 'Nishu Gupta',
//           errorMessage: 'Page not found'
//      })
// })

// app.listen('3000', ()=> {
//      console.log('Server is going on port 3000')
// })

//------------------------------------------------------------------------------------------------------------------------------------

// Lect 55 Building a JSON Http endpoints

const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode = require('./utilis/geoCode.js')
const forecast = require('./utilis/forecast.js')

const app = express()
const port = process.env.PORT || 3000   // FROM LECT 67

// define Paths for Express config
const pathDirectory = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// setup handlers engine and views location
app.set('views', viewPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialPath)

// setup static directory to serve
app.use(express.static(pathDirectory))

app.get('', (req, res) => {
     //res.render('index')
     res.render('index', {
          title: 'Weather',
          name: 'Nishu'          
     })
})

app.get('/about', (req,res) => {
     res.render('about', {
          title: 'About Me',
          name: 'Hitender'
     })
})

app.get('/help', (req,res) => {
     res.render('help', {
          helptext: 'This is some helpful text.',
          title: 'Helping in Coding',
          name: 'Hitender'
     })
})

app.get('/weather', (req,res) => {
     if(!req.query.address) {
          return res.send({
               Error: 'You have to provide a Address term!'
          })        
     }     

     geoCode(req.query.address, (error, { Latitude, Longitude, Location} = {}) => {

          // destructuring lect 40 part
          
          if(error) {
               return res.send({error})
          }

          //forecast(data.Latitude, data.Longitude, (error, forecastData) => {

          forecast(Latitude, Longitude, (error, forecastData) => {             // destructuring lect 40 part
               if(error) {
                    return res.send({
                         Error: 'You should provide a address2'
                    })
               }

               res.send({          
                    address: req.query.address,  
                    Location: Location,    
                    forcast : forecastData           
               })    
          })
     })      
    
})

app.get('/products', (req, res) => {
     if(!req.query.search) {
          return res.send({
               Error: 'You must provide a Search Term'
          })
     }
     console.log(req.query.search)
     res.send({
          products: []
     })
})

app.get ('/help/*', (req,res)=> {
     res.render('404', {
          title: '404',
          name: 'Nishu Gupta',
          errorMessage: 'Help Page not found'
     })
})



app.get ('*', (req,res)=> {
     res.render('404', {
          title: '404',
          name: 'Nishu Gupta',
          errorMessage: 'Page not found'
     })
})

// app.listen('3000', ()=> {
//      console.log('Server is going on port 3000')
// })

app.listen(port, ()=> {                 // from lect 67
     console.log('Server is going on port ' + port)
})

