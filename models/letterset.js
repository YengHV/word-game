module.exports = function(sequelize, DataTypes) {
    var Letterset = sequelize.define("Letterset", {
        characters: DataTypes.STRING
        
    });

    Letterset.associate = function(models) {
        // Associating Letterset with Letterset
        Letterset.hasMany(models.Score, {
           // Not sure if needed
            foreignKey: {
                allowNull: false
            }
        })
      };
    return Letterset;
};