const { Command } = require('discord.js-akago');
const mongo = require("mongo-glob-economy")
module.exports = class SetupCommand extends Command {
    constructor() {
        super('setup', {
            description: 'Sets up the verification process in the server',
            category: 'Verification',
            usage: "setup",
            aliases: "s"
       

        });
    }

    async execute(message) {
        let verifiedRole;
        let channelID;
        const userID = message.author.id
        const member = message.member;if (!message.guildId === message.author.id && !member.hasPermission(['ADMINISTRATOR'])) {
return message.channel.send("You must have the `ADMINISTRATOR` permission to use this command!")};const discord = require("discord.js");let perm;if(!message.guild.me.hasPermission(['MANAGE_ROLES'])){
    perm = `MANAGE_ROLES`;const embedPerm = new discord.MessageEmbed();embedPerm.setTitle("Permissions");embedPerm.setDescription(`**Permissions needed:**\n\n\`MANAGE MESSAGES\`*,* \`MANAGE ROLES\`*,* \`VIEW CHANNEL\`*,* \`EMBED LINKS\`*,* \`ATTACH_FILES\` *&* \`SEND MESSAGES\`\n**Permissions Not Given To Bot**\n\n\`${perm}\``);embedPerm.setColor("RANDOM");embedPerm.setAuthor("ERROR", message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embedPerm)
}else if(!message.guild.me.hasPermission(['MANAGE_MESSAGES'])){
    perm = `MANAGE_MESSAGES`;const embedPerm = new discord.MessageEmbed();embedPerm.setTitle("Permissions");embedPerm.setDescription(`**Permissions needed:**\n\n\`MANAGE MESSAGES\`*,* \`MANAGE ROLES\`*,* \`VIEW CHANNEL\`*,* \`EMBED LINKS\`*,* \`ATTACH_FILES\` *&* \`SEND MESSAGES\`\n**Permissions Not Given To Bot**\n\n\`${perm}\``);embedPerm.setColor("RANDOM");embedPerm.setAuthor("ERROR", message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embedPerm)
}else if(!message.guild.me.hasPermission(['VIEW_CHANNEL'])){
    perm = `VIEW_CHANNEL`;const embedPerm = new discord.MessageEmbed();embedPerm.setTitle("Permissions");embedPerm.setDescription(`**Permissions needed:**\n\n\`MANAGE MESSAGES\`*,* \`MANAGE ROLES\`*,* \`VIEW CHANNEL\`*,* \`EMBED LINKS\`*,* \`ATTACH_FILES\` *&* \`SEND MESSAGES\`\n**Permissions Not Given To Bot**\n\n\`${perm}\``);embedPerm.setColor("RANDOM");embedPerm.setAuthor("ERROR", message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embedPerm)
}else if(!message.guild.me.hasPermission(['EMBED_LINKS'])){
    perm = `EMBED_LINKS`;const embedPerm = new discord.MessageEmbed();embedPerm.setTitle("Permissions");embedPerm.setDescription(`**Permissions needed:**\n\n\`MANAGE MESSAGES\`*,* \`MANAGE ROLES\`*,* \`VIEW CHANNEL\`*,* \`EMBED LINKS\`*,* \`ATTACH_FILES\` *&* \`SEND MESSAGES\`\n**Permissions Not Given To Bot**\n\n\`${perm}\``);embedPerm.setColor("RANDOM");embedPerm.setAuthor("ERROR", message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embedPerm)
}else if(!message.guild.me.hasPermission(['ATTACH_FILES'])){
    perm = `ATTACH_FILES`;const embedPerm = new discord.MessageEmbed();embedPerm.setTitle("Permissions");embedPerm.setDescription(`**Permissions needed:**\n\n\`MANAGE MESSAGES\`*,* \`MANAGE ROLES\`*,* \`VIEW CHANNEL\`*,* \`EMBED LINKS\`*,* \`ATTACH_FILES\` *&* \`SEND MESSAGES\`\n**Permissions Not Given To Bot**\n\n\`${perm}\``);embedPerm.setColor("RANDOM");embedPerm.setAuthor("ERROR", message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embedPerm)
}else if(!message.guild.me.hasPermission(['SEND_MESSAGES'])){
    perm = `SEND_MESSAGES`;const embedPerm = new discord.MessageEmbed();embedPerm.setTitle("Permissions");embedPerm.setDescription(`**Permissions needed:**\n\n\`MANAGE MESSAGES\`*,* \`MANAGE ROLES\`*,* \`VIEW CHANNEL\`*,* \`EMBED LINKS\`*,* \`ATTACH_FILES\` *&* \`SEND MESSAGES\`\n**Permissions Not Given To Bot**\n\n\`${perm}\``);embedPerm.setColor("RANDOM");embedPerm.setAuthor("ERROR", message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embedPerm)}



    message.channel.send("Alright! What is the verification role? (The role people get after they verify) ID, role name & role @mention is supported.")
    const filter = m => m.author.id === userID;
    await message.channel
    .awaitMessages(filter, {
        max: 1,
        time: 180000,
        errors: ["time"]
    })
    
    .then(async rolen => {
        
        const role1 = rolen.first().content;
        let myRole;
        const myRole1 =  message.guild.roles.cache.find(role => role.name === role1) || message.guild.roles.cache.get(role1);
        if(!myRole1){
            return message.channel.send("Make sure the role is sent by the role ID or name because I can't find that role!")
            
        }
        //NaN: Not a number
        

        if(isNaN(myRole)){
            myRole = myRole1.id

        }else{
        myRole = myRole1
        }
      

      
          
               
           
        

  


   const botrole = message.guild.roles.cache.find(role => role.name === `Verification Bot`)
   
if(!botrole){
    return message.channel.send("Error! Please join the support server so we could fix it for you. Link: https://discord.gg/JaG9tBFZBR")
}

if(myRole1.position > botrole.position){
    const embed = new discord.MessageEmbed()
    .setDescription("The bot's role must be above the\nverified role in the role list!")
    .setColor('RANDOM')
    .setTimestamp()
    .setImage(`https://media.giphy.com/media/qfsV7IyjXoCFLhauQ2/giphy.gif`)
    .setAuthor("Error", message.author.displayAvatarURL( { dynamic: true }))
    return message.channel.send(embed)
}

        
        
        

        verifiedRole = myRole;

    
       

        await message.channel.send(`Next up! What is the channel that people can verify in? Respond with the channel ID or channel name. [Be sure that I can send messages and etc in that channel!]`)
        await message.channel.awaitMessages(filter, {
            max: 1,
            time: 180000,
            errors: ["time"]
        }).then(async collected => {
            const content = collected.first().content;

            let myChannel;
            const myChannel1 = message.guild.channels.cache.get(content) || message.channel.guild.channels.cache.find((channel) => channel.name.toLowerCase() === content);
          if(!myChannel1){          
              return message.channel.send("I cannot find that channel, try to search by the ID or channel name (not @metion).")
           }
           myChannel = myChannel1
           
          

                
               

            channelID = myChannel;

            message.channel.send("Success! Setups have been made! Now the verify command is fully set.")
            await mongo.setVerification(message.guild.id, verifiedRole, channelID, 1)

    

        }).catch((err) => {
           return message.channel.send("No reply after the 3 minutes time limit, try again.")
        })
    
    
    }).catch((err) => {
        return message.channel.send("No reply after the 3 minutes time limit, try again.")
    })
       

      
       
    }
}; 