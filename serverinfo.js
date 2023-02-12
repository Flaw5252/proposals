
const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    SlashCommandBuilder,
    EmbedBuilder,
    ComponentType,
    StringSelectMenuBuilder,
  } = require("discord.js");

const noblox = require("noblox.js")
const Discord = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("serverinfo")
    .setDescription("Displays information about mano servers"),
  async execute(interaction, client) {
    const universeInfo = await noblox.getUniverseInfo([ 4793176968 ])
    }
}
