const fs = require("fs")

const {Car,db} = require("../database/models/index");
const FilesCloud = require("../utils/cloudinary")

class CarService {
    
    static async getAllCars() {
        try {
            const [value,metadata] = await db.sequelize.query(`
            SELECT M."name" as "modelName", C."imageArray"::json,B."name" as "brandName",C.id as id
            FROM "Cars" as C
            LEFT JOIN "CarModels" as M
            ON C."modelId" = M.id
            LEFT JOIN "CarBrands" as B
            ON M."brandId" = B.id
            `)
            console.log(value)
            return {msg: value};
        } catch(err) {
            console.log(err)
           
            return {err:err};
        }
    }
    static async getCar(id) {
        try {
            const [value,metadata] = await db.sequelize.query(`
            SELECT M."name" as "modelName", C."imageArray"::json,B."name" as "brandName",C.id as id
            FROM "Cars" as C 
            LEFT JOIN "CarModels" as M
            ON C."modelId" = M.id
            LEFT JOIN "CarBrands" as B
            ON M."brandId" = B.id  where C.id=${id}
            `)
            console.log(value)
            return {msg: value};
        } catch(err) {
            console.log(err)
           
            return {err:err};
        }
    }
    static async adminAddCar(files, modelId) {
        
      
        try {
            const urls = []
            for (const file of files) {
                const { path } = file;
                console.log(222,path)
                const newPath = await FilesCloud.upload(path,"Images")
                urls.push(newPath)
                let f = fs.unlinkSync(path)
                console.log("deleted",f)
              }
              console.log("adminCar",modelId)
            await Car.create({imageArray:JSON.stringify(urls),modelId});
            return {msg: "success"};
        } catch(err) {
            console.log(err)
            return {err:err};
            
        }
    }
    
    static async deleteCar(id) {
        try {
            const [array,metadata] = await db.sequelize.query(`SELECT "imageArray"::json FROM public."Cars" where id=${id};`);
            if(array.length === 0) {
                console.log("array length 0")
                throw "Something went wrong";
            }
            console.log("deletecar",array)
            for(let i = 0; i < array[0].imageArray.length; i++) {
            await FilesCloud.delete(array[0].imageArray[i].id)
            console.log(array[0].imageArray[i].id)
            }
            
            let deleted = await Car.destroy({where:{id}})
            console.log("deleted car",deleted)
            if(!deleted) {
                throw "Something went wrong";
            }
            return {msg: "success"};
        } catch(err) {
            console.log(err)
            return {err:err};
        }
    }
   static async adminUpdateCar(modelId,id) {
    try {
        
        await Car.update({modelId},{where:{id}})
        return {msg: "success"};
    } catch(err) {
        console.log(err)
       
        return {err:err};
    }
}
static async adminAddCarPicture(files, id) {
        
      
    try {
        const urls = []
        for (const file of files) {
            const { path } = file;
            console.log(222,path)
            const newPath = await FilesCloud.upload(path,"Images")
            urls.push(newPath)
            let f = fs.unlinkSync(path)
            console.log("deleted",f)
          }
          const [array,metadata] = await db.sequelize.query(`SELECT "imageArray"::json FROM public."Cars" where id=${id};`);
          console.log("adminaddCarpicture",array)
        let newArr= [...array[0].imageArray,...urls]
          console.log(newArr)
          await Car.update({imageArray:JSON.stringify(newArr)},{where:{id}})
        return {msg: "success"};
    } catch(err) {
        console.log(err)
        return {err:err};
        
    }
}
static async adminDeletePicture(carId, id) {
        
      
    try {
        await FilesCloud.delete(id)
          const [array,metadata] = await db.sequelize.query(`SELECT "imageArray"::json FROM public."Cars" where id=${carId};`);
          
          await Car.update({imageArray:JSON.stringify(array[0].imageArray.filter(elem => elem.id !==id))},{where:{id:carId}})
        return {msg: "success"};
    } catch(err) {
        console.log(err)
        return {err:err};
        
    }
}
    
}
module.exports = CarService;