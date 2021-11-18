const { Command } = require('discord.js-akago');
const { MessageEmbed } = require('discord.js');


module.exports = class HelpCommand extends Command {
    constructor() {
        super('help', {
            description: 'Displays a list of all commands I have.',
            category: 'Misc',
            aliases: ["commands", "h", "cmds"],
            usage: "help [commandName]"
        });
    }

    async execute(message, [commandName]) {
        const { getPrefix } = require("discord-prefix")
        
        const prefix = getPrefix(message.guild.id)
        const { commands, util } = this.client;
        const embed = new MessageEmbed().setColor('BLUE');
        const command = commands.get(commandName);

        if (command) {
            embed.setTitle(`\`${command.name}\``);
            embed.addField('Description', command.description);
            if (command.aliases.length) {
                embed.addField('Aliases', command.aliases.map(a => `\`${a}\``).join(', '));
            }
            if (command.usage){
                embed.addField("Usage:", `\`${prefix + command.usage}\``)
            }
        }
        else {
            const categories = util.removeDuplicates(commands.map(c => c.category)).filter(c => c !== 'Owner');
            embed.setDescription(`Total Commands: \`${this.client.commands.size - 2}\`| For additional info on a command, use \`${prefix}help <command>\``);
            for (const category of categories) {
                const filteredCommands = commands.filter(c => c.category == category);
               
                embed.addFields([{
                    name: category || 'Misc',
                    value: filteredCommands.map(c => `\`${c.name}\``).join(', '),
                }]);
            }
        }

        message.channel.send(embed);
    }
}; 