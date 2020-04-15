module.exports = function(sequelize, DataTypes) {
    var Score = sequelize.define("Score", {
        score: DataTypes.INTEGER
    });

    Score.associate = function(models) {
        //Associating Score with Letterset
        Score.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
        Score.belongsTo(models.Letterset, {
            foreignKey: {
                allowNull: false
            }
        })
      };

    Score.create({
        score: 55,
    });

    Score.create({
        score: 42
    });

    Score.create({
        score: 26
    });

    Score.create({
        score: 88
    });

    return Score;
};