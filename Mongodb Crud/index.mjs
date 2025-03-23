import express from "express";
import router from "./routes/index.mjs";
import mongoose from "./db/index.mjs";
import 'dotenv/config'

const app = express()
const port = 12000

app.use(express.json())
mongoose.connection.on('error',(err)=>{
  console.log('Database Error',err)
})
mongoose.connection.on("open", () => {
  console.log("connected to db")
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use("/api", router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})