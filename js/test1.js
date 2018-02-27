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
          })
                      .catch(error => {
            console.log('Argh! ' + error);
        });


}
