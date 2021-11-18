const { AkagoClient, CommandHandler, ListenerHandler } = require('discord.js-akago')
const mongo = 'OTA5Mzc0OTI3MjY4ODc2MzQ4.YZDXZg.iewEv9yMf_9X3UHNzV7Cvb2RA7w'







class myClient extends AkagoClient {
    constructor() {
        super({
            
            token: mongo
            
        }, {
            disableMentions:  'everyone',
        })
        this.commandHandler = new CommandHandler(this, {
            commandDirectory: './commands',
            prefix: (message) => {
                const prefix = require("discord-prefix");
                let pr = prefix.getPrefix(message.guild.id)
                return pr;

            },
            allowMentionPrefix: true,
            blockBots: true,
            defaultCooldown: 3,
          
           
        });
        this.listenerHandler = new ListenerHandler(this, {
            listenerDirectory: './events',
        });
        

        
        
    }
    start()  {
        this.build();
    }

    
}

require('./eco')



const client = new myClient();
client.start()






