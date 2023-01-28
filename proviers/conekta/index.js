const axios = require("axios");

module.exports = {
    customers: {
        create: async (data) => {
            console.log("Llamando a conekta (customers).");
            const customer = await axios({
                method: 'post',
                url: `${process.env.conekta_base_url}/customers`,
                headers: {
                    'Authorization': `Bearer ${process.env.conekta_private_key}`,
                    'Accept': 'application/vnd.conekta-v2.0.0+json'
                },
                data: data
            });
            console.log("Usuario conekta creado");
            return customer.data;
        }
    },
    orders: {
        create: async (data) => {

            console.log("Llamando a conekta (orders).");

            console.log("data a conekta orders.", data);
            const orders = await axios({
                method: 'post',
                url: `${process.env.conekta_base_url}/orders`,
                headers: {
                    'Authorization': `Bearer ${process.env.conekta_private_key}`,
                    'Accept': 'application/vnd.conekta-v2.0.0+json'
                },
                data: data
            });

            console.log("orden creada.");
            return orders.data;
        }
    }
}