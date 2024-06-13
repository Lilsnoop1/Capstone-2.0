import bodyParser from "body-parser";
import express from "express";
import axios from "axios";
import ejs from "ejs"
const port = 10000;
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.render("index.ejs");

})

app.post("/submit", async (req,res)=>{
    try{
        const day= req.body.text[0];
        const month= req.body.text[1];
        const year= req.body.text[2];
        const key = "3bfdf14ffa6a4086b655be28e5cced0c";
        const response = await axios.get(`https://holidays.abstractapi.com/v1/?api_key=3bfdf14ffa6a4086b655be28e5cced0c&country=US&year=${year}&month=${month}&day=${day}`);
        const result = response.data;
        res.render("index.ejs",{
            Titty: result,
            tit: result.length
        })
    }catch (error){
        console.log(error.message)
    }
})


app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
})
