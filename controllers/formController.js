const Application = require('../models/application');
const { check, validationResult } = require('express-validator/check');
const appMailer = require('../mailers/appMailer');

exports.form = (req, res, next)=>{

    const application ={
        'name':req.body.name,
        'email':req.body.email,
        'phone':req.body.phone
    }

    Application.create(application).then(()=>{
        req.flash('msg', ` ${req.body.name} `)
        res.redirect('/');
    })   

    appMailer.applicationNotify({
        email:application.email,
        data:{ name: application.name }
    })
}
exports.validate = [
    check('name').trim().isLength({ min: 1 }).withMessage('Name is required.'),
    check('email').isLength({ min: 1 }).withMessage('Email is required.'),
    check('phone').isLength({ min: 1 }).withMessage('Phone is required')
];

exports.checkValidation = (req, res, next)=>{
    const errors = validationResult(req);

    if ( ! errors.isEmpty()){
        return res.render('home', {
            validated: req.body,
            errors: errors.mapped(),
            message:''
        })
    }
    next()
};