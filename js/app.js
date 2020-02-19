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

var game = prompt('This is guess game : choose number', '0 through 9');
var LOOP = 1;
var rand = (Math.floor(Math.random() * 10));
if (game == rand) {
    alert('YOU ARE AWESOME THAT RIGHT');
    score = score + 1;

} else {
    for (LOOP; LOOP <= 4; LOOP++) {
        game = prompt(`Attempt ${LOOP} This is guess game : choose number`, '0 through 9');

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

var Length_array = 0;
var array = ['mohamad', 'ahmad', 'ammar', 'amjad'];


var game2 = prompt('Guess a name :', 'It\'s name').toLowerCase();
var LOOP2 = 1;

    for(LOOP2 ; LOOP2 < 7 ; LOOP2++){
    if(game2 === array[Length_array]) {
       
            console.log('YOU ARE REALLYYYYYYYY AWESOME THAT RIGHT');
            alert('YOU ARE REALLYYYYYYYY AWESOME THAT RIGHT');
            score = score + 1;
            break;
        } else if (game2 !== array[Length_array]){
            alert('TRY AGAIN THAT wrong');
            game2= prompt('Guess a name :', 'It\'s name').toLowerCase();
           if (game2 === array[Length_array]){
            console.log('YOU ARE REALLYYYYYYYY AWESOME THAT RIGHT');
            alert('YOU ARE REALLYYYYYYYY AWESOME THAT RIGHT');
            score = score + 1;
            break;
           } else if(game2 !== array[Length_array]){
            alert('TRY AGAIN THAT wrong');
            break;
           }
                 

            break;
        }
              
    }



    alert(`The right name is ${array[Length_array]}`);


alert(`Your score is ${score} out of 7`);
// save question and other things in array
// var save =[];
// var row =0;
// var cloumn =0;
// for (row ; row<5 ;row++){
//     for(cloumn ; cloumn < 5 ; cloumn ++){
//         save=[row];
//     }
// }