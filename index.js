// console.log("Hi");

// person = "Foram"

// charactor = {
//     name: person,
//     age: 28,
// }
// console.log(person)
// console.log(charactor)
 
const express = require('express')

const app = express()

app.get('/', (request, response) => {

    // console.log("Request received")
    // response.send('Welcome');
    response.json({msg: 'welcome'});
})

app.listen(3333, () =>{
    console.log("The server is up and running on port 3333")
})