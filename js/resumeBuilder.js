var formattedName = HTMLheaderName.replace("%data%", "Les Groombridge");
var formattedRole = HTMLheaderRole.replace("%data%", "retired");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

