var r = require('./contract/Main.sol');
var Main = r.Main;
var web3 = r.web3;

var account = web3.eth.accounts[1];

var before = web3.fromWei(web3.eth.getBalance(account)).toNumber();
console.log('Balance of', account, before);

console.log('Calling doSomething() on contract with value of 0.1 Ether...');
var transaction = Main.doSomething({from: account, value: web3.toWei(0.1)});
console.log('Transaction', transaction);

var after = web3.fromWei(web3.eth.getBalance(account)).toNumber();
console.log('Balance of', account, after);

console.log('Difference', (after-before));
