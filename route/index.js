import express from 'express';
var router = express.Router();

/* HomePage */

router.get('/', function(req, res, next){
    res.json({
        message: "Welcome to Populate API"
    });
});

export default router;