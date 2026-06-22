import express from "express"
import db from "./db.js"
// 1
const app = express()
app.use(express.json())

// db.data.posts.push({id:1, content:"Alex"})
// db.write()
// console.log(db.data)
// const newUser = {
//    firstName: "John",
//    lastName: "Doe",
//    age: 55,
//    password: "123456",
// }
//
// const config = {
//    method: "POST",
//    body: JSON.stringify(newUser),
//    headers: {
//       contentType: "application/json",
//    }
// }
// fetch("http://localhost:8080", config)
// .then(res => res.json())
// .then(data => console.log(data))
// 2
app.get("/", (req, res) => {
   res.send("Root GET")
   console.log(req.url)
})

app.post("/", async (req, res) => {
   console.log("это реквест.боди", req.body)
   db.data.posts.push(req.body)
   await db.write()
   res.send("Root POST")
})

//3
app.listen(8080, () => {
   console.log("App listening on port 3000 at http://localhost:8080")
})
