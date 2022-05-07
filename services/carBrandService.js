
const {CarBrand} = require("../database/models/index");


class CarBrandService {
    
    static async getAllBrand() {
        try {
            const allBrands = await CarBrand.findAll({raw:true})
            return {msg: allBrands};
        } catch(err) {
            console.log(err)
            if(err.name === "SequelizeUniqueConstraintError") {
                return  {err:"No need to add brand, brand already exist"};
            }
            return {err:err};
        }
    }
    static async addBrand(name) {
        try {
            await CarBrand.create({name})
            return {msg: "success"};
        } catch(err) {
            console.log(err)
            if(err.name === "SequelizeUniqueConstraintError") {
                return  {err:"No need to add brand, brand already exist"};
            }
            return {err:err};
        }
    }
    
    static async deleteBrand(name) {
        try {
            let deleted = await CarBrand.destroy({where:{name}})
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
   static async adminUpdateBrand(name,id) {
    try {
        await CarBrand.update({name},{where:{id}})
        return {msg: "success"};
    } catch(err) {
        console.log(err)
        if(err.name === "SequelizeUniqueConstraintError") {
            return  {err:"No need to update brand, brand already exist"};
        }
        return {err:err};
    }
}
   
    
}
module.exports = CarBrandService;