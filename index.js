import express from 'express';
const app = express();
import path from 'path';
// render html, helps to embed javascript directory inside html
import 'ejs';

// for parsing application json/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'));

const port = 8080;

app.get('',(req, res)=>{
    res.render("home")
});


//code goes here 


app.listen(port,() =>{
    console.log(`Server is listening on port ${port}`)
});
