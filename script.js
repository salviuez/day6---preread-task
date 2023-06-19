//1.
console.log("hello world")

//2.How to get value of the variable myvar as output
var myvar = 1;
console.log("myvar");
//3.Function:

let friends = ["Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];

function dataHandling(input) {
    for (var i = 0; i < input.length; i++) {

    }
}

dataHandling(friends);

//4. Javascript:

function countSelected(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const musicTypes = document.selectForm.musicTypes;
    console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});




















