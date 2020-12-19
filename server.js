

const express = require('express')

const app = express()


const logger = (req , res , next) => {
    console.log(req.method , " at " , req.url)
    var now = new Date()
    if(now.getDay() === 6 || now.getDay() === 7) {
    if(now.getHours()< 9 || now.getHours() > 17){
        res.status(404).send("SORRY WE ARE OUT OF OUR SERVICES ! WE ARE WORKING FROM MONDY TO FIDAY, FROM 9 TO 17")
    }
    }
    next()
}

app.use(logger)

app.use(express.static("./Public"))











// running the server on localhost 
const port = 5000;
app.listen(port , () => {
    console.log(`The server is running on port http://localhost:${port}`)
})