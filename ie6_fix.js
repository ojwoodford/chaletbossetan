var supersleight = function() {
var fnLoadPngs = function() { 
var root = document;
for (var i = root.all.length - 1, obj = null; (obj = root.all[i]); i--) {
if (obj.className=='ie6_fix'){
obj.src = obj.src + '.ie6.png';
}}};
var addLoadEvent = function(func) {
var oldonload = window.onload;
if (typeof window.onload != 'function') {
window.onload = func;
} else {
window.onload = function() {
if (oldonload) {
oldonload();
}
func();
};}};
return {
init: function() { 
addLoadEvent(fnLoadPngs);
},
run: function() {
fnLoadPngs();
}};}();
supersleight.init();