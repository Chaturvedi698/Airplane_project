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
    
           const response = await this.model.destroy({
            where : {
                id : data
            }
        });
        return response;

    }
    async get(data){
    
            const response = await this.model.findBYPk(data);
            return response;
    
    }
    async getALL(){
            const response = await this.model.findAll();
            return response;
      
    }
    async update(data){ 
            const response = await this.model.update(data,{
                where : {
                    id : id
                }
            });
            return response;
    }


}

module.exports = CrudRepository;


