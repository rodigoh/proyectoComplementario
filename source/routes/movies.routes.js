const {Router} = require('express');
const router = Router();
const { index,detail, create, save, edit, modify, destroid } = require('../controllers/movie.controller');
const multer = require('multer');
const storage = require('../modules/storage')
const upload = multer({storage: storage('../../uploads/illustrations')});
const isLogged = require('../middlewares/isLogged')
const isAdmin = require('../middlewares/isAdmin')
const validation = require('../validations/movies')
router.get('/', index)
router.get('/movies/detail/:id', detail)
router.get('/movies/create', [isLogged,isAdmin],create)
router.post('/movies/save',[upload.any(),validation],save)
router.get('/movies/edit/:id',[isLogged,isAdmin], edit)
router.put('/movies/edit/:id',[upload.any()], modify)
router.delete('/movies/delete',destroid)

module.exports = router