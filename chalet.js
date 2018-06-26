function sq(img, vp){
document.getElementById("s"+vp).src=img;
document.getElementById("w"+vp).style.visibility="hidden";
document.getElementById("x"+vp).style.visibility="hidden";
document.getElementById("t"+vp).style.visibility="hidden";
document.getElementById("u"+vp).style.visibility="hidden";
}

function wd(img, vp){
document.getElementById("w"+vp).src=img;
document.getElementById("w"+vp).style.visibility="visible";
document.getElementById("x"+vp).style.visibility="hidden";
document.getElementById("t"+vp).style.visibility="hidden";
document.getElementById("u"+vp).style.visibility="hidden";
}

function xt(img, vp){
document.getElementById("x"+vp).src=img;
document.getElementById("x"+vp).style.visibility="visible";
document.getElementById("w"+vp).style.visibility="hidden";
document.getElementById("t"+vp).style.visibility="hidden";
document.getElementById("u"+vp).style.visibility="hidden";
}

function tl(img, vp){
document.getElementById("t"+vp).src=img;
document.getElementById("t"+vp).style.visibility="visible";
document.getElementById("x"+vp).style.visibility="hidden";
document.getElementById("w"+vp).style.visibility="hidden";
document.getElementById("u"+vp).style.visibility="hidden";
}

function ul(img, vp){
document.getElementById("u"+vp).src=img;
document.getElementById("u"+vp).style.visibility="visible";
document.getElementById("x"+vp).style.visibility="hidden";
document.getElementById("t"+vp).style.visibility="hidden";
document.getElementById("w"+vp).style.visibility="hidden";
}