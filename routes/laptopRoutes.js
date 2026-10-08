const express = require('express');
const router = express.Router();
const laptopController = require('../controllers/laptopController');
const cekApiKey = require('../middlewares/cekApiKey');


router.get('/', laptopController.getAll);
router.get('/:id', laptopController.getById);


router.post('/', cekApiKey, laptopController.create);
router.put('/:id', cekApiKey, laptopController.update);
router.delete('/:id', cekApiKey, laptopController.delete);

module.exports = router;