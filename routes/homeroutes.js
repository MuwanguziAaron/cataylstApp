const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const { render } = require('pug');

//variable that server uses to post data
const Manager = require('../models/Manager');


//web browser requesting for data
router.get('/', (req, res) => {
res.render('register', { title: 'Registration form' });
});

router.get('/users', (req, res) => {
  Manager.find().then((manager)=>{
    res.render('index', {title: 'Registered managers', manager})
  })
  .catch(()=>{
    res.send('something went wrong');
  });
});

router.post('/', async(req, res) => {
  try{
    const manager = new Manager(req.body);
    await manager.save();
    console.log(req.body); 
  }
  catch(err){
    res.status(404).render('register');
  }
});

router.get('/purchases', (req, res) => {
  res.render('purchases', { title: 'purchases form'});
});









module.exports = router;
