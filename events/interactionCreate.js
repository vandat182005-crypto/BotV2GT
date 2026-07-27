const {
    Events
} = require("discord.js");



module.exports = {


    name: Events.InteractionCreate,



    async execute(interaction, client){


        try {



            // =========================
            // SLASH COMMAND
            // =========================

            if(
                interaction.isChatInputCommand()
            ){



                const command =
                client.commands.get(
                    interaction.commandName
                );



                if(!command){


                    console.log(
                        `❌ Không tìm thấy command: ${interaction.commandName}`
                    );


                    return;

                }



                await command.execute(
                    interaction,
                    client
                );



                return;

            }







            // =========================
            // BUTTON
            // =========================

            if(
                interaction.isButton()
            ){



                const buttonHandler =
                require("../buttons");



                if(
                    !buttonHandler ||
                    !buttonHandler.execute
                ){


                    console.log(
                        "❌ Không tìm thấy Button Handler"
                    );


                    return;

                }



                await buttonHandler.execute(
                    interaction,
                    client
                );



                return;

            }







            // =========================
            // SELECT MENU
            // =========================

            if(
                interaction.isStringSelectMenu()
            ){



                const menuHandler =
                require("../selectMenus");



                if(
                    !menuHandler ||
                    !menuHandler.execute
                ){

                    console.log(
                        "⚠️ Không có Select Menu Handler"
                    );


                    return;

                }



                await menuHandler.execute(
                    interaction,
                    client
                );



                return;

            }








            // =========================
            // MODAL SUBMIT
            // =========================

            if(
                interaction.isModalSubmit()
            ){



                const modalHandler =
                require("../modals");



                if(
                    !modalHandler ||
                    !modalHandler.execute
                ){


                    console.log(
                        "⚠️ Không có Modal Handler"
                    );


                    return;

                }



                await modalHandler.execute(
                    interaction,
                    client
                );



                return;

            }






        }
        catch(error){



            console.error(
                "❌ Interaction Error:",
                error
            );



            // =========================
            // ERROR RESPONSE
            // =========================


            try{


                if(
                    interaction.replied ||
                    interaction.deferred
                ){



                    await interaction.followUp({

                        content:
                        "❌ Có lỗi xảy ra khi xử lý yêu cầu.",


                        flags: 64

                    });



                }
                else {



                    await interaction.reply({

                        content:
                        "❌ Bot gặp lỗi khi xử lý.",


                        flags: 64

                    });



                }



            }
            catch(err){


                console.log(
                    "⚠️ Không thể gửi lỗi:",
                    err.message
                );


            }



        }



    }


};