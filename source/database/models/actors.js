module.exports = (sequelize, DataTypes) => {
    let alias = "actor";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        first_name: {
            type: DataTypes.STRING(100)
        },
        last_name: {
            type: DataTypes.STRING(100),
        },
        rating: {
            type: DataTypes.DECIMAL(3.1)
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER(10)
        }
    };
    let config = {
        timestamps: false,
        deletedAt: false
    };
    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = (models) => {
        Actor.belongsTo(models.movie, {
            as: 'movies_actors',
            foreignKey: "favorite_movie_id"
        })
    }
    return Actor;
}