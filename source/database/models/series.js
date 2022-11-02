module.exports = (sequelize, DataTypes) => {
    let alias = "serie";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING,
        },
        release_date: {
            type: DataTypes.DATE
        },
        end_date: {
            type: DataTypes.DATE
        },
        genre_id: {
            type: DataTypes.INTEGER(10),
            allowNull: true
        }
    };
    let config = {
        timestamps: false,
        deletedAt: false
    };
    const Serie = sequelize.define(alias, cols, config);
    Serie.associate = (models) => {
        Serie.hasMany(models.seasons, {
            as: "seasons",
            foreignKey: "serie_id"
        })
    }
    Serie.associate = (models) => {
        Serie.belongsTo(models.genre, {
            foreignKey: "genre_id"
        })
    }
    return Serie;
}