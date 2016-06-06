import app from 'app'
import bodyParser from 'body-parser'
import HomeController from 'app/Controllers/HomeController'

var urlencodedParser = bodyParser.urlencoded({ extended: false })

class Routes {
    constructor(app)
    {
        this.app = app
    }
    initialize()
    {
        this.app.get('/' , (req , res) => HomeController.index(req,res))
    }
}

export default new Routes(app)
