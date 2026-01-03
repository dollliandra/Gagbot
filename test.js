const discord = require('discord.js')
const fs = require('fs')
const path = require('path');
const admZip = require('adm-zip');
const { getTimestringForZip } = require("./functions/timefunctions");
const env = require('dotenv')
const { loadEmoji } = require("./functions/messagefunctions.js");

env.config();

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
    try {
        await client.application.fetch();
        loadEmoji(client)
    }
    catch (err) {
        console.log(err)
    }
})


client.login(process.env.DISCORDBOTTOKEN)