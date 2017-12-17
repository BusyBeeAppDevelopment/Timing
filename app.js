var moment = require('moment');
var express = require('express');
var app = express();

var rightMeow =  moment().format();

// Make sure moment is working!!
console.log("The current time: " + rightMeow + "\nWe're getting ready for take off!");

var parkingObject = {
    RFID:22123,
    status: "Occupied",
    timestamp: null
};


// For time generation, on the parking spot conditions
/*
var holder = 0;
while(holder < 58){
    someSecond = moment().format('s');
    console.log(someSecond);
    holder++;
    console.log('Holder: '  + holder);

}
*/

app.get('/', (req, res) => {
    parkingObject.timestamp = moment().format('s');
    res.send(parkingObject);
});

app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});