const Gender = require('../models/Gender');

const GenderController = {
    async listar(req, res) {
        const genders = await Gender.findAll();

        res.json(genders);
    },
};

module.exports = GenderController;