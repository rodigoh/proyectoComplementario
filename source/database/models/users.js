module.exports = (sequelize, DataTypes) => {
  let alias = "user";
  let cols = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.TEXT,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  };
  let config = {};
  const User = sequelize.define(alias, cols, config);

  return User;
};
