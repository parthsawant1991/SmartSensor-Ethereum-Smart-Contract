# SmartSensor-Ethereum-Smart-Contract

This is a Rochester Institute of Technology, DEpartment of Computer Science Capstone Project for the degree requirements of Masters in Computer Science. This project was built using the Truffle framework.

The objective of this project is to develop an IoT solution for S2aaS-Sensor as a Service model on the Ethereum blockchain using smart contracts.


Files:

/contracts                contain the smart contracts.
/migration                contains the contracts for migrations.
/ethereum-api-master      contains the contracts from Oraclize.
/ethereum-bridge-master   contains the Ethereum Bridge source code .
/src                      contains the JavaScript files for the user interface.



Instructions to run the smart contract using Truffle

1. Install Truffle

$ npm install -g truffle

2. In the project directory, begin by compiling the code

$ truffle compile

3. Once the code is successfully compiled, enter the truffle console for migrating and running the smart contracts

$truffle develop

4. After the above command, we will be able to verify that the console has started by seeing

Truffle Develop started at http://localhost:9545/

Accounts:
(0) 0x123.....................................
.
.
.
(9) 0x456.....................................

Mnemonic: candy maple cake sugar pudding cream honey rich smooth crumble sweet treat

truffle(develop)> _

5. The above can be used to view transactions using metamask browser plugin. If running the smart contract on a private chain, deploy the ethereum bridge using the following commands in a new terminal window at the appropriate port.

$ node bridge -H localhost:9545 -a 1

6. Once the bride is initialize, run the migration using the following command in the truffle console.

truffle(develop)> migrate

7. A successful migration will result in the following last line.

Saving successful migration to network...
  ... 0xabc123..........................................................
Saving artifacts...

8. After a successuful migration we can test our smart contract using the following command.

$ truffle(develop)> SmartSensor.deployed().then(function(instance){return instance.getData.call(1);}).then(function(value){return value});

9. The result of the smart contract will be displayed in the next following line.

'-4 C'


