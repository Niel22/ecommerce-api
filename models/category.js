const slugify = require('slugify');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Category',
    timestamps: true,
    hooks: {
      beforeCreate: async (category) => {
        category.slug = slugify(category.title, {lower: true, strict: true});
      },
      beforeUpdate: async(category) => {
        if(category.changed('title'))
        {
          category.slug = slugify(category.title, {lower: true, strict: true});
        }
      }
    }
  });
  return Category;
};