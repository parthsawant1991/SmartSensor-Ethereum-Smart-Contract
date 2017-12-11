pragma solidity ^0.4.0;
//import "github.com/oraclize/ethereum-api/oraclizeAPI.sol";
//if running on public chain use below import
import "../ethereum-api-master/oraclizeAPI_0.4.sol";


contract SmartSensor is usingOraclize {

string public reading;

	function SmartSensor() {
//	OAR = OraclizeAddrResolverI(0x6f485C8BF6fc43eA212E93BBF8ce046C7f1cb475);
	update();
	}
	
	function getData(uint sensorId) public returns (string) {
	require(sensorId>=0); 
	return reading; //sensor id will be used for associating reading to individual sensors
	}

	function __callback(bytes32 myid, string result) {
        if (msg.sender != oraclize_cbAddress()) throw;
        reading = result;
    }
    
    function update() payable {
        oraclize_query("WolframAlpha","temperature in rochester");
    }

}