module.exports = {
    orders: async (data) => {
        let payload = {
        "currency": "MXN",
        "customer_info": {
          "email": "usuario@example.com",
          "name": "Mario Perez",
          "phone": "+5215555555555",
          "antifraud_info": {
            "paid_transactions": 4
          }
        },
        "checkout":{
            "type": "Integration",
            "allowed_payment_methods": ['card']
        },
        "line_items": [{
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
        }]
      }
    }
}