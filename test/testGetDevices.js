var unifi = require('unifi-v3');

// Let's create a new unifi session for the default site code
var default_site = new unifi('192.168.5.1', 8443, 'default');

// Let's go ahead and login
default_site.login('admin', 'iehfkf3432', function(err){
    if(err){return console.error(err)}
    console.log('Login Successful, Lets get all the access points now');
    default_site.getDevices(function(err, data){
        if(err){return console.error(err)}
        // Now that we have all the access points, let print out the access points name and MAC and IP address
        data.forEach(function(AP){
            console.log(AP.name, AP.mac, AP.ip);
        });
        // Now that we are done, lets logout
        default_site.logout();
    });
});
