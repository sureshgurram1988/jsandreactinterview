//Node js
//http modules
let http = require('http')


http.createServer((req, res) => {
        //res.write("hello world")
        res.write(req.url);
        res.end();
        console.log("server is Running...")
}).listen(8080)

//File system modules
let http = require('http');
let fs = require("fs")


http.createServer((req, res) => {
      // fs.writeFile("test.txt", "Thank you", (err, data) => {
        //fs.readFile("test.txt",  (err, data) => {
        //fs.appendFile("test.txt", "Thank you", (err, data) => {
            fs.unlink("test.txt",  (err) => {
                if(err){
                    throw err
                }
                console.log("file deleted")

       })
        console.log("server is Running...")
}).listen(8080)

// url Module
let url = require('url');

let adrs = "https://www.youtube.com/watch?v=MY2Vxtfn5Tw";
let q = url.parse(adrs, true);
//console.log(q.host)
//console.log(q.path)
console.log(q.search)

//Node Js npm Modules for this  we need toinstall any  npm package and we can use it like npm i upper-case

let http = require('http')
let uc= require('upper-case')

http.createServer((req, res) => {
        res.write(uc.upperCase("hello world"));
        res.end();
}).listen(8080)

//node js Email

let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"gsuresh.digital@gmail.com",
        pass:"Suresh@123"
    }
})
let options = {
    from:"gsuresh.digital@gmail.com",
    to:"sureshgurrammca@gmail.com",
    subject:"urgent requirement",
    body:"need to attend that"
}
transporter.sendMail(options, (err, info) => {
        if(err){
            console.log(err)
        }
        else{
            console.log("mail sent" + info.response)
        }

})