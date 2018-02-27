
    function connect() {
        console.log('Requesting Bluetooth Device...');
        let options = {

    optionalServices: ['c48e6067-5295-48d3-8d5c-0395f61792b1'],
    filters : [
                ]
    acceptAllDevices:true
  }
  navigator.bluetooth.requestDevice(options)
            .then(device => {
                console.log('> Found ' + device.name);
                console.log('Connecting to GATT Server...');
                //device.addEventListener('gattserverdisconnected', onDisconnected)
                device.gatt.connect().then(gattserveur =>{
                gattserveur.getPrimaryService("c48e6067-5295-48d3-8d5c-0395f61792b1").then(gattservice =>{
                  gattservice.getCharacteristic("332f990e-8f0c-4ab8-8713-f51d63dd5910").then(gattcharacteristic =>
                    {
                      gattcharacteristic.startNotifications().then(gattcharacteristic =>{
                        gattcharacteristic.addEventListener("characteristicvaluechanged", event =>{
                          var value= event.target.value.getUint8(0);
                          $("notifiedValue").text("", +value);

          })
        })
      })
    })
  })
})


    }
