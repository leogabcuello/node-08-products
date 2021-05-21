const { Router } = require('express');
const { 
    getAllUser,
    createUser,
    deleteUser,
    updateUser,
    getById        
} = require('../controllers/users');

const router = Router();

router.get('/', getAllUser);
router.post('/', createUser); 
router.put('/:id', updateUser);
router.get('/:id', getById);
router.delete('/:id', deleteUser);

module.exports = router;