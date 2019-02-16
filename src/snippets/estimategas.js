var contract = web3.eth.contract(abi).at(address);
// unit of gas required to call function
var gasEstimate = contract.myAweSomeMethod.estimateGas(arg1, arg2,
    {from: account});
var gasPrice = web3.eth.getGasPrice();

// total ether cost
var gasCostInEther = web3.fromWei((gasEstimate * gasPrice), 'ether');

