console.log("line 1");
console.log("line2");const express = require('express');
const bodyParser = require('body-parser');

const prod= require('./product');
const userRouter=require('./user');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(prod);
app.use(userRouter);


app.listen(3000, '0.0.0.0', () => {
    console.log(`Server started on port 3000`);
});






