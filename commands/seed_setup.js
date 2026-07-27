const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");


const {
    seedButtons
} = require("../buttons/seedButtons");

const {
    getSeeds
} = require("../modules/seedTracker");



module.exports = {


data: new SlashCommandBuilder()

.setName("seed_setup")

.setDescription(
    "Tạo bảng Seed Tracker PlayTogether"
),



async execute(interaction){



const seeds =
getSeeds();



let text = "";



const list =
seeds.slice(0,10);



list.forEach(seed=>{


text +=
`
${seed.emoji} **${seed.name}**

${
seed.ready
?
"🔴 READY"
:
"⏰ "+seed.time+" giây"
}

━━━━━━━━━━━━━━
`;



});




const embed =
new EmbedBuilder()

.setColor("#00ff88")

.setTitle(
"🌱 Seed Tracker PlayTogether"
)

.setDescription(
`
━━━━━━━━━━━━━━━━

${text}

━━━━━━━━━━━━━━━━

📄 Trang **1/${Math.ceil(seeds.length/10)}**

`
)

.setFooter({

text:
"⚡ PlayTogether Hub Seed System"

});





return interaction.reply({

embeds:[
    embed
],


components:

seedButtons(
    1,
    Math.ceil(seeds.length/10)
)


});



}


};