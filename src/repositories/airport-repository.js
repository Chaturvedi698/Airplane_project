const CrudRepository = require('./crud-repository');
const {Airport} = require('../models');

class AirportRepository extends CrudRepository{
    constructor (){
        // console.log('in the airplane repository constructor');
        super(Airport); // calling parent constructor
    }
}

module.exports = AirportRepository;