module.exports =  {
    importer: function() {
        return "Imported";
    },

    allFind: async function(clienttemplate) {
        const result = await clienttemplate.query({
            rowMode: 'array',
            text: `SELECT * FROM chitter;`,
        })

        client.end()

        console.log(result.rows)
        return result.rows

    },

    clientCreate: function () {
        // Make Client
        const { Client } = require('pg');
        const connectionString = 'postgres://adambaker@localhost:5432/test_leaderboard'
        const client = new Client({
            connectionString:connectionString, 
        })

        return client;
    },

    clientConnect: async function(client) {

        // Connect
        const connected = await client.connect(err => {
            if (err) {
            console.error('connection error', err.stack)
            } else {
            console.log('connected')
            }
        })

        return connected
    },

}