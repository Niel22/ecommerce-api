const slugify = require('slugify');
const models = require('../models');

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
      this.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'category'
      });

      this.belongsTo(models.User, {
        foreignKey: 'postedBy',
        as: 'user'
      });
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
    timestamps: true,
    hooks: {
      beforeCreate: async(product) => {
        product.slug = slugify(product.title, {lower: true, strict: true});
      },
      beforeUpdate: async(product) => {
        if(product.changed('title')){

          product.slug = slugify(product.title, {lower: true, strict: true});
        }
      }
    }
  });
  
  return Product;
};