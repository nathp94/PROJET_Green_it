require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres', 
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connected to Supabase database successfully.');
  } catch (error) {
    console.error('Unable to connect to the Supabase database:', error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
