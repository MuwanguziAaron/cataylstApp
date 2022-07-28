const express = require('express');
const passport = require('passport');
const router = express.Router();
const Userlogin = require('../models/Userlogin');


router.get('/user', (req, res)=>{
    res.render('userregister')
});

router.post('/', async(req,res)=> {
    try{
     const userregister = new Userlogin(req.body);
     await userregister.save();
     console.log(req.body);
    }
    catch(err){
     res.status(400).render('userregister');
    }
 });
 

 module.exports = router;