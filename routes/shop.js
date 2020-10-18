const path = require('path');
const express = require('express');
const shopRouter = express.Router();

shopRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = shopRouter;
