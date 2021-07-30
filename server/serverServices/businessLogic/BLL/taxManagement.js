const Tax = require("../models/tax");

function getAllTaxes(callback) {
  Tax.TaxModel.find({}, (err, taxes) => {
    if (err) {
      console.log(`Couldn't get any tax.`);
    } else {
      console.log(`Successfully found taxes.`);
    }
    callback(err, taxes);
  });
}

function getTaxById(tax_id, callback) {
  Tax.TaxModel.findById(tax_id, (err, tax) => {
    if (err) {
      console.log(`Couldn't get a tax with id: ${tax_id}`);
    } else {
      console.log(tax);
      console.log(`Successfully found tax with id: ${tax_id}`);
    }
    callback(err, tax);
  });
}

function getTaxesByRestaurantId(rest_id, callback) {
  Tax.TaxModel.findOne({restaurant_id:rest_id}, (err, tax) => {
    if (err) {
      console.log(`Couldn't get a tax with id: ${tax_id}`);
    } else {
      console.log(tax);
      console.log(`Successfully found tax with id: ${tax_id}`);
    }
    callback(err, tax);
  });
}

function getTaxesByName(name, callback) {
  Taxs.TaxModel.find(
    {
      name: { $regex: `(?i)${name}` },
    },
    (err, taxes) => {
      if (err) {
        console.log(`Couldn't get a tax with name ${name}`);
      } else {
        console.log(`Successfully found tax with name ${name}`);
      }
      callback(err, taxes);
    }
  );
}

function getATaxByName(name,rest_id, callback) {
  Taxs.TaxModel.findOne(
    {
      restaurant_id:rest_id,
      name: `${name}`,
    },
    (err, tax) => {
      callback(err, tax);
    }
  );
}

function createTax(tax_obj, callback) {
  //TODO: check if that tax name is existed?!?
  console.log(tax_obj)
  Tax.TaxModel.create(tax_obj, (err, tax) => {
    if (err) {
      console.log(`Couldn't create a tax with body ${tax_obj.name}`);
    } else {
      console.log(`Successfully create tax with body ${tax_obj}`);
    }
    callback(err, tax);
  });
}

function updateTax(tax_obj, callback) {
  Tax.TaxModel.findByIdAndUpdate(tax_obj._id, tax_obj, (err, tax) => {
    if (err) {
      console.log(`Couldn't update a tax with body ${tax_obj}`);
    } else {
      console.log(`Successfully updated a tax with body ${tax_obj}`);
    }
    callback(err, tax);
  });
}

function deleteTax(id, callback) {
  Tax.TaxModel.findByIdAndDelete(id, (err, tax) => {
    if (err) {
      console.log(`Couldn't delete a tax with id ${id}`);
    } else {
      console.log(`Successfully delete a tax with id ${id}`);
    }
    callback(err, tax);
  });
}

module.exports = {
  getAllTaxes,
  getTaxById,
  getTaxesByRestaurantId,
  getTaxesByName,
  getATaxByName,
  createTax,
  updateTax,
  deleteTax,
};
