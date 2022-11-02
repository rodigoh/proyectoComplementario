const {movie} = require("../database/models/index");
module.exports ={
  index: async(req,res) =>{

    let movies = await movie.findAll();
    return res.render('index',{
      title: 'List of movies',
      movies: movies
    })
  },
  detail: async (req, res) => {
    let movieDB = await movie.findByPk(req.params.id, {
      include: {
        all: true
      }
    })
    if(!movieDB){
      return res.redirect('/')
    }
    return res.render('movies/detail', {
      title: 'Detail of movies',
      movie: movieDB.dataValues 
    })
  },
  create: (req,res) => {
    return res.render('movies/create', {
      title: 'Create Movie',
    })
  },
  save: async (req, res) => {
  await movie.create(req.body)
    return res.redirect('/')
  },
  edit: async (req,res) => {
    let movieDB = await movie.findByPk(req.params.id)
    return res.render('movies/edit', {
      title: 'Edit of movies',
      movie: movieDB 
    })
  },
  modify: async (req, res) => {
    let movieDB = await movie.findByPk(req.params.id)
    await movieDB.update({
      title:  req.body.title,
      awards: parseInt(req.body.awards),
      release_date: parseInt(req.body.release_date),
      rating: parseInt(req.body.rating),
      length: parseInt(req.body.length)
    })
    return res.redirect('/movies/detail/' + movie.id)
  },
  destroid:async (req,res) => {
    let movieDB = await movie.findByPk(req.body.id)
    if(!movieDB){
      return res.redirect('/');
    }
    await movieDB.destroy()
    return res.redirect('/');
  }
}