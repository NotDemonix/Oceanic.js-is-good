const {Client, ApplicationCommandTypes} = require ('oceanic.js');

const client = new Client({
    auth: 'Bot <token>',
    gateway: {
        autoReconnect: true,
        getAllUsers: false,
        intents: ["MESSAGE_CONTENT"],
    },
});

client.on('error', () => {
    return;
})

client.on('ready', async () => {
    console.log('Oceanic.js is giga')

    await client.application.bulkEditGlobalCommands([
        {
            dmPermission: true,
            type: ApplicationCommandTypes.CHAT_INPUT,
            name: 'ping',
            description: 'Check bot latency',
        },
    ])
})

client.on('interactionCreate', (interaction) => {
    if(interaction.data.name == 'ping') {
        interaction.createMessage({ content: Math.round(interaction.guild.latency), flags: 64 });
    }
})
client.on('messageCreate', (message) => {
    if(message.content.startsWith('!ping') {
        message.channel.createMessage({
            content: Math.round(message.guild.latency),
            messageReference: {messageID: message.id, failIfNotExists: false}
        });
    }
})

client.connect()
