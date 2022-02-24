var ValidatorContract = artifacts.require("../contracts/ValidatorContract.soli");

module.exports = function(deployer) {
	deployer.deploy(ValidatorContract);
};