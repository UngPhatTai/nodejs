import express from 'express'
import dotenv from 'dotenv'
import myDateTime from './date';
import { getParamsURL } from './getURL';
import configViewEngine from './configs/viewEngine'
dotenv.config();
const app = express()
configViewEngine(app);
const port=process.env.PORT
app.get('/', (req, res) => {
res.send('Hello World!')
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`) })
app.get('/date',(req,res) => {
    res.send(myDateTime())
});
app.get('/about',(req,res) => {
    res.render("about")
});
app.get('/home',(req,res) => {
    res.render("home")
});
app.get('/getURL', (req, res) => { 
    const params = getParamsURL(req);
     res.send(`Params: ${params}`);
 });
app.get('/ejs', (req,res) => {
    res.render("test")
})
