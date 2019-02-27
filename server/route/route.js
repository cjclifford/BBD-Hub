const router = require('express').Router();

router.post('/login/user', (req, res) => {
    // res.send("hello");
    res.redirect('http://localhost:4200/homepage');
    console.log(req);
});






module.exports = router;