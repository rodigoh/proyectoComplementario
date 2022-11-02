const { hashSync } = require('bcryptjs')
const { validationResult } = require("express-validator");
const { user } = require("../database/models/index");
const usersController = {
  register: async (req, res) => {
    return res.render("users/register");
  },
  process: async (req, res) => {
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    if (errors && errors.length > 0) {
      return res.render("users/register", {
        oldData: req.body,
        errors: validaciones.mapped(),
      });
    }
    req.body.password = hashSync(req.body.password, 10);

    req.body.rol = String(req.body.name)
      .toLocaleLowerCase()
      .includes("@movies");

    await user.create({...req.body,created_at: Date.now(), updated_at: null, email: req.body.name});

    return res.redirect(`/users/login`);
  },

  login: async (req, res) => {
    return res.render("users/login");
  },
  access: async (req, res) => {
    let validaciones = validationResult(req);
    let { errors } = validaciones;
    if (errors && errors.length > 0) {
      return res.render("users/login", {
        oldData: req.body,
        errors: validaciones.mapped(),
      });
    }

    let users = await user.findAll({
      includes: {
        all: true
      }
    });
    let userDB = users.find((u) => u.name === req.body.name);
    req.session.user = userDB;
    return res.render('users/profile');
  },
  logout: function (req, res) {
    delete req.session.user;
    return res.redirect("/users/login");
  },
};
module.exports = usersController;
