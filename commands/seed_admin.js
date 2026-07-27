const {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits
} = require("discord.js");


const {
    getSeeds,
    saveSeeds
} = require("../modules/seedTracker");



module.exports = {


data: new SlashCommandBuilder()

.setName("seed")

.setDescription(
    "Quản lý Seed PlayTogether"
)

.setDefaultMemberPermissions(
    PermissionFlagsBits.Administrator
)


.addSubcommand(sub =>
    sub

    .setName("list")

    .setDescription(
        "Xem danh sách hạt giống"
    )
)



.addSubcommand(sub =>
    sub

    .setName("edit")

    .setDescription(
        "Sửa thời gian hạt"
    )

    .addStringOption(option =>

        option

        .setName("id")

        .setDescription(
            "ID hạt"
        )

        .setRequired(true)

    )


    .addIntegerOption(option =>

        option

        .setName("time")

        .setDescription(
            "Thời gian giây"
        )

        .setRequired(true)

    )

)



.addSubcommand(sub =>
    sub

    .setName("reset")

    .setDescription(
        "Reset hạt về READY"
    )


    .addStringOption(option =>

        option

        .setName("id")

        .setDescription(
            "ID hạt"
        )

        .setRequired(true)

    )

)

,



async execute(interaction){



const action =
interaction.options.getSubcommand();



const seeds =
getSeeds();




// =====================
// LIST
// =====================

if(action === "list"){



let text = "";



seeds.forEach((seed,index)=>{


text +=
`
${index + 1}. ${seed.emoji} ${seed.name}

ID:
\`${seed.key}\`

Trạng thái:
${seed.ready ? "🔴 READY":"⏰ "+seed.time+"s"}

━━━━━━━━━━
`;


});



const embed =
new EmbedBuilder()

.setColor("#00ff88")

.setTitle(
"🌱 Danh sách Seed PlayTogether"
)

.setDescription(
text.slice(0,4000)
);



return interaction.reply({

embeds:[
embed
],

flags: 64

});


}





// =====================
// EDIT TIME
// =====================

if(action === "edit"){



const id =
interaction.options.getString("id");



const time =
interaction.options.getInteger("time");



const seed =
seeds.find(
s=>s.key === id
);



if(!seed){


return interaction.reply({

content:
"❌ Không tìm thấy Seed",

flags: 64

});


}



seed.time = time;

seed.ready = time <= 0;



saveSeeds(
seeds
);



return interaction.reply({

content:
`
✅ Đã sửa:

${seed.emoji} ${seed.name}

⏰ ${time} giây
`,

flags: 64

});


}




// =====================
// RESET
// =====================

if(action === "reset"){



const id =
interaction.options.getString("id");



const seed =
seeds.find(
s=>s.key === id
);



if(!seed){


return interaction.reply({

content:
"❌ Không tìm thấy Seed",

flags: 64

});


}



seed.time = 0;

seed.ready = true;



saveSeeds(
seeds
);



return interaction.reply({

content:
`
🔄 Đã reset:

${seed.emoji} ${seed.name}

🔴 READY
`,

flags: 64

});


}



}


};