import express from 'express'

const servak = express()

servak.get('/', (req, res) => {
   res.send('it is a /')
})
servak.get('/pas', (req, res) => {
   const names = ['George', 'Alex', 'Nika', 'Giorgi', 'Luka']
   const randomIndex = Math.floor(Math.random() * names.length)
   const randomName = names[randomIndex]

   const id = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, '0')


   const chelovek = {
      id: +id,
      name: randomName,
   }
   console.log(typeof chelovek.id)

   res.send(chelovek)

})
servak.get('/*splat', (req, res) => {
   res.send("<h1>It's a *</h1>")
})



servak.listen(3000, () => {
   console.log("i am listenining for you babe to http://localhost:3000")
})