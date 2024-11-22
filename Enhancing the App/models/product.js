const fs = require('fs');
const { get } = require('http');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      // return [];
      return cb([]);
    }
    // return JSON.parse(fileContent);
    cb(JSON.parse(fileContent));
  })
}

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // Should use arrow function otherwise it will
    // lose its context and this will not refer to the class
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
