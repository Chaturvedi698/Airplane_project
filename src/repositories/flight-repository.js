const CrudRepository = require('./crud-repository');
const {Flight,Airplane,Airport} = require('../models');
const {Sequelize} = require('sequelize')

class FlightRepository extends CrudRepository{
    constructor (){
        super(Flight); // calling parent constructor
    }

   async  getAllFlights(filter,sortFilter){
        const response = await Flight.findAll({
            where : filter,
            order : sortFilter,
            include : [{
                model : Airplane,
                required : true,
                as : 'airplaneDetails'
            },{
                model : Airport,
                required : true,
                as : 'departureAirport',
                on : {
                    col1 : Sequelize.where(Sequelize.col("Flight.departureAirportId"),"=",Sequelize.col("departureAirport.code"))
                }
            },
            {
             model : Airport,
             required : true,
             as : 'arrivalAirport',
             on :{
                col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"),'=',Sequelize.col('arrivalAirport.code'))
             }
            }
        ]
        })
        return response
    }
}

module.exports = FlightRepository;