    function connect() {
        console.log('Requesting Bluetooth Device...');
        let options = {

    optionalServices: ['c48e6067-5295-48d3-8d5c-0395f61792b1'],
    acceptAllDevices:true
  }
  navigator.bluetooth.requestDevice(options)
            .then(device => {
                console.log('> Found ' + device.name);
                console.log('Connecting to GATT Server...');
                //device.addEventListener('gattserverdisconnected', onDisconnected)
                device.gatt.connect().then(gattserveur =>{
                  $("notifiedValue").text("ok bon");

                gattserveur.getPrimaryService("c48e6067-5295-48d3-8d5c-0395f61792b1").then(gattservice =>{
                  gattservice.getCharacteristic("0d9dd6ab-e0e4-4d2e-acc1-8f0e60916cd4").then(gattcharacteristic =>
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
                          .catch(error => {
                console.log('Argh! ' + error);
            });


    }
