const { Command } = require('discord.js-akago');
const discord = require("discord.js")
module.exports = class VerifyCommand extends Command {
    constructor() {
        super('verify', {
            description: 'Use this command to verify',
            category: 'Verification',
            usage: "verify",
            aliases: "v"

        });
    }

    async execute(message) {

        try{

      
        const mongo = require("mongo-glob-economy");
        const guild = message.guild.id
        const hereornot = await mongo.getSetup(guild)
        if(!hereornot) return message.channel.send("This server did not set up verification, please set it up with the setup command!")
        const channel = await mongo.getChannelID(guild);
        const role = await mongo.getRoleID(guild);
        if(!channel || !role) return message.channel.send("The verification channel and/or role has been deleted so I can not access it.")
        if(message.channel.id !== channel) return message.channel.send("You are not allowed to use that command here!")
        if(!message.guild.me.hasPermission(['MANAGE_MESSAGES'])){
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
            message.channel.send(embedPerm)}else if(message.member.roles.cache.has(role)){
                return message.channel.send("You are already verified!")
            }
            



        const botrole = message.guild.roles.cache.find(role => role.name === `Verification Bot`)
        if(!botrole){
            return message.channel.send("Error! Please join the support server so we could fix it for you. Link: https://discord.gg/JaG9tBFZBR")
           }
           const memberrole = message.guild.roles.cache.get(role)
           if(!memberrole) return message.channel.send("The verification role has been deleted, please create a new one and setup again.")
           if(botrole.position < memberrole.position){
              
            const embed = new discord.MessageEmbed()
            .setDescription("The bot's role must be above the\nverified role in the role list!")
            .setColor('RANDOM')
            .setTimestamp()
            .setImage(`https://media.giphy.com/media/qfsV7IyjXoCFLhauQ2/giphy.gif`)
            .setAuthor("Error", message.author.displayAvatarURL( { dynamic: true }))
            return message.channel.send(embed)
           }
           const axios = require("axios")
           const filter = m => m.author.id === message.author.id
           const url  = 'https://api.no-api-key.com/api/v2/captcha'
           const { data } = await axios.get(url)
           const firstEmbed = new discord.MessageEmbed()
           .setColor("RANDOM")
           .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
           .setTitle("What is written in this captcha? You have 30 seconds!")
           .setImage(data.captcha)
           message.channel.send(firstEmbed)

           


           await message.channel
           .awaitMessages(filter, {
               max: 1,
               time: 30000,
               errors: ["time"]
           })
           
           .then(async content1 => {

            const content = content1.first().content;
            if(content === data.captcha_text){
                message.author.send("Correct! You are now verified").catch(err => console.log("meow"))
                return message.member.roles.add(role).catch(err => message.channel.send("Oops! I cannot give you the verified role!"))
            }
                if(content !== data.captcha_text){
                    message.channel.send("Incorrect code, try again!")
                    .then((content) => content.delete({
                        timeout: 3000
                    }))

            }


           }).catch(err => {
               message.channel.send("You didn't answer within 30 seconds, try again!")
           })

           

           

           






    /*member.roles.add(memberrole)
    return message.author.send("Success you are now verified!").catch(err => {
        console.log("couldnt message someone lol cool")*/
   
  

    
 


   
}catch(err){
    message.channel.send("Oops an error occured! Please try again later!")
    console.log(err)
}
    }
    //*****************************....jkhlfjkdhf */

 



}; 