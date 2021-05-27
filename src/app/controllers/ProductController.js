const Product = require('../models/Product')
const User = require('../models/User');
const { product } = require('./HomeController');
class ProductsController {
    index(req, res, next) {
        const user = res.locals.user;
        var id = req.params.id;
        // console.log(id)
        Product.find({ _id: id })
            .then(products => {
                products = products.map(product => product.toObject());
                Product.find({ id_danhmuc: products[0].id_danhmuc })
                    .then(a => {
                        var product_lienquan = a.map(a => a.toObject());
                        console.log(product_lienquan)
                        res.render('ProductDetailView', { user, products, product_lienquan })
                    })
            })
            .catch(next)

    }

}
module.exports = new ProductsController();