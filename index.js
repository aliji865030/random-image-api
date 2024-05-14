const express = require("express");

const app=express();


let result=[];
function getImg(){
    const url="https://api.unsplash.com/photos/random?client_id=_fQKKieztygyfJM4s4OWJROZnYHTfbH5xrkSIpU0cIU"
    fetch(url)
    .then(res=>res.json())
    .then((data)=>{
        result=[]

        const apiData={
            url:data.urls.full,
            description:data.alt_description
        }
        result.push(apiData)
    })
    .catch((err)=>console.log(err))
}


app.get("/get-data",(req,res)=>{
    getImg()
    res.json(result);
})

app.listen(8090,()=>console.log("server is up and running on 8080"))