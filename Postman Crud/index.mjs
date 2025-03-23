import express from "express";
import userSchema from "./schema/index.mjs";
const app = express()
const port = 7000

app.use(express.json())


const users = [
]

app.use("/",(req,res,next)=>{
  console.log("middleware");
  next();
  console.log("req-->",req.originalUrl); //kis end point per sabse zyda request aaya hai 
})

app.get('/user', (req, res) => {
  try {
    res.send(users)
  }
  catch (err) {
    res.status(500).send({ message: "Error fetching users" })
  }
})

app.post('/user', async(req, res) => {
  try {
    console.log("Request Body:", req.body);
    await userSchema.validateAsync(req.body);
    const id = new Date().getTime().toString(36)
    users.push({ ...req.body, id })
    res.status(201).send({message: "user Added"})
  }
  catch (err) {
    console.log("err",err)
    res.status(400).send({ message: "inavlid data",error: err.message })
  }
});

app.delete('/user/:id', (req, res) => {
  try{
    const { id } = req.params;
    const index = users.findIndex(obj => obj.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      res.status(200).send({ message: "user deleted" })
    }
    else {
      res.status(404).send({ message: "user not found" })
      }
  }
 catch(err){
     res.status(500).send({ message: "Error deleting user" })
 }
 
})

app.put('/user/:id', async(req, res) => {
  try{
    await userSchema.validateAsync(req.body);
    const { id } = req.params;
    const index = users.findIndex(obj => obj.id === (id));
    if (index !== -1) {
      users.splice(index, 1, { ...req.body, id });
      res.status(200).send({ message: "user updated" })
    }
    else {
      res.status(404).send({ message: "user not found" })
      }
  }
 catch(err){
  res.status(500).send({ message: "Error updating user" })
 }
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})