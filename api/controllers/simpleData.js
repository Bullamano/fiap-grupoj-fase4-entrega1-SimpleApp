module.exports = () =>
{
    const simpleDataDB = require('../data/simpleData.json');
    const controller = {};

    controller.getSimpleData = (req, res) => res.status(200).json(simpleDataDB);

    return controller;
}