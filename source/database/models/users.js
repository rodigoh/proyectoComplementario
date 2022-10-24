module.exports = (sequelize, DataTypes) => {
    let alias = "user";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.TEXT
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        rol: {
            type: DataTypes.TINYINT
        }
    };
    let config = {
        timestamps: false,
        deletedAt: false
    };
    const User = sequelize.define(alias, cols, config);

    return User;
}