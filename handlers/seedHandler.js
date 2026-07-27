const {
    EmbedBuilder
} = require("discord.js");


const {
    getSeeds
} = require("../modules/seedTracker");


const {
    seedButtons
} = require("../buttons/seedButtons");




// =========================
// FORMAT TIME
// =========================

function formatTime(seconds){


    if(seconds <= 0){

        return "🔴 READY";

    }


    const h =
    Math.floor(seconds / 3600);


    const m =
    Math.floor(
        (seconds % 3600) / 60
    );


    const s =
    seconds % 60;



    return (
        "⏰ " +
        String(h).padStart(2,"0")
        +
        ":"
        +
        String(m).padStart(2,"0")
        +
        ":"
        +
        String(s).padStart(2,"0")
    );

}




// =========================
// SHOW SEED
// =========================

async function showSeed(
    interaction,
    page = 1
){


    const seeds =
    getSeeds();



    const perPage = 3;



    const totalPage =
    Math.ceil(
        seeds.length / perPage
    );



    if(page < 1)
        page = 1;



    if(page > totalPage)
        page = totalPage;




    const start =
    (page - 1) * perPage;



    const list =
    seeds.slice(
        start,
        start + perPage
    );



    let text = "";



    list.forEach(seed=>{


        text +=
`
${seed.emoji} **${seed.name}**

${seed.ready 
? "🔴 READY"
: formatTime(seed.time)
}

━━━━━━━━━━━━━━
`;



    });





    const embed =
    new EmbedBuilder()


    .setColor(
        "#00ff88"
    )


    .setTitle(
        "🌱 Seed Tracker PlayTogether"
    )


    .setDescription(
`
━━━━━━━━━━━━━━

${text}

📄 Trang **${page}/${totalPage}**

`
    )



    .setFooter({

        text:
        "⚡ PlayTogether Hub"

    });





    return interaction.update({


        embeds:[
            embed
        ],


        components:
        seedButtons(
            page,
            totalPage
        )


    });


}



module.exports = {

    showSeed

};