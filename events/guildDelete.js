const { Listener } = require('discord.js-akago');

module.exports = class GuildDeleteListener extends Listener {
    constructor() {
        super('guildDelete', {
            once: false,
        });
    }

    async execute(guild) {
        this.client.user.setActivity(`${this.client.guilds.cache.size} servers | v!help`, { type: 'WATCHING' })

        const channel = this.client.channels.cache.get("910930877947715595")
        const { MessageEmbed, Message } = require("discord.js")
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Server left...")
        .setThumbnail(guild.icon)
        .setTimestamp()
        .setDescription(`Name: ${guild.name}\nOwner ID: ${guild.ownerId}\nMember count: ${guild.memberCount}`)
   channel.send(embed)
  
     
    }
};

