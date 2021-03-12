// console.log("Hi");

// person = "Foram"

// charactor = {
//     name: person,
//     age: 28,
// }
// console.log(person)
// console.log(charactor)
 
const express = require('express')

const morgan = require('morgan')
const bodyParser = require('body-parser');
const app = express()

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
//app.use(morgan('combined'));


app.get('/', (request, response) => {

     //console.log("Request received")
    // response.send('Welcome');
    //response.json({msg: 'welcome'});
    

    //Query Parameters
    // console.log('Query Parameters');
    // console.log(request.query)

    //Body Parameter

    console.log('Body Parameters');
    console.log(request.body)

      
    response.end()
})

app.get('/:first_name/:last_name/:age', (request, response)=>{
     //Route Patemeters

    //  console.log('Route Parameters');
    //  console.log(request.params)
    //  response.end()
})

app.listen(3333, () =>{
    console.log("The server is up and running on port 3333")
})