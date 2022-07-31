import { writeFile } from 'node:fs';
import { GuildMember, TextChannel } from 'discord.js';
let { client, users } = require('..');

module.exports = (member: GuildMember) => {
    const roles: string[] = ['992804292677353472', '992952794174718012'];
    for (const role of roles) {
        member.roles.add(role);
    }

    users[member.user.id] = {
        sold: 500,
        loan: 0,
        job: '992952794174718012'
    }

    users = JSON.stringify(users);
    writeFile(`${__dirname}/../data/users.json`, users, (error: unknown) => {
        error && console.error(error);
    });

    const channel = client.channels.cache
        .get('992801653822607360') as TextChannel;


    channel.send(`<@${member.user.id}> a rejoint \`City Life\` !`);
}