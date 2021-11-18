const { Command } = require('discord.js-akago');

module.exports = class PingCommand extends Command {
    constructor() {
        super('ping', {
            description: 'Pong!',
            category: 'Misc',
            usage: "ping",
            aliases: "pi"

        });
    }

    async execute(message) {

      
        const msg = await message.channel.send('Pinging...');
        const messagePing = msg.createdTimestamp - message.createdTimestamp;
        msg.edit(`Pong! ${messagePing}ms \nHeart beat: ${this.client.ws.ping}ms`);
    }
}; 