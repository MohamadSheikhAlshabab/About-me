'use strict';
var name = prompt('what\s your name ?');

alert(`weclome in my page  ${name}`);
var know = prompt('Do you know me ?', 'Y/N or YES/NO');
switch (know.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('You are know me man !');
        break;
    case 'no':
    case 'n':
        alert('You should know me !');
        break;
}
var friend = prompt('Are you my friend ?', 'Y/N or YES/NO');
switch (friend.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('You are my friend !');
        break;
    case 'no':
    case 'n':    
        alert('Sorry, you are not my friend !');
        break;
}

var age = prompt('Do you know my age ?', 'Y/N or YES/NO');
switch (age.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('You guess my age !');
        break;
    case 'no':
    case 'n':
        alert('You are wrong , try again !');
        break;
}

var nick = prompt('Is my nickname Sheikh Alsahabab ?', 'Y/N or YES/NO');
switch (nick.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('You are right !');
        break;
    case 'no':
    case 'n':
        alert('You are wrong !');
        break;
}

var study = prompt('Do you know which University I studied ?', 'Y/N or YES/NO');
switch (study.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('Good for you!');
        break;
    case 'no':
    case 'n':
        alert('I\'m really sorry  !');
        break;
}
alert(`'Great job ' ${name}`);
