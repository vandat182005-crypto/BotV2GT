const fs = require("fs");
const path = require("path");


// =========================
// FILE DATA
// =========================

const filePath = path.join(
    __dirname,
    "../data/seeds.json"
);



// =========================
// LOAD SEED
// =========================

function getSeeds(){


    if(!fs.existsSync(filePath)){

        return [];

    }


    let data =
    JSON.parse(
        fs.readFileSync(
            filePath,
            "utf8"
        )
    );



    return data;


}




// =========================
// SAVE SEED
// =========================

function saveSeeds(data){


    fs.writeFileSync(

        filePath,

        JSON.stringify(
            data,
            null,
            2
        ),

        "utf8"

    );


}



// =========================
// RESET ALL SEED
// =========================

function resetSeed(id){


    const seeds =
    getSeeds();



    const seed =
    seeds.find(
        x=>x.id === id
    );



    if(!seed)
        return false;



    seed.time = 0;

    seed.ready = true;



    saveSeeds(
        seeds
    );


    return true;


}




// =========================
// UPDATE TIME
// =========================

function updateSeeds(){


    const seeds =
    getSeeds();



    let changed = false;



    seeds.forEach(seed=>{


        if(seed.time > 0){


            seed.time--;


            changed = true;



            if(seed.time <= 0){


                seed.time = 0;

                seed.ready = true;


            }


        }


    });



    if(changed){


        saveSeeds(
            seeds
        );


    }



}




// =========================
// START AUTO TIMER
// =========================

function startSeedUpdater(){


    console.log(
        "🌱 Seed Auto Update Started"
    );



    setInterval(()=>{


        updateSeeds();



    },1000);



}




module.exports = {


    getSeeds,

    saveSeeds,

    resetSeed,

    updateSeeds,

    startSeedUpdater


};