import { Model, DataTypes } from "sequelize";

import sequelize from "@root/connection";

export default class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  },
  { sequelize, modelName: "user", tableName: "user", timestamps: false }
);
