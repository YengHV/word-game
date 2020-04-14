module.exports = function(sequelize, DataTypes) {
    var Letterset = sequelize.define("Letterset", {
        letterset: DataTypes.STRING
        
    });
    return Letterset;
};