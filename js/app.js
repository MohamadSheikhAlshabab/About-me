'use strict';
var name = prompt('what\s your name ?');
var score = 0;
alert(`weclome in my page  ${name}`);
var know = prompt('Do you know me ?', 'Y/N or YES/NO');
switch (know.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('You are know me man !');
        score = score + 1;

        break;
    case 'no':
    case 'n':
        alert('You should know me !');
        break;
    default:
        alert('You should know me !');
        break;
}

var friend = prompt('Are you my friend ?', 'Y/N or YES/NO');
switch (friend.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('You are my friend !');
        score = score + 1;

        break;
    case 'no':
    case 'n':
        alert('Sorry, you are not my friend !');
        break;
    default:
        alert('Sorry, you are not my friend !');
        break;
}

var age = prompt('Do you know my age ?', 'Y/N or YES/NO');
switch (age.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('You guess my age !');
        score = score + 1;

        break;
    case 'no':
    case 'n':
        alert('You are wrong , try again !');
        break;
    default:
        alert('You are wrong , try again !');
        break;
}


var nick = prompt('Is my nickname Sheikh Alsahabab ?', 'Y/N or YES/NO');
switch (nick.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('You are right !');
        score = score + 1;

        break;
    case 'no':
    case 'n':
        alert('You are wrong !');
        break;
    default:
        alert('You are wrong !');
        break;
}


var study = prompt('Do you know which University I studied ?', 'Y/N or YES/NO');
switch (study.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('Good for you!');
        score = score + 1;

        break;
    case 'no':
    case 'n':
        alert('I\'m really sorry  !');
        break;
    default:
        alert('I\'m really sorry  !');
        break;
}
var rand = (Math.floor(Math.random() * 10));
console.log(rand);
var game = parseInt(prompt('This is guess game : choose number', '0 through 9'));


var LOOP = 1;


if (game == rand) {

    alert('YOU ARE AWESOME THAT RIGHT');


    score = score + 1;

} else {
    for (LOOP; LOOP <= 4; LOOP++) {
        game = parseInt(prompt('This is guess game : choose number', '0 through 9'));
           
        if (game < rand) {
            alert('TRY AGAIN THAT wrong');
            alert('Too low');
        } else if (game > rand) {
            alert('TRY AGAIN THAT wrong');
            alert('Too high');
        } else if (game == rand) {
            alert('YOU ARE REAlly AWESOME THAT RIGHT');
            score = score + 1;

            break;
        }

    }
    alert(`The right number is ${rand}`);
}


var array = ['mohamad', 'ahmad', 'ammar', 'amjad'];


var game2 = prompt('Guess a name :', 'It\'s name').toLowerCase();




for (var i = 0; i < 5; i++) {

    for (var j = 0; j < array.length; j++) {

        if (game2 == array[j]) {
            console.log(game2);
            alert('true');
            i = 5;
            break;

        }
    }

    if (i == 5) {
        break;
    }

    game2 = prompt('try again');

}
alert(`The right name is ${array}`);
alert(`Your score is ${score} out of 7`);
