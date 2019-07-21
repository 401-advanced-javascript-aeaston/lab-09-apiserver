'use strict';

class Model {

  /**
   *Creates an instance of Model.
   * @param {*} schema
   * @memberof Model
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   *
   *
   * @returns item is empty
   * @memberof Model
   */
  jsonSchema() {
    console.log(typeof this.schema.jsonSchema);
    return typeof this.schema.jsonSchema === 'function'
      ? this.schema.jsonSchema()
      : {};
  }

  /**
   *
   *
   * @param {*} _id
   * @returns _id
   * @memberof Model
   */
  get(_id) {
    let queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject);
  }

  /**
   *
   *
   * @param {*} record
   * @returns item is empty
   * @memberof Model
   */
  create(record) {
    console.log('r',record);
    let newRecord = new this.schema(record);
    console.log('n', newRecord);
    return newRecord.save();
  }

  /**
   *
   *
   * @param {*} _id
   * @param {*} record
   * @returns _id, record
   * @memberof Model
   */
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  /**
   *
   *
   * @param {*} _id
   * @returns _id
   * @memberof Model
   */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = Model;
