const Joi = require("joi");

module.exports = {
    register (req, res, next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp("^[a-zA-z0-9]{8,32}$")
            )
        };

        const {error, value} = Joi.validate(req.body, schema);
        if(error){
            switch (error.details[0].context.key){
                case "email":
                    res.status(400).send({
                  error: "Napíšte správnu Email adresu."
                    });
                break;
                case "password":
                    res.status(400).send({
                        error: "Heslo musí mať: medzi 8-32 znakov."
                    });
                    break;
                default:
                    res.status(400).send({
                        error: "Nesprávne registračné informácie."
                    });

            }

        }else{
        next()
        }
    }
};