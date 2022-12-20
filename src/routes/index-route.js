'use strict';

const express = require('express');

const app = express();
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Godoy's First API in Node.js",
        version: "0.0.3"
    });
});

module.exports = router;