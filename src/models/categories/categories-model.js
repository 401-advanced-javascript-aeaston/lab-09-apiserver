'use strict';

const Model = require('../mongo.js');
const schema = require('./categories-schema.js');

class Categories extends Model {
  /**
   *Creates an instance of Categories.
   * @memberof Categories
   */
  constructor() { super(schema); }
}

module.exports = Categories;
