const { Listener } = require('discord.js-akago');



module.exports = class ReadyListener extends Listener {
    constructor() {        
        super('ready', {
            once: false,
        });
    }

    async execute() {
      

  
        
        console.log('Im ready!');
    

        this.client.user.setActivity(`${this.client.guilds.cache.size} servers | v!help`, { type: 'WATCHING' })
       
    };
};