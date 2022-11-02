module.exports = (sequelize, DataTypes) => {
  let alias = "user";
  let cols = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
    },
    rol: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
  };
  let config = {
    timestamps: false
  };
  const User = sequelize.define(alias, cols, config);

  return User;
};
