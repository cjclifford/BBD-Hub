const router = require('express').Router();

router.post('/login/user', (req, res) => {
    res.send("hello");
    console.log(req);
});






module.exports = router;