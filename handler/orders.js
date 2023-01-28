const provider = require("../proviers/conekta/");
module.exports = {
    orders: {
        create: async (req, res) => {
            try {
                if(req.method.toLowerCase() == 'options'){
                    return res
                    .status(200)
                    .setHeader("Access-Control-Allow-Origin", "*")
                    .send({});
                }
                console.log("Inicio petición:", req.body);
                let input = {
                    "currency": "MXN",
                    "customer_info": {
                        "email": "usuario@example.com",
                        "name": "Mario Perez",
                        "phone": "+5215555555555",
                        "antifraud_info": {
                            "paid_transactions": 4
                        }
                    },
                    "checkout": {
                        "type": "Integration",
                        "allowed_payment_methods": ['card']
                    },
                    "line_items": JSON.parse(req.body)
                }
                const customer = await provider.customers.create({
                    "email": "usuario@example.com",
                    "name": "Invitado",
                    "phone": "+5215555555555"
                });
                input.customer_info = {
                    "customer_id": customer.id
                }
                console.log("Data conekta:", input);
                const checkout = await provider.orders.create(input);            
                res
                    .status(200)
                    .setHeader("Access-Control-Allow-Origin", "*")
                    .send(checkout);
            } catch (error) {
                res
                    .status(error.response.status)
                    .setHeader("Access-Control-Allow-Origin", "*")
                    .send(error.response.data);
            }
        }
    }
}
