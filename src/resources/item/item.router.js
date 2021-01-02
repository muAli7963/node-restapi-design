const {Router} = require('express');

const controllers = requir('./item.controller.js');



const router = Router();

// /api/item

router
.route('/')
.get(controllers.getOne)
.post(controllers.createOne)


// /api/item/:id

router
   .route('/:id')
   .get(controllers.getOne)
   .put(controllers.updateOne)
   .delete(controller.removeOne)


module.exports = router;