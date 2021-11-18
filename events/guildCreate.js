const { Listener } = require('discord.js-akago');

module.exports = class GuildCreateListener extends Listener {
    constructor() {
        super('guildCreate', {
            once: false,
        });
    }

    async execute(guild) {
        this.client.user.setActivity(`${this.client.guilds.cache.size} servers | v!help`, { type: 'WATCHING' })
        const prefix = require("discord-prefix");

        await prefix.setPrefix('v!', guild.id)

        const channel = this.client.channels.cache.get("910930863762571404")
        const { MessageEmbed, Message } = require("discord.js")
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("New server joined!")
        .setThumbnail(guild.icon)
        .setTimestamp()
        .setDescription(`Name: ${guild.name}\nOwner ID: ${guild.ownerId}\nMember count: ${guild.memberCount}`)
   channel.send(embed)
  
     
    }
};

