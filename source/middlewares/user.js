module.exports = async (req,res,next) => {

    let user = null;

    if(req.cookies && req.cookies.name){
        let users = await user.findAll();
        user = users.find(u => u.name === req.cookies.name)
        req.session.user = user
    }

    if(req.session && req.session.user){
        user = req.session.user
    }
    
    res.locals.user = user

    return next()
}