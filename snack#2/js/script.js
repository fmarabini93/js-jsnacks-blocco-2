function getRndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var teams = [
    {
        name: "whites",
        p: 0,
        f: 0
    },
    {
        name: "black",
        p: 0,
        f: 0
    },
    {
        name: "greens",
        p: 0,
        f: 0
    },
    {
        name: "reds",
        p: 0,
        f: 0
    },
    {
        name: "blues",
        p: 0,
        f: 0
    }
];
var nameFouls = [];

for (var i = 0; i < teams.length; i++) {

    teams[i].p = getRndNum(1, 100);
    teams[i].f = getRndNum(1, 100);
    nameFouls.push(teams[i].name, teams[i].f);

}

console.log(nameFouls);