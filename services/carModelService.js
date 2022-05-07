const {CarModel,db} = require("../database/models/index");


class CarModelService {
    
    static async getModelByBrand(brandId) {
        try {
            const allBrands = await CarModel.findAll({raw:true,where:{brandId}})
            return {msg: allBrands};
        } catch(err) {
            console.log(err)
            if(err.name === "SequelizeUniqueConstraintError") {
                return  {err:"No need to add brand, brand already exist"};
            }
            return {err:err};
        }
    }
    static async addModel(name, brandId) {
        
        const transaction = await db.sequelize.transaction();
        try {
            const carModel = await CarModel.findOne({raw:true,where:{name,brandId}});
            if(carModel) {
                throw "Car model already exist in brand"
            }
            await CarModel.create({name,brandId},{transaction});
            await transaction.commit(); 
            return {msg: "success"};
        } catch(err) {
            console.log(err)
            if(transaction) {
                await transaction.rollback();
                
            }
            return {err:err};
            
        }
    }
    
    static async deleteModel(id) {
        try {
            let deleted = await CarModel.destroy({where:{id}})
            console.log(deleted)
            if(!deleted) {
                throw "Something went wrong";
            }
            return {msg: "success"};
        } catch(err) {
            console.log(err)
            return {err:err};
        }
    }
   static async adminUpdateModel(name,id) {
    try {
        await CarModel.update({name},{where:{id}})
        return {msg: "success"};
    } catch(err) {
        console.log(err)
       
        return {err:err};
    }
}
   
    
}
module.exports = CarModelService;