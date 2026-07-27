const fs = require("fs");
const path = require("path");


const FILE =
path.join(__dirname,"../data/codes.json");



// ======================
// INIT
// ======================

function init(){

if(!fs.existsSync(
    path.dirname(FILE)
)){

fs.mkdirSync(
    path.dirname(FILE)
);

}


if(!fs.existsSync(FILE)){

fs.writeFileSync(
FILE,
"[]"
);

}

}



// ======================
// LOAD
// ======================

function loadCodes(){

init();

return JSON.parse(
fs.readFileSync(
FILE,
"utf8"
)
);

}



// ======================
// SAVE
// ======================

function saveCodes(data){

fs.writeFileSync(
FILE,
JSON.stringify(
data,
null,
2
)
);

}



// ======================
// ADD CODE
// ======================

function addCode(code,expire){


const codes =
loadCodes();


const newCode = {

id:
Date.now(),

code,

expire,

created:
new Date()

.toLocaleString("vi-VN")

};


codes.push(newCode);


saveCodes(codes);


return newCode;


}



// ======================
// EDIT CODE
// ======================

function editCode(id,newCode,expire){


const codes =
loadCodes();



const item =
codes.find(
c=>c.id===id
);



if(!item)
return false;



item.code=newCode;

item.expire=expire;



saveCodes(codes);


return true;


}




// ======================
// DELETE CODE
// ======================

function deleteCode(id){


let codes =
loadCodes();


const newData =
codes.filter(
c=>c.id!==id
);



if(
newData.length===codes.length
)
return false;



saveCodes(newData);


return true;


}




// ======================
// GET LIST
// ======================

function getCodes(){


const codes =
loadCodes();



if(codes.length===0)
return "🎁 Chưa có Code";



return codes

.slice(-10)

.reverse()

.map(c=>

`
🎁 **${c.code}**

📅 Hạn:
${c.expire}

`

)

.join("\n");


}



module.exports={

loadCodes,

addCode,

editCode,

deleteCode,

getCodes

};