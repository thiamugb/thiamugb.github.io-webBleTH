$(function(){
  var options={
      filters: [
        {
          name :["ADPYTH2"]
        }
                ],
                optionalServices :  ['008469cb-550a-4fd7-b204-a9c7ab1eba5d']
              };
    $("#test").click(function(){
      navigator.bluetooth.requestDevice(options).then(function(device) {
        device.gatt.connect().then(function(server){
          server.getPrimaryService('008469cb-550a-4fd7-b204-a9c7ab1eba5d').then(function(service){
            service.getCharacteristic('0d9dd6ab-e0e4-4d2e-acc1-8f0e60916cd4').then(function(characteristic){
characteristic.startNotifications().then(function(characteristic){
  characteristic.addEventListener('characteristicvaluechanged',function(event)
  {
        var value=event.target.value.getUint8(0)
        $("#notifiedValue").text("" +value);
        alert('Name: ' + device.name);
        // Do something with the device.
      })
    })
  })
})
})
})
      .catch(function(error) {
        alert("Something went wrong. " + error);
      });  // Do something with the device.
    });
});
