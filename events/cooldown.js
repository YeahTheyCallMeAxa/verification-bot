const { Listener } = require('discord.js-akago');

module.exports = class extends Listener {
    constructor() {
        super('cooldown', {
            once: false,
            emitter: 'commandHandler',
        });
    }
    
    async execute(message, command, timeLeft) {
        const timeInSeconds = timeLeft / 1000;
        return message.channel.send(`Please wait ${timeInSeconds.toFixed(1)} more second(s) before reusing the **${command.name}** command.`);
    }
};