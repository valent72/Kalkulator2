function nol(nomor) {
    reqem = document.getElementById("Total").innerHTML;
    reqem = reqem + nomor;
    document.getElementById("Total").innerHTML = reqem;

}

function positifnegatif() {
    reqem = document.getElementById("Total").innerHTML;
    reqem = "-" + reqem;
    document.getElementById("Total").innerHTML = reqem;
}

function sisabagi() {
    reqem = document.getElementById("Total").innerHTML;
    reqem = reqem * 1 / 100;
    document.getElementById("Total").innerHTML = reqem;
}

function koma() {
    reqem = document.getElementById("Total").innerHTML
    reqem = reqem + "."
    document.getElementById("Total").innerHTML = reqem;
}

function resetKalkulator() {
    reset = document.getElementById("Total").innerHTML
    reset = "";
    document.getElementById("Total").innerHTML = reset;
}

function azaltReqemi() {
    reqem = document.getElementById("Total").innerHTML
    document.getElementById("Total").innerHTML = reqem.substring(0, reqem.length - 1);


} function perkalian() {
    reqem = document.getElementById("Total").innerHTML
    reqem = reqem + "*"
    document.getElementById("Total").innerHTML = reqem;
}

function bolme() {
    reqem = document.getElementById("Total").innerHTML
    reqem = reqem + "/"
    document.getElementById("Total").innerHTML = reqem;
}
function pengurangan() {
    reqem = document.getElementById("Total").innerHTML
    reqem = reqem + "-"
    document.getElementById("Total").innerHTML = reqem;

}
function pertambahan() {
    reqem = document.getElementById("Total").innerHTML
    reqem = reqem + "+"
    document.getElementById("Total").innerHTML = reqem;

}



function yoxlama() {
    if (isNaN(eval(neticemiz)) !== false) {
        alert("Səhflik var")
    }
}

function samadengan() {
    neticemiz = document.getElementById("Total").innerHTML
    yoxlama();
    document.getElementById("Total").innerHTML = eval(neticemiz)

}