const Product = require('../models/product.model');

exports.addProduct = (req, res) => {
    Product.findOne({ name: req.body.name }).exec((err, product) => {
      if (product)
        return res.status(400).json({
          message: "Product already exists",
        });
  
        const { name, image, parentID, description, price, countInStock, categoryID, Isfeatured } = req.body;

        const newProduct = new Product({
            name, 
            image, 
            parentID, 
            description, 
            price, 
            countInStock, 
            categoryID, 
            Isfeatured,
        });
  
      newProduct.save((err, data) => {
            if (err) {
            return res.statusCode(400).json({
                message: "There seems to be a problem!!!",
                });
            }
    
            if (data) {
            return res.status(201).json({
                message: "Product Added ",
                });
            }
        });
    });
};

exports.allProducts = (req, res) => {
  Product.find({})
      .then(products => res.json(products))
      .catch(err => res.status(400).json('Error: ' + err));
};


exports.allclothes = (req, res) => {
  Product.find({})
    .then(products => {
      const clothes = products.filter(prod => prod.parentID === "Clothes");
      res.json(clothes);
      })
      .catch(err => res.status(400).json('Error: ' + err));
};


  