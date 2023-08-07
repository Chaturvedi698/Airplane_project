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

module.exports = {
    createAirplane
}