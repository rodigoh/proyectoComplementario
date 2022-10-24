module.exports = (sequelize, DataTypes) => {
    let alias = "season";
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
        end_date: {
            type: DataTypes.DATE
        },
        serie_id: {
            type: DataTypes.INTEGER(10),
            allowNull: true
        }
    };
    let config = {
        timestamps: false,
        deletedAt: false
    };
    const Season = sequelize.define(alias, cols, config);
    Season.associate = (models) => {
        Season.hasMany(models.episodes, {
            //foreignKey: "season_id"??
        })
    }
    Season.associate = (models) => {
        Season.belongsTo(models.series, {
            foreignKey: "serie_id"
        })
    }
    return Season;
}