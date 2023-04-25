const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('temperament', {
    //   id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     allowNull: false
    //   },

    //el id no es necesario, lo crea sequelize

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
      {timestamps: false} 
    );
};