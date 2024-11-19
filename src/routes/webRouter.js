import express from "express";
import getHomePage from "../controller/homecontroller";
import userController from "../controller/userController"; // Đổi từ userModel sang usercontroller

const router = express.Router();

/**
 * 
 * @param {*} app : express  
 */
const initWebRoutes = (app) => {
    router.get("/", getHomePage);
    router.get('/about', (req, res) => {
        res.send('about');
    });
    router.get("/list", userController.getAllUser); // Đảm bảo sử dụng đúng đối tượng controller
    return app.use("/", router);
};

export default initWebRoutes;
