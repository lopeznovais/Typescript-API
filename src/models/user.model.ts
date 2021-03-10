import Sequelize from 'sequelize';
import database from '../database';

 
const User = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },    
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weight: {
        type: Sequelize.STRING,
        allowNull: false
    },    
    ethnicity: {
        type: Sequelize.ENUM('Branco', 'Pardo', 'Negro', 'Indígena'),
        allowNull: false
    },
})
 
export default User;