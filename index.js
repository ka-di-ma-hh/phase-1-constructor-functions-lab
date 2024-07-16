// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}
function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}
function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(driverFunction);
}