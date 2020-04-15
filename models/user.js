module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });

    User.associate = function(models) {
        // Associating User with User
        User.hasOne(models.Score, {
            // Not sure if needed
            // foreignKey: {
            //     allowNull: false
            // }
        })
      };

    User.create({
        email: "tom@gmail.com",
        password: "4984993"
    });

    User.create({
        email: "sam@gmail.com",
        password: "4914993"
    });

    User.create({
        email: "peanut@gmail.com",
        password: "4984693"
    });

    User.create({
        email: "ignatz@gmail.com",
        password: "4982993"
    });

    return User;
};