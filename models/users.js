import { DataTypes } from 'sequelize';
import sequelize from '../database/sequelize.js';

const user = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
});

export default user;
