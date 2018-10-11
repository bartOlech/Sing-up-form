const bookshelf = require('../config/bookshelf');

const Application = bookshelf.Model.extend({
    tableName:'users'
})

module.exports.create = (application)=>{
    return new Application({
        name:application.name,
        email:application.email,
        phone:application.phone
    }).save()
}