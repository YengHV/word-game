module.exports = function(sequelize, DataTypes) {
    var Score = sequelize.define("Score", {
        score: DataTypes.INTEGER
    });

    Score.associate = function(models) {
        //Associate Score with User
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

    return Score;
};