const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID, //genera un ID único de forma aleatoria
      defaultValue: DataTypes.UUIDV4, // el valor por defecto del id será generado automáticamente mediante la función UUIDV4 de Sequelize
      primaryKey: true,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    height: {
      type: DataTypes.STRING,
      allowNull: false
    },

    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },

    life_span: {
      type: DataTypes.STRING,
      allowNull: false
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false
    },

    createdInDB: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  },
    {timestamps: false}  
  );
};