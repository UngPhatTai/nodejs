import express from 'express';
import dotenv from 'dotenv';
import myDateTime from './date';
import { getParamsURL } from './getURL';
import configViewEngine from './configs/viewEngine';
import initWebRoutes from './routes/webRouter';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Đảm bảo giá trị mặc định cho cổng

// Gọi hàm configViewEngine để thiết lập view engine
configViewEngine(app);

// Gọi hàm initWebRoutes để khởi tạo các route
initWebRoutes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/date', (req, res) => {
    res.send(myDateTime());
});

app.get('/about', (req, res) => {
    res.render("about");
});

// app.get('/home');

app.get('/getURL', (req, res) => {
    const params = getParamsURL(req);
    res.send(`Params: ${params}`);
});

app.get('/ejs', (req, res) => {
    res.render("test");
});
