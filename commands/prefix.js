const { Command } = require('discord.js-akago');

module.exports = class PrefixCommand extends Command {
    constructor() {
        super('prefix', {
            description: 'Sets your server prefix',
            category: 'Bot Settings/Stats',
            usage: "prefix <new prefix>",
            aliases: "p"

        });
    }

    async execute(message, args) {
        const prefix = require('discord-prefix');
        const { MessageEmbed } = require("discord.js")

      
      if(!message.guild) return;
      let guildPrefix = prefix.getPrefix(message.guild.id) || 'v!'
      if(!args[0]) return message.channel.send(`The current prefix is \`${guildPrefix}\`, you can set what you want it as with \`${guildPrefix}prefix <newprefix here>\``)
      if(args[0].length > 3){
          return message.channel.send("Your new prefix must only be from 1-3 letters")

      }
      prefix.setPrefix(args[0], message.guild.id)
      return message.channel.send(new MessageEmbed().setColor("RANDOM").setTitle("Prefix changed").setDescription(`From \`${guildPrefix}\` to \`${args[0]}\``).setTimestamp())


    }
}; 