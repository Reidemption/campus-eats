const Menu = require("../models/menu")

function findMenusByName(name){
    Menus.find({
        "name":{$regex:`(?i)${name}`}
    }, (err, menus) => {
        if (err != null) {
          res.status(500).json({
            err: error,
            message: "unable to list all menus",
          });
          return {Error:err, result :undefined};
        }
        return {Error:undefined, result :menus};
      });
}
function findOneMenusByName(name){
    Menus.findOne({
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
    Menu.create(menu_obj, (err,menu)=>{
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
    Menu.findByIdAndUpdate(menu_obj._id,menu_obj, (err,menu)=>{
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
    Menu.findByIdAndDelete(menu_id, (err,menu)=>{
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
    findOneMenusByName,
    findMenusByName,
    createMenu,
    updateMenu,
    deleteMenu
}