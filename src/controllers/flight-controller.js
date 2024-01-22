
const { FlightService} = require('../services');
const { StatusCodes} = require('http-status-codes');
const {SuccessResponse,ErrorResponse}  = require('../utils/common');

/*
POST : /flights
req-body {
    * flightNumber : UK 888
    * airplaneId: a380
    * departureAirportId: 12
    * arrivalAirportId: 11
    * arrivalTime: 11:10:00
    * departureTime: 9:10:00
    * price: 2000
    * boardingGate: 12A
    * totalSeats: 300
}
*/
async function createFlight(req,res){
   
    try {
        // console.log('in the try catch ');
        const flight = await FlightService.createFlight({
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price,
            boardingGate : req.body.boardingGate,
            totalSeats : req.body.totalSeats
        });
       SuccessResponse.data = flight;
        return res 
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);

    }
}

async function getAllFlights(req,res){
    try {
        const flights = await FlightService.getAllFlights(req.query)
        SuccessResponse.data = flights;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);

    }
}
/*
// GET : /airports
// req-body {}
// */
// async function getAirports(req,res){
//     try {
//         const airports = await AirportService.getAirports();
//         SuccessResponse.data = airports;
//         return res.status(StatusCodes.OK).json(SuccessResponse);
//     } catch (error) {
//         ErrorResponse.error = error;
//         return res.status(error.statusCode).json(ErrorResponse);
//     }
// }
// /*
// GET : /airports/:id
// req-body {}
// */
// async function getAirport(req,res){
//     try {
//         const airport = await AirportService.getAirport(req.params.id);
//         SuccessResponse.data = airport;
//         return res.status(StatusCodes.OK).json(SuccessResponse);
//     } catch (error) {
//         ErrorResponse.error = error;
//         return res.status(error.statusCode).json(ErrorResponse);
//     }
// }
// /*
// DELETE : /airports/:id
// req-body {}
// */
// async function deleteAirport(req,res){
//     try {
//         const response = await AirportService.deleteAirport(req.params.id);
//         SuccessResponse.data = response;
//         return res.status(StatusCodes.OK).json(SuccessResponse);
//     } catch (error) {
//         ErrorResponse.error = error;
//         return res.status(error.statusCode).json(ErrorResponse);
//     }
// }
// /*
// PATCH : /airports/:id
// req-body {data,id}
// */
// async function updateAirport(req,res){
    
//     try {
//         const airport = await AirportService.updateAirport(req.body,req.params.id);
//         SuccessResponse.data = airport;
//         return res.status(StatusCodes.OK).json(SuccessResponse);
//     } catch (error) {
//         ErrorResponse.error = error;
//         return res.status(error.statusCode).json(ErrorResponse);
//     }
// }


module.exports = {
    createFlight,
    getAllFlights
}