const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const formController = require('../controllers/formController');

router.get('/', pageController.home);
router.post('/form', 
    formController.validate,
    formController.checkValidation,
    formController.form
    );

module.exports = router;