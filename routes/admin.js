const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res) => {
  res.render('add-product', { pageTitle: 'Add Product' });
});

router.post('/add-product', (req, res) => {
  console.log(res.body);
  res.redirect('/shop');
});

module.exports = router;
