const express = require('express')
const app = express()



app.get('/', (req,res)=>{
    res.send("hello");
})

app.get('/color', (req,res)=> {
    res.send('colors')
})


app.get('/template', (req,res)=> {
    res.send('template')
})
app.listen(8080, ()=> console.log('connected'))