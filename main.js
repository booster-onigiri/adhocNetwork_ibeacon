var Bleacon = require("bleacon");

Bleacon.startScanning();

Bleacon.on('discover', function(bleacon) {
   console.dir(bleacon);
});

//test_ok