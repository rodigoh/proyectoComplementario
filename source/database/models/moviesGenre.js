module.exports = (sequelize, DataTypes) => {
    let alias = "moviesGenre";
    let cols = {
        movie: {
            type: DataTypes.INTEGER
        },
        genre: {
            type: DataTypes.INTEGER
        },
    }
    let config = {
        timestamps: false,
        deletedAt: false
    };
    const moviesGenre = sequelize.define(alias, cols, config);
    return moviesGenre;
}