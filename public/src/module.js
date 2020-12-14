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
        const connectionString = 'postgres://fnzfbrgbzkglrw:49bf869149095913cf65a9a9e5094f12fed686eda3ff0fe30dae0cf3d461a9fb@ec2-52-6-75-198.compute-1.amazonaws.com:5432/dcea6lf09mpit7'
        const client = new Client({
            connectionString:connectionString, 
            ssl:{ rejectUnauthorized: false },
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