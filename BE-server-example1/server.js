import express from "express"
import axios from "axios"
import {readFile} from "node:fs/promises"
// 1. Prepare the application
// This creates server object
const app = express()

// 2. Add endpoints
//First endpoint - "GET /"
// app.get("/", async (req, res) => {
//     console.log("GET /")
//     // fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //    .then(response => response.json())
//     //    .then((json) => {console.log(json)});
//     // res.send("<h1>todo</h1>")
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
//         const data = await response.json();
//         res.send(data);
//     } catch (err) {
//         res.status(500).send(err.message)
//     }
// })
app.get("/", (req, res) => {
    axios({
        method: "get",
        // url: "https://jsonplaceholder.typicode.com/todos/3",
        url: "https://google.com/jhfkjdjkdfkjdfnfjsbfdkjdbfvjadjfksnbkjsdvbkjdfbv.png",
    })
       .then(function (response) {
           console.log(response.data)
        res.send("Hello RESPONSE!")
    })
       .catch(function (error) {
           console.log(error.message, "<-- это он")
           res.send(error)
    })
    console.log("sending responce to client")
})



//Second endpoint

app.get("/chush", (req, res) => {
    // console.log("Chush is running!")
    //
    // const luckNumber = Math.round(Math.random() * 20)
    //
    // res.send("<h1>Kakaya CHUSH!" + luckNumber + "</h1>")
    // console.log("Kakaya CHUSH!" + luckNumber)

    readFile("test.txt", {encoding: "utf-8"})
    .then(function (response) {
        console.log(response)
        res.send({data: response})
    })


})
// app.get("/chush", (req, res) => {
//     res.send("Kakaya CHUSH 2!")
// })

app.get("/pet", (req, res) => {
    const pet = {
        name: "Tuzik",
        age: "???",
    }
    res.send(pet)
})

app.get("/*splat", (req, res) => {
    res.send("Wildcard")
})





// 3. Start application
app.listen(3000, () => {
    console.log("Server running on port 3000 and listening to http://localhost:3000!")
})
