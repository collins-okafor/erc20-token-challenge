var web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

async function main()
{ 
    const account = web3.eth.accounts.create(web3.utils.randomHex(32));
    console.log(account);
}

main()