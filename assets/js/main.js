
console.log("Level1_1");
for (i = 0; i <= 10; i++) {
    let prog = "Hello World " + i;
    console.log(prog);
}



console.log("Level1_2");
let numArray = [];
for (let i = 0; i <= 10; i++) {
    numArray.push(i);
    console.log(numArray);
}

console.log("Level1_4");
let names = ["Eric", "Steffen", "Finn", "Simon", "Franzi", "Kim", "Sergio"];
for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("Level1_6");
retArray = [];
for (let i = 1; i <= 100; i++) {
    retArray.push("image_" + i + ".jpg");
}
console.log(retArray);

console.log("Level1_7");

let abc = 1;
do {
    document.write(`<h2>The number is  ${abc} </h2>`);
    console.log(`The number is ${abc}`);
    abc++;
} while (abc <= 5);

console.log("Level1_8");
let even = 0;
do {
    even += 2;
    document.write(`<h3>${even} </h3>`);
    console.log(`${even} `);
} while (even <= 16);

console.log("Level1_9");
let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

let input = document.getElementById('input');
let inputAdd = document.getElementById('inputAdd');
let outOut = document.getElementById('outOut');

// console.log(inputty);

let roll = () => {
    let inputty = Number(input.value);
    words.map((elm) => {
        if (elm.length == inputty) {
            document.write(`<h4>${elm}</h4>`);
        }
    })
};

let add = () => {
    words.push(inputAdd.value);
    console.log(words);
    outOut.innerHTML = `<h5>${inputAdd.value} hinzugefügt</h4>`;
};

