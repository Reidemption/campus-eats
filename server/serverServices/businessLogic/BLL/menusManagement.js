const Menu = require("../models/menu")

function findMenuById(id){
    Menu.MenuModel.find({
        _id:id
    }, (err, menu) => {
        if (err != null) {
          return {Error:err, result :undefined};
        }
        return {Error:undefined, result :menu};
      });
}
function findMenusByName(name){
    Menu.MenuModel.find({
        "name":{$regex:`(?i)${name}`}
    }, (err, menus) => {
        if (err != null) {
          return {Error:err, result :undefined};
        }
        return {Error:undefined, result :menus};
      });
}
function findOneMenusByName(name){
    Menu.MenuModel.findOne({
        name:`${name}`
    }, (err, menu) => {
        if (err != null) {
            return {Error:err, result :undefined};
        }
        return {Error:undefined, result :menu};
      });
}

function createMenu(menu_obj){
    //TODO: check if that menu name is existed?!?
    Menu.MenuModel.create(menu_obj, (err,menu)=>{
        if (err){
            console.log(`Couldn't create a menu with body ${req.body}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:menu
        }
    });
}

function updateMenu(menu_obj){
    Menu.MenuModel.findByIdAndUpdate(menu_obj._id,menu_obj, (err,menu)=>{
        if (err){
            console.log(`Couldn't update a menu with body ${menu_obj}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:menu
        }
    });
}


function deleteMenu(menu_id){
    Menu.MenuModel.findByIdAndDelete(menu_id, (err,menu)=>{
        if (err){
            console.log(`Couldn't delete a menu with id ${menu_id}`);
            return{
                Error:err,
                result:undefined
            }
        };
        return{
            Error:undefined,
            result:menu
        }
    });
}

module.exports={
    findMenuById,
    findOneMenusByName,
    findMenusByName,
    createMenu,
    updateMenu,
    deleteMenu
}