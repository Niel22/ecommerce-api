'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    color: DataTypes.ENUM('Black', 'Red'),
    ratings: DataTypes.INTEGER,
    brand: DataTypes.ENUM('Apple', 'Samsung'),
    sold: { type: DataTypes.INTEGER, defaultValue: 0 },
    postedBy: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: true
  });
  return Product;
};