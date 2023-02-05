var express = require('express');
var router = express.Router();

const coursescontroller = require('../app/controllers/Coursescontroller');

router.get('/create', coursescontroller.create);
router.post('/store', coursescontroller.store);
router.get('/:id/edit', coursescontroller.edit);
router.post('/handle-form-actions-stored', coursescontroller.handleFormActionsStored);
router.post('/handle-form-actions-bin', coursescontroller.handleFormActionsBin);
router.put('/:id', coursescontroller.update);
router.patch('/:id/restore', coursescontroller.restore);
router.delete('/:id', coursescontroller.delete);
router.delete('/:id/force', coursescontroller.forceDelete);
router.get('/:slug', coursescontroller.show);

module.exports = router;
