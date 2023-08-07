// const { response } = require('express');
const { Logger} = require('../config');

class CrudRepository{
    constructor(model){
        // console.log(model);
        this.model = model;
    }

    async create(data){
     
            // console.log(data);
                const response = await this.model.create(data);
                // console.log("rsponse is ",response)
                return response;
            
    }

    async destroy(data){
     try {
           const response = await this.model.destroy({
            where : {
                id : data
            }
        });
        return response;
     } catch (error) {
        Logger.error('Something went wrong in the Crud Repo : destroy');
        throw error;
     }
    }

    async get(data){
        try {
            const response = await this.model.findBYPk(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud Repo : findBypk');
            throw error;
        }
    }
    async getALL(data){
        try {
            const response = await this.model.findALL();
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud Repo : findAll');
            throw error;
        }
    }
    async update(data){
        try {
            const response = await this.model.update(data,{
                where : {
                    id : id
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the Crud Repo : update');
            throw error;
        }
    }


}

module.exports = CrudRepository;


