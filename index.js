// Write your solution in this file!
// 1. Declare global variable customerName using var
var customerName = 'bob';

// 2. Function to uppercase customerName (modifies global variable)
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function that declares a global variable bestCustomer (without var/let/const)
function setBestCustomer() {
  bestCustomer = 'not bob'; // implicitly global
}

// 4. Function to overwrite the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'some name';

// 6. Function to attempt changing leastFavoriteCustomer (will throw an error)
function changeLeastFavoriteCustomer() {
  // Trying to reassign a const - this will cause a TypeError in strict mode
  // and silently fail or throw an error depending on environment
  leastFavoriteCustomer = 'new name';
}