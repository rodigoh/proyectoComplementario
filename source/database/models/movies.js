module.exports = (sequelize, DataTypes) => {
    let alias = "movie";
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
        awards: {
            type: DataTypes.INTEGER,
        },
        release_date: {
            type: DataTypes.DATE
        },
        rating: {
            type: DataTypes.DECIMAL,
        },
        genre_id: {
            type: DataTypes.INTEGER(10),
            allowNull: true
        },
        length: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        timestamps: false,
        deletedAt: false
    };
    const Movie = sequelize.define(alias, cols, config);
    Movie.associate = (models) => {
        Movie.belongsTo(models.genre, {
            foreignKey: "genre_id"
        })
    }
    return Movie;
}