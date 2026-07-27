const {
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder
} = require("discord.js");


const {
    addCode,
    editCode,
    deleteCode
} = require("../modules/giftCode");



module.exports = {



// ======================
// SHOW ADD CODE
// ======================

async showAdd(interaction){


const modal = new ModalBuilder()

.setCustomId(
"code_add_submit"
)

.setTitle(
"🎁 Thêm Gift Code"
);



const code = new TextInputBuilder()

.setCustomId("code")

.setLabel("Nhập Code")

.setStyle(
TextInputStyle.Short
)

.setPlaceholder(
"Ví dụ: PLAY2026"
)

.setRequired(true);



const expire = new TextInputBuilder()

.setCustomId("expire")

.setLabel("Ngày hết hạn")

.setStyle(
TextInputStyle.Short
)

.setPlaceholder(
"Ví dụ: 30/12/2026"
)

.setRequired(true);



modal.addComponents(

new ActionRowBuilder()
.addComponents(code),


new ActionRowBuilder()
.addComponents(expire)

);



return interaction.showModal(modal);


},






// ======================
// SHOW DELETE
// ======================

async showDelete(interaction){


const modal = new ModalBuilder()

.setCustomId(
"code_delete_submit"
)

.setTitle(
"🗑️ Xóa Gift Code"
);



const id = new TextInputBuilder()

.setCustomId("id")

.setLabel("ID Code")

.setStyle(
TextInputStyle.Short
)

.setPlaceholder(
"Nhập ID"
)

.setRequired(true);



modal.addComponents(

new ActionRowBuilder()
.addComponents(id)

);



return interaction.showModal(modal);


},






// ======================
// EXECUTE
// ======================

async execute(interaction){



// ADD

if(
interaction.customId==="code_add_submit"
){


const code =
interaction.fields.getTextInputValue(
"code"
);



const expire =
interaction.fields.getTextInputValue(
"expire"
);



addCode(
code,
expire
);



return interaction.reply({

content:
`
✅ Đã thêm Gift Code

🎁 ${code}

📅 ${expire}
`,

flags: 64

});


}






// DELETE

if(
interaction.customId==="code_delete_submit"
){


const id =
Number(
interaction.fields.getTextInputValue(
"id"
)
);



const result =
deleteCode(id);



return interaction.reply({

content:

result

?
"🗑️ Đã xóa Code thành công"

:
"❌ Không tìm thấy Code"


,

flags: 64

});


}






// EDIT

if(
interaction.customId==="code_edit_submit"
){


return interaction.reply({

content:
"✏️ Sửa Code đang xử lý",

flags: 64

});


}


}



};