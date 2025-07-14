import Joi from 'joi';

const FormValidator = Joi.object({
    name: Joi.string()
        .trim()
        .min(2)
        .max(100)
        .pattern(/^[A-Za-zÄäÖöÜüẞß0-9\s.,:_\-()]+$/)
        .messages({
            'string.min': 'Minimum 2 characters required',
            'string.pattern.base': 'Only Latin, German letters, numbers and basic symbols allowed'
        })
});

export { FormValidator };