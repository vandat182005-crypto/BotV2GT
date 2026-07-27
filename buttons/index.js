const {
    EmbedBuilder
} = require("discord.js");


const {
    showSeed
} = require("../handlers/seedHandler");


const {
    adminButtons
} = require("./adminButtons");


const {
    codeButtons
} = require("./codeButtons");




module.exports = {


async execute(interaction, client){


    const id = interaction.customId;


    try{



        // ======================
        // DASHBOARD SEED
        // ======================

        if(id === "dashboard_seed"){

            return showSeed(
                interaction,
                1
            );

        }





        // ======================
        // SEED PAGINATION
        // ======================

        if(id.startsWith("seed_")){


            const args =
            id.split("_");


            let page =
            Number(args[2]) || 1;



            if(args[1] === "next"){
                page++;
            }


            if(args[1] === "prev"){
                page--;
            }



            return showSeed(
                interaction,
                page
            );


        }








        // ======================
        // DASHBOARD CODE
        // ======================

        if(id === "dashboard_code"){



            const {
                getCodes
            } = require("../modules/giftCode");



            const embed =
            new EmbedBuilder()

            .setColor("#ffaa00")

            .setTitle(
                "🎁 Gift Code PlayTogether"
            )

            .setDescription(
`
━━━━━━━━━━━━━━

🎁 **Code mới nhất**

${getCodes()}


━━━━━━━━━━━━━━

🔔 Bot cập nhật tự động
`
            );



            return interaction.update({

                embeds:[
                    embed
                ],


                components:
                codeButtons()

            });



        }









        // ======================
        // CODE BUTTON
        // ======================

        if(id === "code_add"){


            return interaction.reply({

                content:
                "➕ Mở Modal thêm Code",

                flags: 64

            });


        }




        if(id === "code_edit"){


            return interaction.reply({

                content:
                "✏️ Mở Modal sửa Code",

                flags: 64

            });


        }





        if(id === "code_delete"){


            return interaction.reply({

                content:
                "🗑️ Mở Modal xóa Code",

                flags: 64

            });


        }









        // ======================
        // EVENT
        // ======================

        if(id === "dashboard_event"){



            const embed =
            new EmbedBuilder()

            .setColor("#ff55ff")

            .setTitle(
                "🎉 Event PlayTogether"
            )

            .setDescription(
`
━━━━━━━━━━━━━━

🎉 Event hiện tại:

📌 Chưa có dữ liệu


━━━━━━━━━━━━━━
`
            );



            return interaction.update({

                embeds:[
                    embed
                ],

                components:[]

            });


        }









        // ======================
        // SHOP
        // ======================

        if(id === "dashboard_shop"){



            const embed =
            new EmbedBuilder()

            .setColor("#0099ff")

            .setTitle(
                "🛒 Shop PlayTogether"
            )

            .setDescription(
`
━━━━━━━━━━━━━━

🛒 Shop đang cập nhật

━━━━━━━━━━━━━━
`
            );



            return interaction.update({

                embeds:[
                    embed
                ],

                components:[]

            });


        }









        // ======================
        // ADMIN PANEL
        // ======================

        if(id === "dashboard_admin"){



            const embed =
            new EmbedBuilder()

            .setColor("#ff0000")

            .setTitle(
                "👑 PLAYTOGETHER ADMIN PANEL"
            )

            .setDescription(
`
━━━━━━━━━━━━━━


🌱 **Quản lý Seed**

✏️ Sửa thời gian hạt

🗑️ Xóa Seed

🔄 Reset Seed


━━━━━━━━━━━━━━


🎁 **Quản lý Code**

➕ Thêm Code

✏️ Sửa Code

🗑️ Xóa Code


━━━━━━━━━━━━━━
`
            );



            return interaction.update({

                embeds:[
                    embed
                ],


                components:
                adminButtons()

            });


        }









        // ======================
        // RESET SEED
        // ======================

        if(id === "admin_seed_reset"){



            const {
                resetSeed
            } = require("../modules/seedTracker");



            resetSeed(1);



            return interaction.reply({

                content:
                "🔄 Đã reset Seed ID 1",

                flags: 64

            });


        }









        // ======================
        // EDIT SEED
        // ======================

        if(id === "admin_seed_edit"){



            const {
                showEdit
            } = require("../modals/seedModal");



            return showEdit(
                interaction
            );


        }









        // ======================
        // DELETE SEED
        // ======================

        if(id === "admin_seed_delete"){



            return interaction.reply({

                content:
                "🗑️ Xóa Seed đang phát triển",

                flags: 64

            });


        }








        console.log(
            "⚠️ Button chưa xử lý:",
            id
        );



    }


    catch(error){


        console.error(
            "❌ Button Error:",
            error
        );



        if(
            !interaction.replied &&
            !interaction.deferred
        ){


            return interaction.reply({

                content:
                "❌ Có lỗi khi xử lý nút",

                flags: 64

            });


        }


    }



}


};