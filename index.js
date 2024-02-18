// console.log("hello world in the Backend");

const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res)=>{
    res.send(`'Home
     Hello Express thr world in backend Service'`)
   
})

app.get('/store', (req, res)=>{
    res.send('Store')
})
app.get('/store/product', (req, res)=>{
    res.send('Products')
})

app.listen(port,()=>{
    console.log(`hellow ${port}`);
})
