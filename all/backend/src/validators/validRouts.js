const { celebrate, Segments, Joi} = require ('celebrate')

module.exports = {
    isValidOng(){
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required().min(11).max(13),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2),
            })
        })
    },
    isValidIncPage(){
        return celebrate({
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number(),
            })
        })
    },
    isValidListOng(){
        return celebrate({
            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required(),
            }).unknown()
        })
    },
    isDeleteOfInc(){
        return celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required(),
            })
        })
    }
}