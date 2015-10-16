function ChickenCoop(sensors) {
    this.sensors = sensors;
}

ChickenCoop.prototype.initialize = function() {
   this.sensors.map(function(sensor) {
       console.log(sensor);
   });
};

var sensors = [
    {
        class: 'temperature',
        name: 'Indoor Temp 1',
        pin: 'A1',
        getHandle: function() {
            var ow = new OneWire(A1);
            return require("DS18B20").connect(ow, 0);
        }
    },
    {
        class: 'temperature',
        name: 'Indoor Temp 2',
        pin: 'A1',
        getHandle: function() {
            var ow = new OneWire(A1);
            return require("DS18B20").connect(ow, 1);
        }
    },
    {
        class: 'light',
        name: 'Indoor Light Sensor',
        pin: 'A0',
        getHandle: function() {
            return A0;
        }
    }
];

var coop = new ChickenCoop(sensors);
coop.initialize();
