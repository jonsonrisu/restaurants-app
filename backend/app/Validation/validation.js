const { check } = require('express-validator');

exports.addCategoryValidation = [
    check('name', 'Name is requied').not().isEmpty(),
    check('keywords', 'Keywords is requied').not().isEmpty(),
    check('status', 'Status is requied').not().isEmpty(),
]