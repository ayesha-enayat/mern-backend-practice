import express from "express";
// import userSchema from "./schema/index.mjs";
import router from "./routes/index.mjs";
const app = express()
const port = 11000

app.use(express.json())



const users = [
]

app.get('/',(req,res)=>{
  res.send('Hello World')
})

app.use("/api",router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})