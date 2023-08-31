const CrudRepository = require('./crud-repository');
const {City} = require('../models');

class CityRepository extends CrudRepository{
    constructor (){
        // console.log('in the airplane repository constructor');
        super(City); // calling parent constructor
    }
}

module.exports = CityRepository;