const path = require('path');
const express = require('express');
const shopRouter = express.Router();

shopRouter.get('/', (req, res) => {
  res.render('shop.ejs', { pageTitle: 'My Shop' });
});

module.exports = shopRouter;
