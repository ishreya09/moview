const express = require('express');
const router = express.Router();
const signupTemplate = require('../models/SignUpModels')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


// Create User using :POST "/signup" Doesn't require Auth
router.post('/signup', [
    body('email', 'Enter a valid email id').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Password must contain 8 letters').isLength({ min: 8 }),

], (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
    }
    var pass = "";
    // encrypting the password using a salt
    var bcrypt = require('bcryptjs');
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


module.exports = router;