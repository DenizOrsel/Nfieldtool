const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /survey"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Handling POST requests to /survey"
    });
});

module.exports = router;