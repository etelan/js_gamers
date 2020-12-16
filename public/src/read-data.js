var request = require('request');

module.exports =  { 
    readData: function() {
        request('http://localhost:3000/database', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body) // Print the google web page.
            }
        })
    }
}