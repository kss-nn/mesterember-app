const jwt = require('jsonwebtoken');

const Users = [
    {
        email: 'admin@gmail.com',
        password: 'admin_pw',
        role: 'admin'
    },
    {
        email: 'user@gmail.com',
        password: 'user_pw',
        role: 'user'
    }
];

module.exports = (req, res) => {
    const { email, password } = req.body;

    const user = Users.find( 
        user => user.email === email && user.password === password
    );

    if (user) {
        const accessToken = jwt.sign({
            email: user.email,
            role: user.role
        }, process.env.ACCESS_TOKEN_SECRET);

        res.json({ accessToken });
    } else {
        res.send('Email or password incorrect.');
    }

};
