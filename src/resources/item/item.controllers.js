const {crudControllers} = require('../../utils/crud.js');

const {Item} = require('./item.model.js');

module.exports = crudControllers(Item);


// if you want to modifying controllers for specific thing out of REST convension do this //

// module.exports = {
// ...crudConrollers(Item), getOne(){
// }}