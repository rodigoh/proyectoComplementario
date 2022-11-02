const { body } = require('express-validator');
const { user } = require('../database/models/index')
const {compareSync} = require('bcryptjs')

const login = [
body('username').notEmpty().withMessage('El username no puede quedar vacío.').bail().custom(async (value) => {
  let users = await user.findAll();
  users = users.map(u => u.username)
  if(!users.includes(value)){
      throw new Error('El username no esta registrado')
  }
  return true
}),
// Password
body('password').notEmpty().withMessage('La contraseña no puede quedar vacía.').bail().isLength({min : 4}).bail().custom((async (value,{req}) =>{
  let {username} = req.body
  let users = await user.findAll();
  let userDB = users.find(u => u.username === username)

  if(!userDB){
    throw new Error("Usuario no encontrado")
  }

  if(!compareSync(value,userDB.password)){
    throw new Error("La contraseña es incorrecta")
  }

  return true

}))
]

module.exports = login;