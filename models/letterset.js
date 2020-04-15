module.exports = function(sequelize, DataTypes) {
    var Letterset = sequelize.define("Letterset", {
        letterset: DataTypes.STRING
        
    });

    Letterset.associate = function(models) {
        // Associating Letterset with Letterset
        Letterset.hasOne(models.Score, {
            // Not sure if needed
            // foreignKey: {
            //     allowNull: false
            // }
        })
      };
    Letterset.create({
        letterset: 'eifnmso'
    });
    Letterset.create({
        letterset: 'eiprbty'
    });
    Letterset.create({
        letterset: 'eixtraj'
    });
        Letterset.create({
        letterset: 'eimswvr'
    });
    return Letterset;
};