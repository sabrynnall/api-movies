const db = require('../database');
const { DataTypes } = require('sequelize');

const Gender = db.define('Gender', {
    gender_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    gender: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'gender',
    timestamps: false,
    }
);

module.exports = Gender;