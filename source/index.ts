import { readdir, readFileSync } from 'node:fs';
import { Client, Intents } from 'discord.js';
import { token_id } from '../config.json';

export const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

readdir(`${__dirname}/events`, (error: unknown, files: string[]) => {
    if (error) {
        console.error(error);
        return;
    }

    for (const file of files) {
        const event = file.split('.')[0];
        client.on(event, (...args: any) => {
            require(`${__dirname}/events/${file}`)(args[0]);
        });
    }
});

const categories: string[] = ['buyables', 'jobs', 'users'];
for (const category of categories) {
    module.exports[category] = JSON.parse(
        readFileSync(`${__dirname}/data/${category}.json`).toString()
    );
}

client.login(token_id);