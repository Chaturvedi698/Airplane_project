const CrudRepository = require('./crud-repository');
const {Airplane} = require('../models/airplane');

class AirplaneRepository extends CrudRepository{
    constructor (){
        console.log('in the airplane repository constructor');
        super(Airplane); // calling parent constructor
    }
}

module.exports = AirplaneRepository;