const express = require('express');
const app = express();




const bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(5000,()=>{
    console.log('server started on port 5000')
})

app.get('/api/v1',(req, res)=> {
    res.send('Hello World!')
})
app.get('/',(req, res)=> {
    res.send('Hello Andréa!')
})
