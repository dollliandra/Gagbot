const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

// Grab all the command files from the commands directory
const gagtypes = [];
const commandsPath = path.join(__dirname, 'gags');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// Push the gag name over to the choice array. 
for (const file of commandFiles) {
    const gag = require(`./gags/${file}`);
	gagtypes.push(
        { name: gag.choicename, value: file.replace('.js', '') }
    );
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gag')
		.setDescription('Apply a gag to the user')
		.addUserOption(opt =>
			opt.setName('user')
			.setDescription('The user to gag')
			.setRequired(true)
        )
		.addStringOption(opt =>
			opt.setName('gag')
			.setDescription('Type of gag to use')
			.addChoices(...gagtypes)
		),
    async execute(interaction) {
		console.log(interaction)
		console.log(interaction.options)
    }
}