const MyContract = artifacts.require("MyContract");

contract("MyContract", accounts => {
    let instance;

    before(async () => {
        instance = await MyContract.deployed();
    });

    it("should initialize with the correct initial number", async () => {
        const number = await instance.myNumber();
        assert.equal(number.toNumber(), 10, "Initial number is not correct");
    });

    it("should set number correctly", async () => {
        await instance.setNumber(20);
        const number = await instance.myNumber();
        assert.equal(number.toNumber(), 20, "Number was not updated correctly");
    });

    it("should increment the number correctly", async () => {
        await instance.incrementNumber(5);
        const number = await instance.myNumber();
        assert.equal(number.toNumber(), 25, "Number was not incremented correctly");
    });

    it("should decrement the number correctly", async () => {
        await instance.decrementNumber(10);
        const number = await instance.myNumber();
        assert.equal(number.toNumber(), 15, "Number was not decremented correctly");
    });

    it("should return the number only if it is even", async () => {
        try {
            await instance.getNumberIfEven();
            assert.fail("The function did not throw when number is odd");
        } catch (error) {
            assert.include(error.message, "Number is not even", "Incorrect error message");
        }
    });
});
