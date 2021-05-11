var bikes = [
    {
        name: "white",
        weight: 30
    },
    {
        name: "black",
        weight: 9
    },
    {
        name: "red",
        weight: 11
    },
    {
        name: "grey",
        weight: 7
    },
    {
        name: "green",
        weight: 23
    }
];
var minWeight;

for (var i = 0; i < (bikes.length - 1); i++) {

    if (bikes[i].weight < bikes[i + 1].weight) {

        minWeight = bikes[i];

    } else {

        minWeight = bikes[i + 1];

    }

}

console.log(minWeight);