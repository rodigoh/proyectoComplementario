const { body } = require('express-validator');
const { user } = require('../database/models/index')
const register = [
    body('username').notEmpty().withMessage('El username no puede quedar vacío.').bail().isEmail().withMessage('El formato de username no es válido.').bail().custom(async (value) => {
        let users = await user.findAll();
        users = users.map(u => u.username)
        if(users.includes(value)){
            throw new Error('El username ya esta registrado')
        }
        return true
    }),
    body('password').notEmpty().withMessage('La contraseña no puede quedar vacía.').bail().isLength({min : 4}).bail()]

    module.exports = register;