import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: 'loja_jogos', 
  username: 'root',
  password: '',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

export default sequelize;