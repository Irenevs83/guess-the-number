const myFunction = function () {

    let name;
    let guess;
    let guessed = null;
    let howManyGuesses = 5;
    let min = 0;
    let max = 25;

    name = prompt("Hoi, wat is je naam?")
    alert(`Hoi ${name} raad het cijfer tussen de 0 en de 25`);
    alert('Je hebt 5 pogingen om het juiste cijfer te raden.');
    max = parseInt(prompt("Voer eerst in tot welk getal er geraden gaat worden."));
    guess = parseInt(prompt('Welk getal kies je?'));
    guessed = Math.floor(Math.random() * (max - min) + min);

    while (guess !== howManyGuesses) {
        if (howManyGuesses < 1) {
            howManyGuesses--;
            howManyGuesses = Math.floor(Math.random() * (max - min) + min);
            alert('Helaas je hebt geen pogingen meer, je hebt verloren.');
        }
    }
    if (guess == guessed) {
        alert("yesss je heb gewonnen!!");
        alert(`Dag ${name} tot de volgende keer`);

    }
    else if (guess !== guessed) {
        alert("helaas probeer het nog een keer.");
    }

}
