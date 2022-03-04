const express=require("express")
const app = express();
const port=5000;

// const userRouter=require("./routes/route");
// app.use("/",userRouter);

let currentData= new Date()
reqTime=(req,res,next)=>{
    console.log(req.originalURL,currentData.getDay())
    if (
        currentData.getHours()>9 && currentData.getHours()<17
    )
    next()
}








app.use(express.static("views"))
app.listen(port);
