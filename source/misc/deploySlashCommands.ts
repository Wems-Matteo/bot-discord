import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import * as commandsModule from '../commands';
import { client_id, guild_id, token_id } from '../../config.json';

/* type Command = {
    command: SlashCommandBuilder
} */

const commands: any[] = []

for (const command of Object.values/* <Command> */(commandsModule)) {
    commands.push(command.command);
}

const rest = new REST({ version: '10' }).setToken(token_id);

rest.put(Routes.applicationGuildCommands(client_id, guild_id), { body: commands }).then(() => {
    console.log('Toutes les commandes ont été enregistrées !');
}).catch((error: any) => {
    if (error) {
        console.error(error);
    }
});