const Router = require('express');

const controllers = require('./list.controllers.js');

const router = Router();

// /api/list
router 
    .route('/')
    .get(controllers.getOne)
    .post(controllers.createOne)

// /api/list/:id

router
   .route('/:id')
   .get(controllers.getOne)
   .put(controllers.updateOne)
   .delete(controllers.removeOne)


   module.exports = router;