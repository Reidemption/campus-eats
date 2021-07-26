const Category = require("../models/category")

function findCategoryById(id){
    Category.CategoryModel.find({
        _id:id
    }, (err, category) => {
        if (err != null) {
          return {Error:err, result :undefined};
        }
        return {Error:undefined, result :category};
      });
}
function findCategorysByName(name){
    Category.CategoryModel.find({
        "name":{$regex:`(?i)${name}`}
    }, (err, categorys) => {
        if (err != null) {
          return {Error:err, result :undefined};
        }
        return {Error:undefined, result :categorys};
      });
}
function findOneCategorysByName(name){
    Category.CategoryModel.findOne({
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
    Category.CategoryModel.create(category_obj, (err,category)=>{
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
    Category.CategoryModel.findByIdAndUpdate(category_obj._id,category_obj, (err,category)=>{
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
    Category.CategoryModel.findByIdAndDelete(category_id, (err,category)=>{
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
    findCategoryById,
    findOneCategorysByName,
    findCategorysByName,
    createCategory,
    updateCategory,
    deleteCategory
}