import express from "express"
// 1. Prepare the application
// This creates server object
const app = express()

// 2. Add endpoints
//First endpoint - "GET /"
app.get("/", (req, res) => {
    console.log("GET /")
    res.send("Hello World!!!")
})



//Second endpoint
app.get("/chush", (req, res) => {
    console.log("Chush is running!")

    const luckNumber = Math.round(Math.random() * 20)

    res.send("<h1>Kakaya CHUSH!" + luckNumber + "</h1>")
    console.log("Kakaya CHUSH!" + luckNumber)
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
