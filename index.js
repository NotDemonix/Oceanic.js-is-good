const {Client} = require ('oceanic.js');

const client = new Client({
    auth: 'Bot <token>'
});

client.on('ready', () => {
    console.log('Oceanic.js is giga')
})

client.on('interactionCreate', (interaction) => {
    //
})
client.on('messageCreate', (message) => {
    if(message.content.startsWith('!ping') {
        message.channel.createMessage({
            content: Math.round(message.guild.latency)
        })
    }
})

client.connect()
