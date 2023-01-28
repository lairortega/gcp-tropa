const input = [{
    "name": "Box of Cohiba S1s",
    "unit_price": 35000,
    "quantity": 1,
    "antifraud_info": {
        "trip_id": "12345",
        "driver_id": "driv_1231",
        "ticket_class": "economic",
        "pickup_latlon": "23.4323456,-123.1234567",
        "dropoff_latlon": "23.4323456,-123.1234567"
    }
}];
const handler = require("../../../handler/orders");
let request = require("../../cgp/request");
const response = require("../../cgp/response");

request.data = input
handler.orders.create(request, response);