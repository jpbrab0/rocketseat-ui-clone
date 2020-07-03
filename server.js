const express = require("express")
const server = express()
const nunjucks = require("nunjucks")
const courses = require("./data")
const modules = require("./cursos")

server.use(express.static("public"))

server.set("view engine", "njk")
nunjucks.configure("src", {
    express:server,
    autoescape:false,
    noCache:true,
})

server.get("/", (req,res) => {
    return res.render("menu")
})
server.get("/conteudo", (req,res) => {
    return res.render("conteudo", {cursos:courses})
})
server.get("/starter",(req, res) => {
    return res.render("starter", {cursos:modules})
})
server.use((req,res) => {
    res.status(404).render("not-found");
})


server.listen(2222)