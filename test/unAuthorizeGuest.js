var unifi = require('unifi-v3');

// Let's create a new unifi session for the default site code
var default_site = new unifi('192.168.5.1', 8443, 'default');
default_site.login('admin', 'iehfkf3432', function(err){
    if(err){return console.error(err)}
    console.log('Login Successful...');
    // Let get all the Vouchers
    default_site.unAuthorizeGuest('56:84:7a:fe:97:99', function(err,data){
        if(err){return console.error(err)}
        // Lets Print out the access code and how many people are currently using them
        console.log('unAuthorize Successful...');
    });
});