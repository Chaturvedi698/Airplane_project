// const { Model } = require('sequelize');
const {StatusCodes} = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
// const AirplaneRepository = require('../repositories/airplane-repository');

const  airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        // console.log('in the service try ');
        const airplane = await airplaneRepository.create(data);
        // console.log(airplane)
        return airplane;
    } catch (error) {
        // console.log('in the service catch');

        if(error.name == 'SequelizeValidationError'){
            let explanation  =[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new airplane object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes(){
    try {
        // console.log("in the service get all");
        const airplanes = await airplaneRepository.getALL();
        // console.log(airplanes)
        return airplanes;
    } catch (error) {
        // console.log(error)
        throw new AppError('cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id){
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not present',error.statusCode);
        }
        throw new AppError('cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane
}