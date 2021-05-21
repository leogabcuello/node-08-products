const { Router } = require('express');
const { 
    getAllUser,
    createUser,
    deleteUser,
    updateUser,
    getById                
} = require('../controllers/users');
const { postReuestValidation } = require('../middlewares/users');
 
const router = Router();

router.get('/',  getAllUser);
router.post('/', postReuestValidation, createUser); 
router.put('/:id', updateUser);
router.get('/:id', getById);
router.delete('/:id', deleteUser);

module.exports = router;