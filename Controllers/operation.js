const { EmployeeModel } = require("../Models/schema");
const findAllMongoose = async () => {
    try {
        const result = await EmployeeModel.find();

        console.log("Succesfully found all", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const findSalary = async () => {
    try {
        const result = await EmployeeModel.find({ "salary": { $gt: 30000 } });

        console.log("Succesfully found with salary", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const findExp = async () => {
    try {
        const result = await EmployeeModel.find({ "overallExp": { $gt: 1 } });

        console.log("Succesfully found with Experience", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const findTwoConditions = async () => {
    try {
        const result = await EmployeeModel.find({ $and: [{ "yearGrad": { $gt: 2015 } }, { "overallExp": { $gt: 1 } }] });

        console.log("Succesfully found with Two Conditions", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const updateSalary = async () => {
    try {
        const result = await EmployeeModel.updateMany({ "salary": { $gt: 30000 } }, { $set: { "salary": 28000 } });

        console.log("Succesfully updated with salary", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const deleteLastCompany = async () => {
    try {
        const result = await EmployeeModel.deleteMany({ "lastCompany": "Y" });

        console.log("Succesfully updated with salary", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}
module.exports = {
    findAllMongoose,
    findSalary,
    findExp,
    findTwoConditions,
    deleteLastCompany,
    updateSalary
};
