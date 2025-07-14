const menu = require('../../models/menu')
function homeController() {
    return {
        async index(req, res) {
           const pizza = await menu.find()
                return res.render('home', { pizzas: pizzas })

        }
    }

}

Media.exports = homeController
