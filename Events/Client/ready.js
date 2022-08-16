const { Client } = require("discord.js")

module.exports = {
	name: "ready",
	once: true,
	/**
	 * 
	 * @param {Client} client 
	 */
	execute(client) {
		console.log(`[CONSOLE] ${client.user.tag} is online now!`);
		client.user.setActivity("By Morfy || console")
	}
}