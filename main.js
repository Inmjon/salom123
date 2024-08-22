var blockSize = 25;
var cols = 20;
var rows = 20;
var maydon;
var context;

//ilon
var ilonX = blockSize * 1;
var ilonY = blockSize * 1;

var tezlikX = 0;
var tezlikY = 0;

var ilonTana = [];

var mevaX;
var mevaY;

var oyinYakunlandi  = false;

window.onload = function () {
    maydon = document.getElementById("maydon");
    maydon.width = cols * blockSize;
    maydon.height = rows * blockSize;
    context = maydon.getContext("2d")

    mevaHarakati();
    document.addEventListener("keyup", ozgarishYonalishi);
    setInterval(uptade, 2000/10);
}

function uptade(){
    context.fillStyle = "black";
    context.fillRect(0, 0, maydon.width, maydon.height);

    context.fillStyle = "red";
    context.fillRect(mevaX, mevaY, blockSize, blockSize);

    if(ilonX == mevaX && ilonY == mevaY){
        ilonTana.push([mevaX, mevaY]);
        mevaHarakati();
    }

    for(let i = ilonTana.length -1; i > 0; i--){
        ilonTana[i] = ilonTana[i-1];
    }

    if(ilonTana.length){
        ilonTana[0] = [ilonX, ilonY];
    }

    context.fillStyle = "lime";
    ilonX += tezlikX * blockSize;
    ilonY += tezlikY * blockSize;
    context.fillRect(ilonX, ilonY, blockSize, blockSize);
    for(let i = 0; i < ilonTana.length; i++){
        context.fillRect(ilonTana[i] [0], ilonTana[i][1], blockSize, blockSize)
    }
}

if(ilonX < 0 || ilonX > cols * blockSize || ilonY < 0 || ilonY > cols * blockSize){
    oyinYakunlandi = true;
    alert("oyin Yakunlandi");
}

function ozgarishYonalishi(e){
    if(e.code == "ArrowUp" && tezlikY != 1){
        tezlikX = 0;
        tezlikY = -1;
    }
    if(e.code == "ArrowDown" && tezlikY != -1){
        tezlikX = 0;
        tezlikY = 1;
    }
    if(e.code == "ArrowLeft" && tezlikX != 1){
        tezlikX = -1;
        tezlikY = 0;
    }
    if(e.code == "ArrowRight" && tezlikX != -1){
        tezlikX = 1;
        tezlikY = 0;
    }
}

function mevaHarakati() {
    mevaX = Math.floor(Math.random() * cols) * blockSize;
    mevaY = Math.floor(Math.random() * rows) * blockSize;
}