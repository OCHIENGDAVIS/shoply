const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use('/shop', shopRouter);

app.use((req, res, next) => {
  res.render('404.ejs', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
