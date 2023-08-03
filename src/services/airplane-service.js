// const { Model } = require('sequelize');
const { AirplaneRepository } = require('../repositories');
// const AirplaneRepository = require('../repositories/airplane-repository');

const  airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        console.log('in the service try ');
        const airplane = await airplaneRepository.create(data);
        console.log(airplane)
        return airplane;
    } catch (error) {
        console.log('in the service catch');
        throw error;
    }
}

module.exports = {
    createAirplane
}