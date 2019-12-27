const { products } = require('../db.json');         // importa la propiedad products del archivo db.json y la guarda en la variable products

module.exports = {
    getProducts: (req, res) => {
        res.json({products})
    },

    addProducts: (req, res) => {
        const { name } = req.body;
        products.push({
            id: products.length,
            name   // es lo mismo que  ( name: name)
        });
        
    },

    updateProduct: (req, res) => {
        const { id } = req.params;
        const { name } = req.body;

        products.forEach((product, i) => {
            if (product.id === Number(id)) {
                product.name = name;
            }
        });

        res.json({
            "success": true,
            "msg": "succesfully update"
        });
    },

    deleteProduct : (req, res) => {
        const { id } = req.params;
        products.forEach((product, i) => {
            if (product.id === Number(id)) {
                products.splice(i,1);
            }
        })

        res.json({
            "success": true,
            "msg": "succesfully delete"
        })

        
    }
}