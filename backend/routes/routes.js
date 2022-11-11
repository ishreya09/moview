const express = require('express');
const router = express.Router();
const signupTemplate = require('../models/SignUpModels')
const contactusTemplate = require('../models/ContactModels')
const bcrypt = require('bcryptjs');


// Create User using :POST "/signup" Doesn't require Auth
router.post('/signup', (request, response) => {
    var pass = "";
    // encrypting the password using a salt
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(request.body.password, salt, function (err, hash) {
            // Store hash in your password DB.
            // check if username is unique or not in the database
            const signedUpUser = new signupTemplate({
                username: request.body.username,
                name: request.body.name,
                email: request.body.email,
                password: hash,
            })

            signedUpUser.save(function (err, data) {
                if (err) {
                    if (err.code === 11000) {
                        // Duplicate username
                        return response.status(400).json({
                            success: false,
                            code: 11000,
                            message: 'Username already exist!',
                            errors: "Username already exists",
                        });
                    }

                    // Some other error
                    err.success = false;
                    return response.status(400).json(err);
                }
                data.success = true;
                response.json(data);
            }
            )
        });
    });


});

router.post('/contactus', (request, response) => {
    const ContactUser = new contactusTemplate({
        name: request.body.name,
        email: request.body.email,
        message: request.body.message,
    })

    ContactUser.save()
        .then(data => {
            response.json(data);
        })
        .catch(err => {
            response.json(err);
        })

});

router.post('/login', (request, response) => {
    const user = {
        username: request.body.username,
    };

    signupTemplate.findOne(user)
        .then((user) => {
            // user exists
            // response.json(user);
            if (bcrypt.compareSync(request.body.password, user.password)) {
                response.json(user);
            }
            else {
                response.status(400).json({ sucess: "false", msg: "Invalid password" });
            }
        })

        // response.json({hash:hash, pass:user.password })

        .catch((error) => {
            response.status(400).json(error);
        })
})

// router.get('/admin')

module.exports = router;