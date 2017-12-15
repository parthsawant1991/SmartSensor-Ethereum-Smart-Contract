App = {
  web3Provider: null,
  contracts: {},
  guage: null,

  init: function() {


  var sensorname = "Rochester";


    var g1 = new JustGage({
    id: "g1",
    value: -90,
    min: -89,
    max: 60,
    title: sensorname,
    label: "Temperature in C",
    donut: true,
    gaugeWidthScale: 0.6,
    counter: true,
    hideInnerShadow: false,
    levelColors: ['#33FFF9','#55FF33','#FFD133'],
    pointer: true,
        pointerOptions: {
          toplength: -15,
          bottomlength: 10,
          bottomwidth: 12,
          color: '#8e8e93',
          stroke: '#ffffff',
          stroke_width: 3,
          stroke_linecap: 'round'
        }    
  });
    App.guage = g1;

console.log(App.guage.config.value);


  console.log(App.guage.config.value);


    return App.initWeb3();
  },

  initWeb3: function() {


App.web3Provider = new Web3.providers.HttpProvider('http://localhost:9545');
web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
  

  $.getJSON('SmartSensor.json',function(data) {

    var smartsensorartifact = data;
   App.contracts.SmartSensor = TruffleContract(smartsensorartifact);

  App.contracts.SmartSensor.setProvider(App.web3Provider);

});

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleClick);

  },

  handleClick: function(event) {
    event.preventDefault();



  App.contracts.SmartSensor.deployed().then(function(instance) {

smartsensorInstance = instance;

return smartsensorInstance.getData.call(1);
}).then(function(readings) {
  console.log(readings);

  console.log(readings.length);

  var reads = readings.substring(0,readings.length-2);

  console.log(reads);

  var nums = parseInt(reads);

  console.log(nums);

  App.guage.refresh(nums,100);

}).catch(function(err){
  console.log(err.message);
});

  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
