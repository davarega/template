const { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("test")
		.setDescription("test!")
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	/**
	 * 
	 * @param {CommandInteraction} interaction 
	 */
	execute(interaction) {
		interaction.reply({ content: "test", ephemeral: true });
	}
}