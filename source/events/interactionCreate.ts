import * as commandsModule from '../commands';

const commands = Object(commandsModule);

module.exports = (interaction) => {
    if (!interaction.isCommand) {
        return;
    }

    commands[interaction.commandName].run(interaction);
}