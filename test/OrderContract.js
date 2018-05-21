const OrderContract = artifacts.require('OrderContract');


contract('OrderContract', function(accounts) {
  let orderLib;

  it('Orders are signed correctly', async function() {
    orderContract = await OrderContract.deployed();
    const test = await orderContract.createOrderHashtest.call();
  });
});
