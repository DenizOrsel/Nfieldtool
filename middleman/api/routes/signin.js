const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    const signin = {
        domain: req.body.domain,
        username: req.body.username,
        password: req.body.password
      };
    res.status(201).json({
        message: "Handling POST requests to /signin",
        createdsignin: signin
    });
});

module.exports = router;