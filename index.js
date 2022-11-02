var name = "employee1";
var streetAddress = "location1";

var employee = {name: streetAddress };

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj};

    newObj[key] = value;

    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue( employee, key, value){
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee,key) {
    let ploy2 = {...employee};
    delete ploy2[key];
    return ploy2;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}


