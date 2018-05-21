const OrderLib = artifacts.require('OrderLib');


contract('OrderLib', function(accounts) {
  let orderLib;

  it('Orders are signed correctly', async function() {
    orderLib = await OrderLib.deployed();
    const test = await orderLib.createOrderHashtest.call();
  });
});
