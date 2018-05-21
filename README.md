# solidity-coverage-bug

To reproduce

1. check out repo
1. `npm install`
1. `./node_modules/.bin/solidity-coverage`
1. see that library call to a pure function fails with revert but call to pure function in contract works only in the coverage environment.
1. compare to `truffle test`
