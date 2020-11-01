module.exports = function(sequelize, DataTypes) {
    var Doctor = sequelize.define("Doctor", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
     
      
    });



    Doctor.associate = function(models){
        Doctor.hasMany(models.Patient,{
            onDelete : "cascade"
        })
    }
    return Doctor;
  };
  