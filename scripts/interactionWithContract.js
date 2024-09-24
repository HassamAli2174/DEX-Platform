const MyContract = artifacts.require("MyContract");

module.exports = async function(callback) {
  try {
    const instance = await MyContract.deployed();

    // Fetch the current value of myNumber
    let number = await instance.getMyNumber();
    console.log("Initial value of myNumber: ", number.toString());

    // Set a new value for myNumber
    await instance.setMyNumber(20);
    console.log("New value set to 20");

    // Fetch the updated value of myNumber
    number = await instance.getMyNumber();
    console.log("Updated value of myNumber: ", number.toString());

    callback();
  } catch (error) {
    console.error(error);
    callback(error);
  }
};
