module.exports = {
    users : {
        add: (req, response) => {
            console.log("QUERY =>", req.query);
            console.log("body =>", req.body);
            response
                .status(200)
                .send({
                    data: {
                        status: "ok",
                        content: {
                            name: "Lair",
                            rol: "reader,writer"
                        }
                    }
                });
        }
    }
}
