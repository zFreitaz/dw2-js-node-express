// models/Jogo.js
import { DataTypes } from 'sequelize';
import sequelizeConnection from '../config/sequelize-configs.js'; // Nome corrigido

const Jogo = sequelizeConnection.define('Jogo', {
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  console: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  valor: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  imagem: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: 'default.jpg'
  }
}, {
  tableName: 'jogos',
  timestamps: true
});

export default Jogo;