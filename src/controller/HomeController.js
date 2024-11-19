import express from "express"
const getHomePage = (req,res) =>{
    return res.render("main")
}
export default getHomePage