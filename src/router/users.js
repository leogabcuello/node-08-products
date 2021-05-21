const { Router } = require('express');
const { 
    getAllUser,
    createUser,
    deleteUser,
    updateAllUser,
    updatePartierUser        
} = require('../controllers/users');
const { postReuestValidation } = require('../middlewares/users');
 
const router = Router();

router.get('/',  getAllUser);
router.post('/', postReuestValidation, createUser); 
router.put('/:id', updateAllUser);
router.patch('/:id', updatePartierUser);
router.delete('/:id', deleteUser);

module.exports = router;