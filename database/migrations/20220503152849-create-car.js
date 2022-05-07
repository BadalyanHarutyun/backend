'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageArray: {
        type: Sequelize.TEXT,
        defaultValue: JSON.stringify([])
      },
      modelId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: {
            tableName: 'CarModels',
            key: 'id',
            
          },
         
         
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  }
};