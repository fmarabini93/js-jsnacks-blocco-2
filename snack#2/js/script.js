function getRndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var teams = [
    {
        name: "Whites",
        p: 0,
        f: 0
    },
    {
        name: "Blacks",
        p: 0,
        f: 0
    },
    {
        name: "Greens",
        p: 0,
        f: 0
    },
    {
        name: "Reds",
        p: 0,
        f: 0
    },
    {
        name: "Blues",
        p: 0,
        f: 0
    }
];
var nameFouls = [];

for (var i = 0; i < teams.length; i++) {

    teams[i].p = getRndNum(1, 100);
    teams[i].f = getRndNum(1, 100);
    nameFouls.push({name: teams[i].name, f: teams[i].f});

}

var chart = document.getElementById("teams");

for (var k = 0; k < nameFouls.length; k++) {

    chart.innerHTML += "<li>" + nameFouls[k].name + " " + nameFouls[k].f + "</li>";

}