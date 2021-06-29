const router = require('express').Router();

const { register } = require('../services/users');

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        if (!email.trim()) {
            throw new Error('Emails is required');
        }
    
        if (password.trim().length < 3) {
            throw new Error('Password must be at least 3 characters long');
        }
    
        const userData = await register(email.toLocaleLowerCase().trim(), password);
        res.json(userData);
    } catch (err) {
        res.json({ message: err.message });
    }
});

module.exports = router;