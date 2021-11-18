const { Listener } = require('discord.js-akago');

module.exports = class InvliadCommandListener extends Listener {
  constructor() {
    super('invalidCommand', {
      emitter: 'commandHandler',
      once: false,
    })
  }

  async execute(message) {
    await message.channel.send(`That isn't a command!`)
  }
}
