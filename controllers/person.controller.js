const req = require('express/lib/request');
const Person = require('../models/Person');

const PersonController = {
    async listar(req, res) {
        const persons = await Person.findAll({limit: 100});

        res.json(persons);
    },

    async atualizar(req, res) {
        const { id } = req.params;
        const { nome } = req.body;

        await Person.update(
            {
                person_name: nome,
            },
            {
                where: {
                    person_id: id,
                }
            },
        );
        const personUpdated = await Person.findByPk(id);

        return res.json(personUpdated);
    }
}

module.exports = PersonController;