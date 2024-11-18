import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoutes from './routes/web';
import dotenv from 'dotenv';
import http from 'http'; // Đúng cú pháp import cho module HTTP
import getCurrentDate from './date'; // Đảm bảo rằng module date được export đúng cách
import * as getURL from './getURL'; // Import toàn bộ module getURL

dotenv.config();

const app = express();


// Config view engine
configViewEngine(app);

// Init web routes
initWebRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Tạo HTTP Server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write(getCurrentDate() + "<br>");
    res.write(getURL.getPath(req) + "<br>");
    res.write(getURL.getParamsURL(req) + "<br>");
    res.write('Hello KTPM0121, chúc bạn thành công với Nodejs');
    res.end();
}).listen(8080);
