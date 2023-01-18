module.exports = app =>
{
    const controller = require('../controllers/simpleData')();

    app.route('/api/v1/simple-data')
        .get(controller.getSimpleData);
}