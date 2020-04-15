module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });

    User.associate = function(models) {
        // Associating User with Score
        User.hasMany(models.Score, {
            onDelete: "cascade"

        })
      };

    return User;
};