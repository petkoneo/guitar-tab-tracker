module.exports = {
    register(req, res) {
            res.send({
            message: `Hello ${req.body.email}! You user was registered! Have fun.`
        })
    }
};