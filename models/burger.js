const orm = require("../config/orm.js");

const burger = {
  selectAll(cb) {
    orm.selectAll("burgers", (res) => cb(res));
  },
  insertOne(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete("burgers", condition, (res) => cb(res));
  },
};

module.exports = burgers;