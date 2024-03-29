const express = require('express');
const config = require('config');
const logger = require('./config/logger');
const app = express();
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const mongoose = require('mongoose');
const cors = require('./config/cors');
mongoose.Promise = global.Promise;

// Authenctication.
const authenticateJwt = require('./auth/authenticate');
const adminOnly = require('./auth/adminOnly');
const authHandler = require('./auth/authHandler');

const swaggerDocument = YAML.load('./src/docs/swager.yaml');

const { host } = config.get('database');

mongoose
    .connect(`mongodb://${host}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        // Data seeds.
        require('./seed/seeder');
        logger.info('MongoDB connection has been established successfully.');
    })
    .catch(err => {
        logger.error(err);
        process.exit();
    });

app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.static('public'));
app.use(express.json());

// Router.
app.post('/login', authHandler.login);
app.post('/refresh', authHandler.refresh);
app.post('/logout', authHandler.logout);

app.use('/users', authenticateJwt, adminOnly, require('./controllers/user/routes'));
app.use('/cities', authenticateJwt, require('./controllers/city/routes'));
app.use('/counties', authenticateJwt, require('./controllers/county/routes'));
app.use('/skills', authenticateJwt, require('./controllers/skill/routes'));
app.use('/services', authenticateJwt, require('./controllers/service/routes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err, req, res, next) => {
    res.status(err.statusCode);
    res.json({
        hasError: true,
        message: err.message
    });
});

module.exports = app;
