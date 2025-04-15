const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/employees',require('./routes/employees'));
app.use('/api/reviews',require('./routes/reviews'));
app.use('/api/feedbacks',require('./routes/feedbacks'));

mongoose.connect("mongodb://localhost:27017/peerReview").then(()=>{
    console.log("MongoDB Connected");
    app.listen(5000,()=>
    console.log('server running on port 5000'));
})
.catch((err)=>
console.log(err));