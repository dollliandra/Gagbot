const discord = require('discord.js')
const dotenv = require('dotenv')
const { messageSend } = require(`./functions/messagefunctions.js`)

dotenv.config()

var gagged = {}

const client = new discord.Client({
    intents: [
        discord.GatewayIntentBits.Guilds,
        discord.GatewayIntentBits.GuildMessages,
        discord.GatewayIntentBits.MessageContent,
        discord.GatewayIntentBits.GuildMembers
    ]
})

client.on("clientReady", async () => {
    // This is run once we’re logged in!
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", async (msg) => {
    // This is called when a message is received.
    if ((msg.channel.id != process.env.CHANNELID) || (msg.webhookId)) { return }
    //console.log(msg.member.displayAvatarURL())
    //console.log(msg.member.displayName)
    messageSend(msg.content, msg.member.displayAvatarURL(), msg.member.displayName);
})

client.login(process.env.DISCORDBOTTOKEN)