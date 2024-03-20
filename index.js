// Write your solution in this file!
// index.js
const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
  };
  
  const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
  };
  
  const deleteFromEmployeeByKey = (employee, key) => {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  };
  
  const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
  };
  
  const employee = {
    name: 'Sam',
    streetAddress: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001'
  };
