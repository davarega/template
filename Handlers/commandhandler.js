function loadCommands(client) {
	const ascii = require('ascii-table');
	const fs = require('fs');
	const table = new ascii().setHeading("Commands", "Status");

	let commandsArray = [];
	let developerArray = [];

	const commandsFolders = fs.readdirSync("./Commands");
	for (const folder of commandsFolders) {
		const commandsFiles = fs.readdirSync(`./Commands/${folder}`).filter((file) => file.endsWith(".js"));

		for (const file of commandsFiles) {
			const commandsFile = require(`../Commands/${folder}/${file}`);

			client.commands.set(commandsFile.data.name, commandsFile);

			if (commandsFile.developer) developerArray.push(commandsFile.data.toJSON())
			else commandsArray.push(commandsFile.data.toJSON());

			table.addRow(file, "🟩")
			continue
		}
	}

	client.application.commands.set(commandsArray);

	const developerGuild = client.guilds.cache.get(client.config.developerGuild);

	developerGuild.commands.set(developerArray);

	return console.log(table.toString(), "\n Loaded Commands")
}

module.exports = { loadCommands }