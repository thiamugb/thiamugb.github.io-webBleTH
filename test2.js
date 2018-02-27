$(document).ready(function(){
    $("#test").click(function(){
      let options = {

      optionalServices: ['c48e6067-5295-48d3-8d5c-0395f61792b1'],
      acceptAllDevices:true
                    }
                    navigator.bluetooth.requestDevice(options)
                              .then(function(device){
                                  console.log('> Found ' + device.name);
                                  device.gatt.connect().then(function(server){
                                    server.getPrimaryService('008469cb-550a-4fd7-b204-a9c7ab1eba5d').then(function(service){
                                      service.getCharacteristic('0d9dd6ab-e0e4-4d2e-acc1-8f0e60916cd4').then(function(characteristic){
                                characteristic.startNotifications().then(function(characteristic){
                                characteristic.addEventListener('characteristicvaluechanged',function(event)
                                {
                                  var value=event.target.value.getUint8(0)
                                  $("#notifiedValue").text("" +value);
                          });
                          });
                          });
                          });
                          });
                          });
                          });

});
