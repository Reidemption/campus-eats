const Role = require("../models/role");

function init(){
  Role.RoleModel.estimatedDocumentCount({},(err,num)=>{
    if(err){
      console.log("Couldn't count the number of Roles")
    }else{
      if(num===0){
        createRole(new Role.RoleModel({
          name:"Super Admin",
          permissions:[{
            name:"all"
          }]
        }))
      }
    }

  })
}

function getAllRoles(callback) {
  Role.RoleModel.find({}, (err, roles) => {
    if (err) {
      console.log(`Couldn't find any role.`);
    } else {
      console.log(`Successfully found roles.`);
    }
    callback(err, roles);
  });
}

function findRoleById(role_id, callback) {
  Role.RoleModel.findById(role_id, (err, role) => {
    if (err) {
      console.log(`Couldn't find a role with id: ${role_id}`);
    } else {
      console.log(role);
      console.log(`Successfully found role with id: ${role_id}`);
    }
    callback(err, role);
  });
}

function findRolesByName(name, callback) {
  Roles.RoleModel.find(
    {
      name: { $regex: `(?i)${name}` },
    },
    (err, roles) => {
      if (err) {
        console.log(`Couldn't find a role with name ${name}`);
      } else {
        console.log(`Successfully found role with name ${name}`);
      }
      callback(err, roles);
    }
  );
}

function findARoleByName(name, callback) {
  Roles.RoleModel.findOne(
    {
      name: `${name}`,
    },
    (err, role) => {
      callback(err, role);
    }
  );
}

function createRole(role_obj, callback) {
  //TODO: check if that role name is existed?!?
  if(!isExistingRole(role_obj.name)){
    Role.RoleModel.create(role_obj, (err, role) => {
      if (err) {
        console.log(`Couldn't create a role with body ${role_obj.name}`);
      } else {
        console.log(`Successfully create role with body ${role_obj}`);
      }
      callback(err, role);
    });
  }
}

function updateRole(role_obj, callback) {
  Role.RoleModel.findByIdAndUpdate(role_obj._id, role_obj, (err, role) => {
    if (err) {
      console.log(`Couldn't update a role with body ${role_obj}`);
    } else {
      console.log(`Successfully updated a role with body ${role_obj}`);
    }
    callback(err, role);
  });
}

function deleteRole(id, callback) {
  Role.RoleModel.findByIdAndDelete(id, (err, role) => {
    if (err) {
      console.log(`Couldn't delete a role with id ${id}`);
    } else {
      console.log(`Successfully delete a role with id ${id}`);
    }
    callback(err, role);
  });
}
//===================== HELPERS ==========================
function isExistedRole(roleName){
  if(roleName){
    Role.RoleModel.findOne({
      username: username
    }).exec((err, user) => {
      if (err) {
          return {
            err,
            result:true
          };
      }
      if (user) {
          return{
            err: {message: "Failed! Role is existed!"},
            result:true
          };
      }
      return {
        err: null,
        result:false
      };
    });
  }
}

module.exports = {
  init,
  isExistedRole,
  getAllRoles,
  findRoleById,
  findARoleByName,
  findRolesByName,
  createRole,
  updateRole,
  deleteRole,
};
