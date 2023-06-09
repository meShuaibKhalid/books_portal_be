const sequelize = require('../configurations/config');
const Sequelize = require('sequelize');


const Book = sequelize.define('Book', {
    ID: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true},
    image: { type: Sequelize.STRING, allowNull: false },
    contact: {type: Sequelize.STRING, allowNull: false},
    phone: {type: Sequelize.STRING, allowNull: false},
    email: {type: Sequelize.STRING, allowNull: false},
    abstract: {type: Sequelize.STRING, allowNull: false},
    author: { type: Sequelize.STRING, allowNull: false },
    title: { type: Sequelize.STRING, allowNull: false},
    publish_date: { type: Sequelize.STRING},
    borrowedBy: {type: Sequelize.STRING, defaultValue: null},
    category: { type: Sequelize.STRING , allowNull: false },
    status: {type: Sequelize.STRING, defaultValue: 'available'}

}, {freezeTableName: true});


module.exports = Book;
