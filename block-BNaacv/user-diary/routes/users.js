const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('users', { users: ['Vivek', 'Chandan', 'Aman', 'Rakesh', 'Ravindra', 'Piyush']})
});


router.get('/new', (req, res) => {
    res.render('userForm');
});

router.post('/', (req, res) => {
    res.send(req.body);
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.render('singleUser', { user: {
        name: 'Ravindra Shastri',
        email: 'ravindra@gmail.com'
    } 
    });
});
router.get('/:id/edit', (req, res) => {
    // edit form
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    res.send(`The user with Id ${id} has been updated with ${req.body}`);
});
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    res.send(`The user with Id ${id} has been deleted`);
});

module.exports = router;