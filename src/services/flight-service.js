// const { Model } = require('sequelize');
const {StatusCodes} = require('http-status-codes');
const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const  flightRepository = new FlightRepository();

async function createFlight(data){
    try {
        console.log('in try')
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error){
        console.log('in catch')
        if(error.name == 'SequelizeValidationError'){
            let explanation  =[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Flight object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

// async function getAirports(){
//     try {
//         // console.log("in the service get all");
//         const airports = await airportRepository.getALL();
//         // console.log(airplanes)
//         return airports;
//     } catch (error) {
//         // console.log(error)
//         throw new AppError('cannot fetch data of all the airport',StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

// async function getAirport(id){
//     try {
//         const airport = await airportRepository.get(id);
//         return airport;
//     } catch (error) {
//         console.log(error.statusCode)
//         if(error.statusCode==StatusCodes.NOT_FOUND){
//             throw new AppError('The airport you requested is not present',error.statusCode);
//         }
//         throw new AppError('cannot fetch data of  the airpot',StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }
// async function deleteAirport(id){
//     try {
//         const airport = await airportRepository.destroy(id);
//         return airport;
//     } catch (error) {
//         if(error.statusCode==StatusCodes.NOT_FOUND){
//             throw new AppError('The airport you requested is not present',error.statusCode);
//         }
//         throw new AppError('cannot fetch data of  the airport',StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }
// async function updateAirport(data,id){
//     try {
//         const airport = await airportRepository.update(data,id);
//         return airport;
//     } catch (error) {
//         if(error.statusCode==StatusCodes.NOT_FOUND){
//             throw new AppError('The airport you requested is not present',error.statusCode);
//         }
//         throw new AppError('cannot fetch data of  the airport',StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

module.exports = {
    createFlight
    // getAirports,
    // getAirport,
    // deleteAirport,
    // updateAirport
}