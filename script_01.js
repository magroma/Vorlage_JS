// Entscheidungsstrukturen | control structures


// Deklaration
let ageJohn,ageMark;
let isJohnOlder,isJohnEqual,isJohnYounger;

//Wertzuweisung
//ageJohn = 25;
//ageMark = 30;

// Abfrage nach Alter
ageJohn = parseInt(prompt("Wie alt ist John?"));
ageMark = parseInt(prompt("Wie alt ist Mark?"));


// Logische Aussagen / Test(s)
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
isJohnYounger = (ageJohn < ageMark);

// Ausgabezweig
//console.log("isJohnOlder: " + isJohnOlder);
//console.log("isJohnEqual: " + isJohnEqual);
//console.log("isJohnYounger: " + isJohnYounger);

/************ IF ************/
// alternativlos (TINA There is no alternative)
/*
//if (false)
if (isJohnOlder)
//if (ageJohn > ageMark)
//if (35 > 30)
{
   console.log("John ist älter");
}
*/

/************ IF - ELSE ************/
// mit Alternative 
// entweder ja oder nein
/*
if (isJohnOlder)
{
    // Ja-Zweig / true
    console.log("John ist älter als Mark");
}
else
{
    // Nein-Zweig / false
    console.log("John ist jünger als Mark");
}
*/

/************ IF - ELSE If ************/
// mit Alternativen Fällen (älter, jünger, gleich alt)

if (isJohnOlder) // ageJohn > ageMark
{
    // Ja-Zweig / true
    console.log("John ist älter als Mark");
}
else if (isJohnEqual) // ageJohn == ageMark
{
    // Nein-Zweig / false
    console.log("John und Mark sind gleich alt");
} 
// ggfs. weiter Alternativen mit else if (...)
else 
{
    // letzte Alternative / false
    console.log("John ist jünger als Mark");
}

/************ Ternäre Schreibweise ************/
console.log( (isJohnOlder) ? "John is older" : (isJohnEqual) ? "John and Mark are equal" : "Mark is older")
