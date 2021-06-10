// Varianten Addieren / Subtrahieren

// let a = parseInt(prompt("Zahl1?"));
// let b = parseInt(prompt("Zahl2?"));
// let op = prompt(" + oder - ?");
// ausgabe(rechner(a,b,op));

// function rechner(a,b,op) {
// //     if (op === "+") {
// //         return summe(a,b);
// //     } else if (op === "-") {
// //         return differenz(a,b);
// //     } else {
// //         return "das hat nicht geklappt!"
// //     } 
// // }
// switch (op) {
//     case "+":
//         return summe(a,b);
//     case "-":
//             return differenz(a,b);
//     default:
//         return "das hat nicht geklappt!";
//     }
// }

// // console.log(summe(1,2));


// function summe(a,b) {
//     return a + b;
// }
// function differenz(a,b) {
//     return a - b;
// }

// function ausgabe(outStr) {
//     console.log(outStr);
// }



// let zahl1 = parseInt(prompt("Erste Zahl bitte"));
// let zahl2 = parseInt(prompt("Zweite Zahl bitte"));
// let op = prompt("+ oder -?");

// ausgabe("Das Ergebnis beträgt: " + rechner(zahl1,zahl2,op));

// function rechner(zahl1, zahl2, op) {
//     // if (op === "+") {
//     //     return summe(zahl1,zahl2);
//     // } else if (op === "-") {
//     //     return differenz(zahl1, zahl2);
//     // } else {
//     //     return "Nix! Da hammer was falsch eingegen!";
//     // }
//     switch (op) {
//         case "+":
//             return summe(zahl1, zahl2);
//         case "-":
//             return differenz(zahl1, zahl2);
//         default:
//             return "Nix! Da hammer was falsch eingegen!";
//     }

// }


// function summe(zahl1, zahl2) {
//     return zahl1 + zahl2;
// }

// function differenz(zahl1, zahl2) {
//     // if (zahl1 >= zahl2) {
//         return zahl1 - zahl2;
//     // } else {
//     //     return zahl2 - zahl1;
//     // }
    
// }

// function ausgabe(outStr) {
//     console.log(outStr);
// }

// ------------------------------------------------

/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."
// "Q" (question) --> "?"
// "E" (exclamation) --> "!"


/*** Funktion mit Array als Parameter */
// mögliche Tests:
// ausgabe(getSentence(["Ich","bin","Peter"],"S"));
// ausgabe(getSentence(["Bist","du","Peter"],"Q"));
// ausgabe(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,"," habbe","Sie","die"],"Q"));
// ausgabe(getSentence(["Ich","bin"],"E"));
// ausgabe(getSentence(["Ich","bin"],"#"));

// function getSentence(arr,flag) {
    
//     let gap     = " ";
//     let punct   = getPunct(flag);
//     let str     = "";

//     for (let i = 0; i < arr.length; i++) 
//     {
//         if (i != (arr.length -1)) { 
//             str +=  arr[i] + gap;
//         } else {
//             str +=  arr[i] + punct;
//         }
//     }                

//     return str ; 
// }

/*** Service-Funktion / Punktuation */
// ausgabe(getPunct("S"));
// ausgabe(getPunct("Q"));
// ausgabe(getPunct("E"));
// ausgabe(getPunct("#"));
// function getPunct(checkStr) {
//     switch (checkStr) {
//         case "S":
//             return ".";
//         case "Q":
//             return "?";
//         case "E":
//             return "!";
//         default:
//             return "."; // TBA
//     }
// }

/*** Ausgabe */
// ausgabe("hi");
// function ausgabe(outputStr) {
//     console.log(outputStr);
// }
