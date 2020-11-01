module.exports = function (sequelize, DataTypes) {
    var Patient = sequelize.define("Patient", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }


    });


    Patient.associate = function(models){
        Patient.belongsTo(models.Doctor,{
            foreignKey :{
                allowNull : false
            }
        })
    }
    return Patient;
};
