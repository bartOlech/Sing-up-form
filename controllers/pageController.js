exports.home = (req, res)=>{
    res.render('home', {
        message: req.flash('msg')
    })
}