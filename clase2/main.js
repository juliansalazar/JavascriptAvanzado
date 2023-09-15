const moment = require("moment");

console.log("Cuantos días faltan para navidad?")

let christmasDays = moment('2024-02-28', moment.ISO_8601);
let today = moment()
let days_left = christmasDays.diff(today, "days");

console.log(days_left)