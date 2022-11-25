const express=require("express")
const app=express()
const cors=require("cors")
const port=4000
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
	res.send("im new server")
})
app.post("/newData",(req,res)=>{
	const {name,password,group,gender,number,email}=req.body
	console.log(name,password,group,gender,number,email)
	res.send("Data Added")
})

app.listen(port,()=>console.log("server is loaded"))