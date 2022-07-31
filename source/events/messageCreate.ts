import { prefix } from '../../config.json';

module.exports = (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) {
        return;
    }

    const command: string[] = message.content.substring(1).split(/ +/),
        miscCommands: string[] = ['add', 'mod', 'rem'];

    if (miscCommands.includes(command[0])) {
        require(`../commands/misc/${command[0]}.ts`)(message, command.slice(1));
    }
}