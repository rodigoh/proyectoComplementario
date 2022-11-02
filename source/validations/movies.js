const { body } = require('express-validator');
module.exports = [
    body('title').notEmpty().withMessage('Title not empty'),
    body('rating').notEmpty().withMessage('Rating not empty'),
    body('awards').notEmpty().withMessage('Awards not empty'),
    body('release_date').notEmpty().withMessage('Release date not empty'),
    body('length').notEmpty().withMessage('Length not empty'),
    body('genre_id').notEmpty().withMessage('Genre not empty'),
]