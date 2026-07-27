require("dotenv").config();

const fs = require("fs");
const path = require("path");

const {
    Client,
    Collection,
    GatewayIntentBits,
    REST,
    Routes
} = require("discord.js");



const client = new Client({

    intents: [
        GatewayIntentBits.Guilds
    ]

});



// =========================
// COLLECTION
// =========================

client.commands = new Collection();



console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("🎮 PLAY TOGETHER HUB");
console.log("Version : V2.2.0");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");




// =========================
// LOAD COMMANDS
// =========================

const commandPath =
path.join(
    __dirname,
    "commands"
);



if(fs.existsSync(commandPath)){


    const files =
    fs.readdirSync(commandPath)
    .filter(
        file => file.endsWith(".js")
    );



    for(const file of files){


        console.log(
            `📄 Đang tải Command: ${file}`
        );



        const command =
        require(
            path.join(
                commandPath,
                file
            )
        );



        if(!command.data || !command.execute){


            console.log(
                `❌ ${file} không hợp lệ`
            );


            continue;

        }



        client.commands.set(
            command.data.name,
            command
        );


    }


}




// =========================
// LOAD EVENTS
// =========================

const eventPath =
path.join(
    __dirname,
    "events"
);



if(fs.existsSync(eventPath)){


    const files =
    fs.readdirSync(eventPath)
    .filter(
        file => file.endsWith(".js")
    );



    for(const file of files){


        console.log(
            `📄 Đang tải Event: ${file}`
        );



        const event =
        require(
            path.join(
                eventPath,
                file
            )
        );



        if(event.once){


            client.once(

                event.name,

                (...args)=>
                event.execute(
                    ...args,
                    client
                )

            );


        }
        else{


            client.on(

                event.name,

                (...args)=>
                event.execute(
                    ...args,
                    client
                )

            );


        }


    }


}





// =========================
// REGISTER SLASH COMMAND
// =========================

async function registerCommands(){


    const commands = [];



    client.commands.forEach(command=>{


        commands.push(
            command.data.toJSON()
        );


    });



    console.log(
        "🔄 Đang đăng ký Slash Commands..."
    );



    const rest =
    new REST({

        version:"10"

    }).setToken(
        process.env.TOKEN
    );



    try{


        await rest.put(

            Routes.applicationCommands(
                client.user.id
            ),

            {

                body: commands

            }

        );



        console.log(
            "✅ Đăng ký Slash Commands thành công"
        );


    }
    catch(error){


        console.error(
            "❌ Lỗi đăng ký Slash:",
            error
        );


    }


}





// =========================
// READY EVENT
// =========================

client.once(
"clientReady",
async ()=>{


    console.log(
        `✅ ${client.user.tag} Online`
    );


    await registerCommands();


}
);





// =========================
// LOGIN
// =========================

client.login(
    process.env.TOKEN
);