module.exports = (sequelize, DataTypes) => {
    let alias = "episode";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        release_date: {
            type: DataTypes.DATE
        },
        rating: {
            type: DataTypes.DECIMAL,
        },
        season_id: {
            type: DataTypes.INTEGER(10),
            allowNull: true
        }
    };
    let config = {
        timestamps: false,
        deletedAt: false
    };
    const Episode = sequelize.define(alias, cols, config);

    Episode.associate = (models) => {
        Episode.belongsTo(models.season, {
            foreignKey: "season_id"
        })
    }
    return Episode;
}