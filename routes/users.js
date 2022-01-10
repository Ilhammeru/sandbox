var express = require('express');
var router = express.Router();

const Product = require('../db/models/product');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/product/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Product.query().findById(id).withGraphFetched('product_price');
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
