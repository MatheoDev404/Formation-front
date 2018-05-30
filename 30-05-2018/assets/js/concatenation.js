// CONCATENATION
var debut   = "Aujourd'hui ";
var date    = new Date();
var milieu  = ", sont présents : ";
var nbr     = 12;
var fin     = " apprenants. <br/>";


var phrase  = debut + date.getDate() + "/" + ( date.getMonth() + 1 ) + "/" + date.getFullYear() + milieu + nbr + fin;

document.write(phrase);