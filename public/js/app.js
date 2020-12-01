console.log('Client side JavaScript file is loaded!!!')

//Lect 57

// fetch('http://puzzle.mead.io/puzzle').then((response)=> {
//      response.json().then((data)=> {
//           console.log(data)
//      })
// })



// fetch('http://localhost:3000/weather?address=srinagar').then((response) => {
//      response.json().then((data)=> {
//           if(data.error) {
//                console.log(data.error)
//           } else {
//                console.log(data.Location)
//                console.log(data.forcast)
//           }
//      })
// })

//------------------------------------------------------------------------------------------------------------------------------------

//Lect 58

// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')

// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//      response.json().then((data)=> {
//           if(data.error) {
//                console.log(data.error)
//           } else {               
//                console.log(data.Location)
//                console.log(data.forcast)
//           }          
//      })
// })

// weatherForm.addEventListener('submit', (e) => {
//      e.preventDefault()

//      const location = search.value
//      console.log(location)
// })   

//-----------------------------------------------------------------------------------------------------------------------------------

//Lect 59

// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')
// const messageOne = document.querySelector('#message-1')
// const messageTwo = document.querySelector('#message-2')
// messageOne.textContent = 'Loading....'
// messageTwo.textContent = ' '


// weatherForm.addEventListener('submit', (e) => {
//      e.preventDefault()

//      const location = search.value

//      fetch('http://localhost:3000/weather?address=' + location).then((response) => {
//      response.json().then((data)=> {
//           if(data.error) {
//                messageOne.textContent = data.error
//                //console.log(data.error)
//           } else {
//                messageOne.textContent = data.Location
//                messageTwo.textContent = data.forcast
//                //console.log(data.Location)
//                //console.log(data.forcast)
//           }          
//           })
//      })      
// })

//------------------------------------------------------------------------------------------------------------------------------------

// lect 67

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e) => {
     e.preventDefault()

     const location = search.value

     fetch('/weather?address=' + location).then((response) => {
     response.json().then((data)=> {
          if(data.error) {
               messageOne.textContent = data.error
               //console.log(data.error)
          } else {
               messageOne.textContent = data.Location
               messageTwo.textContent = data.forcast
               //console.log(data.Location)
               //console.log(data.forcast)
          }          
          })
     })      
})