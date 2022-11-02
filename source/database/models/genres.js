module.exports = (sequelize, DataTypes) => {
    let alias = "genre";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
        },
        ranking: {
            type: DataTypes.INTEGER,
        },
        active: {
            type: DataTypes.SMALLINT(1)
        }
    };
    let config = {
        timestamps: false,
        deletedAt: false,
        tableName: "genres"
    };
    const Genre = sequelize.define(alias, cols, config);
    Genre.associate = (models) => {
        Genre.hasMany(models.serie, {
            as: "series",
            foreignKey: "genre_id"
        })
    }

    Genre.associate = (models) => {
        Genre.hasMany(models.movie, {
            as: "movies_genre",
            foreignKey: "genre_id"
        })
    }
    return Genre;
}