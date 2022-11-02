module.exports = (req,res,next) => {
    if(!req.session.user.rol){
        return res.redirect('/')
    }
    return next()
}