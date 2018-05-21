const OrderLib = artifacts.require('./OrderLib.sol');
const OrderContract = artifacts.require('./OrderContract.sol');

module.exports = function(deployer, network) {
  if (network !== 'live') {
    deployer.deploy(OrderLib);
    deployer.deploy(OrderContract);
  }
};
