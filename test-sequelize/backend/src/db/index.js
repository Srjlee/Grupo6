const Sequelize = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const database = {
  async connect() {
    try {
      await sequelize.sync();
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      return { ...sequelize };
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  },
};

module.exports = { database, sequelize };
