// models/Jogo.js 

import { DataTypes } from 'sequelize';
// Certifique-se de que 'database' é a sua instância de conexão Sequelize
import database from '../config/sequelize-configs.js'; 

const Jogo = database.define('Jogo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    console: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'jogos', // Nome da sua tabela no DB
    timestamps: false,
});

export default Jogo;