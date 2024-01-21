// const { Model } = require('sequelize');
const {StatusCodes} = require('http-status-codes');
const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { deleteAirplane } = require('./airplane-service');
const { Op } = require('sequelize');

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

async function getAllFlights(query){
    let customFilter = {}
    const endingTripTime = " 23:59:59"
    let sortFilter = []
    //tripes = MUM-DEL
    if(query.trips){
        [departureAirportId, arrivalAirportId] = query.trips.split('-');
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
        //TODO : add a check they are not same, if they same give error or return empty object
    }

    if(query.price){
        [minPrice,maxPrice] = query.price.split('-')
        customFilter.price = {
            [Op.between] : [minPrice,maxPrice ? maxPrice : 20000]
        }
    }

    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte] : query.travellers
        }
    }
    if(query.tripDate){
        // endingTripTime = query.tripDate + endingTripTime
        // console.log(endingTripTime)  
        customFilter.departureTime  = {
            [Op.between] : [query.tripDate, query.tripDate + endingTripTime] 
        }
    }
    if(query.sort){
        const params = query.sort.split(',');
        const sortFilters  = params.map((param)=> param.split('_'));
        sortFilter = sortFilters
    }
    try {
        const flights = await flightRepository.getAllFlights(customFilter,sortFilter);
        return flights;
    } catch (error) {
        throw new AppError('cannot fetch data of all the Flights',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createFlight,
    getAllFlights
}