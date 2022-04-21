const db = require('../database');
const { DataTypes } = require('sequelize');

const Person = db.define('Person', {
    person_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    person_name: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'person',
    timestamps: false,
    }
);

module.exports = Person;