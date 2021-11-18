const { Command } = require('discord.js-akago');

module.exports = class InviteCommand extends Command {
    constructor() {
        super('invite', {
            description: 'Sends you an invite link for the bot',
            category: 'Bot Settings/Stats',
            usage: "invite",
            aliases: "inv"

        });
    }

    async execute(message) {

      
       const { MessageEmbed } = require("discord.js")
       const url1 = 'https://discord.gg/JaG9tBFZBR'
       const url2 = 'https://discord.com/api/oauth2/authorize?client_id=909374927268876348&permissions=268561408&scope=bot'
       const embed = new MessageEmbed()
       .setColor("RANDOM")
       .setFooter("Invite now!")
       .setTimestamp()
      
       .setDescription(`[Support Server](${url1} "Join now!")\n[Invite Link](${url2} "Invite now!")`)
       return message.channel.send(embed)
    }
}; 