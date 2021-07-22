const Category = require("../models/category")

function findCategorysByName(name){
    Categorys.find({
        "name":{$regex:`(?i)${name}`}
    }, (err, categorys) => {
        if (err != null) {
          res.status(500).json({
            err: error,
            message: "unable to list all categorys",
          });
          return {Error:err, result :undefined};
        }
        return {Error:undefined, result :categorys};
      });
}
function findOneCategorysByName(name){
    Categorys.findOne({
        name:`${name}`
    }, (err, category) => {
        if (err != null) {
            return {Error:err, result :undefined};
        }
        return {Error:undefined, result :category};
      });
}

function createCategory(category_obj){
    //TODO: check if that category name is existed?!?
    Category.create(category_obj, (err,category)=>{
        if (err){
            console.log(`Couldn't create a category with body ${req.body}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:category
        }
    });
}

function updateCategory(category_obj){
    Category.findByIdAndUpdate(category_obj._id,category_obj, (err,category)=>{
        if (err){
            console.log(`Couldn't update a category with body ${category_obj}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:category
        }
    });
}


function deleteCategory(category_id){
    Category.findByIdAndDelete(category_id, (err,category)=>{
        if (err){
            console.log(`Couldn't delete a category with id ${category_id}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:category
        }
    });
}

module.exports={
    findOneCategorysByName,
    findCategorysByName,
    createCategory,
    updateCategory,
    deleteCategory
}