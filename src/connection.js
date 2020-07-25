import { Sequelize } from "sequelize";

const sequelize = new Sequelize("typeorm", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
