var sql = require('../db/database');

var City = function(city) {
    this.city_id = city.city_id;
    this.city_name = city.city_name;
    this.postal_code = city.postal_code;
};

module.exports = City;
