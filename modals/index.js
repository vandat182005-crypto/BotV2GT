const {
    saveSeeds,
    getSeeds
} = require("../modules/seedTracker");



module.exports = {


async execute(interaction){



// =====================
// EDIT SEED
// =====================

if(
interaction.customId === "seed_edit_modal"
){


const id =
interaction.fields.getTextInputValue(
"seed_id"
);


const time =
Number(
interaction.fields.getTextInputValue(
"seed_time"
)
);



const seeds =
getSeeds();



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

seed.ready =
time <= 0;



saveSeeds(
seeds
);



return interaction.reply({

content:
`
✅ Đã cập nhật Seed

${seed.emoji} ${seed.name}

⏰ ${time} giây
`,

flags: 64

});


}





// =====================
// DELETE SEED
// =====================

if(
interaction.customId === "seed_delete_modal"
){


const id =
interaction.fields.getTextInputValue(
"seed_delete_id"
);



let seeds =
getSeeds();



const old =
seeds.length;



seeds =
seeds.filter(
s=>s.key !== id
);



if(old === seeds.length){

return interaction.reply({

content:
"❌ Không tìm thấy Seed",

flags: 64

});

}



saveSeeds(
seeds
);



return interaction.reply({

content:
"🗑️ Đã xóa Seed thành công",

flags: 64

});


}


}


};