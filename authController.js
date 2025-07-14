const passport = require('passport')
const user = require('../../models/usser')
const bcrypt = require('bcrypt')
function authController() {
    return {
        login(req, res) {
            res.render('auth/login')
        },
        postLogin(req, res, next) {
            passport.authenticate('local', (err, user, info) => {
                if(err) {
                    req.flash('error',info.message )
                    return next(err)
                }
                if(!user) {
                    req.flash('error', info.message )
                return res.redirect('/login')
                
            }
            req.logIn(user, (err) => {
                if(err) {
                    req.flash('error', info.massage )
                    return next(err)
                }
                return res.redirect('/')
            })

            })(req, res, nwxt)
        },

        register(req, res) {
            res.render('auth/register')
        },
        async postRengister(req, res) {
            const { name, email,password} = req.body
            //validate request
            if(!name || !eamil || !password) {
                req.flash('error', 'All fields are required')
                req.flash('name', name)
                req.flash('email', email)
                return res.redirect('/register')
            }
    

            
            //Hash password
            const hashedPassword = await bcrypt.hash(passwod, 10)
            //create a uder
            const user = new user({
                name,
                email,
                psddword: hashedPassword
            })

            user.save().than(user => {
                //login
                return res.redirect('/')
            }).catch(err => {
                req.flash('error', 'Something went wrong')
                return res.redirect('/register')

            })





            console.log(req.baby)
            
            //check if email exists
            user.exports({email: email}, (err, result) => {
                if(result) {

                }
            })
        }
    }

}

Media.exports = authController
