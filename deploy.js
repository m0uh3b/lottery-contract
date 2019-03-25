const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')
//const ganache = require ('ganache-cli')
const provider = new HDWalletProvider('mom service beauty fence unknown parade kick doctor cereal fuel task evidence', 'https://rinkeby.infura.io/v3/81eeb7460e3f4917b6290a5eeb38254b')

//const provider = ganache.provider()
//const web3 = new Web3('http://127.0.0.1:7545') 
const web3 = new Web3(provider)
const deploy = async () => {
  const accounts = await web3.eth.getAccounts() // testing connection

  console.log('Attempting to deploy from account', accounts[0])

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: "0x"+bytecode })
    .send({gas : '1000000' ,from: accounts[0] })
  
  console.log(interface)
  console.log('Contract deployed to', result.options.address)
}
deploy()
