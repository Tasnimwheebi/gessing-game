'use strict';

//welcome 
let score = 0
let userName = prompt('please enter your name ');
console.log('welcome ' + userName);
alert('welcome ' + userName);


// lab 0-4
let respectPeople = prompt('Do I respect the others?').toLowerCase();

function question1(ques1) {
    while (respectPeople !== 'yes' && respectPeople !== 'y' && respectPeople !== 'no' && respectPeople !== 'n') {
        respectPeople = prompt('Do I respect the others?');
    }
    switch (respectPeople) {
        case 'yes':
            alert('yes I respect the others');
            console.log(respectPeople);
            score++;
            console.log(score);
            break;
        case 'y':
            alert('yes I respect the others');
            console.log(respectPeople);
            score++;
            console.log(score);
            break;
        case 'no':
            alert('oops why you think that i respect the others')
            console.log(respectPeople);
            break;
        case 'n':
            alert('oops why you think that i respect the others')
            console.log(respectPeople);
            break;
        default:
            break;
    }
}

question1(respectPeople);

//lab 03

/*while (respectPeople !== 'yes' && respectPeople !== 'y' && respectPeople !== 'no' && respectPeople !== 'n') {
    respectPeople = prompt('Do I respect the others?');
}
switch (respectPeople) {
    case 'yes':
        alert('yes I respect the others');
       console.log(respectPeople);
       score++ ;
        console.log(score) ;
        break;
    case 'y':
        alert('yes I respect the others');
        console.log(respectPeople);
        score++ ;


         console.log(score) ;
         break;
     case 'y':
         alert('yes I respect the others');
         console.log(respectPeople);
         score++ ;
         console.log(score) ;
         break;
     case 'no':
         alert('oops why you think that i respect the others')
        console.log(respectPeople);
         break;
     case 'n':
        alert('oops why you think that i respect the others')
         console.log(respectPeople);
         break;
     default:
         break;
 }*/

 let cooPerson = prompt('Do you think that I am  a cooperative person ?').toLocaleLowerCase()
 function cooPersonQuest(question2){

 
 while (cooPerson !== 'yes' && cooPerson !== 'y' && cooPerson !== 'no' && cooPerson !== 'n') {
    cooPerson = prompt('Do you think that I am  a cooperative person ?');
 }
 switch (cooPerson) {
     case 'yes':
         alert('thank you');
         console.log(cooPerson);
         score++ ;
         console.log(score) ;
         break;
     case 'y':
         alert('thank you');
         console.log(cooPerson);
         score++ ;
         console.log(score) ;
         break;
     case 'no':
         alert('ok I will help you if you need a help')
         console.log(cooPerson);
         break;
     case 'n':
         alert('ok I will help you if you need a help')
         console.log(cooPerson);
        break;
     default:
         break;
 }
}
cooPersonQuest(cooPerson);

 let haveCat = prompt('Do I have a cat? ').toLocaleLowerCase()
while (haveCat !== 'yes' && haveCat !== 'y' && haveCat !== 'no' && haveCat !== 'n') {
     haveCat = prompt('Do I have a cat?');
 }
 switch (haveCat) {
     case 'yes':
         alert('yes I have a cat');
         console.log(haveCat);
         score++ ;
         console.log(score) ;
         break;
     case 'y':
        alert('yes I have a cat');
         console.log(haveCat);
         score++ ;
         console.log(score) ;
         break;
     case 'no':
         alert('I have a white cat')
         console.log(haveCat);
         break;
     case 'n':
         alert('I have a white cat')
         console.log(haveCat);
         break;
    default:     
        break;
 }

 let summarVac = prompt('Did I ever go to a summar vacation?').toLocaleLowerCase()
 while (summarVac !== 'yes' && summarVac !== 'y' && summarVac !== 'no' && summarVac !== 'n') {
     summarVac = prompt('Did I ever go to a summar vacation?');
 }
 switch (summarVac) {
     case 'yes':
         alert('yes I went to Florida');
         console.log(summarVac);
         score++ ;
         console.log(score) ;
         break;
     case 'y':
         alert('yes I went to Florida');
         console.log(summarVac);
         score++ ;
         console.log(score) ;
         break;
     case 'no':
         alert('no I went to Florida in 2016')
         console.log(summarVac);
         break;
     case 'n':
         alert('no I went to Florida in 2016')
         console.log(summarVac);
         break;
     default:
         break;
 }

 let feelLone = prompt('Can I be alone without feeling lonely?').toLocaleLowerCase()
 while (feelLone !== 'yes' && feelLone !== 'y' && feelLone !== 'no' && feelLone !== 'n') {
     feelLone = prompt('Can I be alone without feeling lonely?');
 }
 switch (feelLone) {
     case 'yes':
         alert('yes I dont feel lonely , I feel relax');
         console.log(feelLone);
         score++ ;
         console.log(score) ;
         break;
     case 'y':
         alert('yes I dont feel lonely , I feel relax');
         console.log(feelLone);
         score++ ;
         console.log(score) ;

        break;
    case 'no':
        alert('oops why you think that i respect the others')
       console.log(respectPeople);
        break;
    case 'n':
       alert('oops why you think that i respect the others')
        console.log(respectPeople);
        break;
    default:
        break;
}*/

let cooPerson = prompt('Do you think that I am  a cooperative person ?').toLocaleLowerCase();
function question2(ques2) {

    while (cooPerson !== 'yes' && cooPerson !== 'y' && cooPerson !== 'no' && cooPerson !== 'n') {
        cooPerson = prompt('Do you think that I am  a cooperative person ?');
    }
    switch (cooPerson) {
        case 'yes':
            alert('thank you');
            console.log(cooPerson);
            score++;
            console.log(score);
            break;
        case 'y':
            alert('thank you');
            console.log(cooPerson);
            score++;
            console.log(score);
            break;
        case 'no':
            alert('ok I will help you if you need a help')
            console.log(cooPerson);
            break;
        case 'n':
            alert('ok I will help you if you need a help')
            console.log(cooPerson);
            break;
        default:
            break;
    }
}
question2(cooPerson);

let haveCat = prompt('Do I have a cat? ').toLocaleLowerCase();
function question3(ques3) {

    while (haveCat !== 'yes' && haveCat !== 'y' && haveCat !== 'no' && haveCat !== 'n') {
        haveCat = prompt('Do I have a cat?');
    }
    switch (haveCat) {
        case 'yes':
            alert('yes I have a cat');
            console.log(haveCat);
            score++;
            console.log(score);
            break;
        case 'y':
            alert('yes I have a cat');
            console.log(haveCat);
            score++;
            console.log(score);
            break;
        case 'no':
            alert('I have a white cat')
            console.log(haveCat);
            break;
        case 'n':
            alert('I have a white cat')
            console.log(haveCat);
            break;
        default:
            break;
    }
}
question3(haveCat);

let summarVac = prompt('Did I ever go to a summar vacation?').toLocaleLowerCase();
function question4(ques4) {
    while (summarVac !== 'yes' && summarVac !== 'y' && summarVac !== 'no' && summarVac !== 'n') {
        summarVac = prompt('Did I ever go to a summar vacation?');
    }
    switch (summarVac) {
        case 'yes':
            alert('yes I went to Florida');
            console.log(summarVac);
            score++;
            console.log(score);
            break;
        case 'y':
            alert('yes I went to Florida');
            console.log(summarVac);
            score++;
            console.log(score);
            break;
        case 'no':
            alert('no I went to Florida in 2016')
            console.log(summarVac);
            break;
        case 'n':
            alert('no I went to Florida in 2016')
            console.log(summarVac);
            break;
        default:
            break;
    }
}
question4(summarVac);

let feelLone = prompt('Can I be alone without feeling lonely?').toLocaleLowerCase();
function question5(ques5) {

    while (feelLone !== 'yes' && feelLone !== 'y' && feelLone !== 'no' && feelLone !== 'n') {
        feelLone = prompt('Can I be alone without feeling lonely?');
    }
    switch (feelLone) {
        case 'yes':
            alert('yes I dont feel lonely , I feel relax');
            console.log(feelLone);
            score++;
            console.log(score);
            break;
        case 'y':
            alert('yes I dont feel lonely , I feel relax');
            console.log(feelLone);
            score++;
            console.log(score);
            break;
        case 'no':
            alert('no, I can -_-')
            console.log(feelLone);
            break;
        case 'n':
            alert('no, I can -_-')
            console.log(feelLone);
            break;
        default:
            break;
    }
} question5(feelLone);


let i = 0
let myAge;
function question6(ques6) {

    for (i = 0; i < 3; i++) {
        //  myAge = prompt('How old am I ?');
        myAge = prompt('How old am I ?');

        if (myAge == 30) {
            alert(' yes, I am  ' + myAge + ' years old ');
            score++;
            console.log(score);
            break;
        }
        else
            if (myAge < 30) {
                alert('too low');
                // myAge = prompt('How old am I ?');
            }
            else if (myAge > 30) {
                alert('too high');
                // myAge = prompt('How old am I ?');
            }
    }
    if (i == 3) {
        alert('  I am 30 ');
    }
}
question6(myAge);



let arr = ['pink', 'purple', 'grey', 'blue'];
let favorColor = prompt('What is my favorite color?');
function question7(ques7) {

    for (i = 0; i < 5; i++) {
        if (favorColor == arr[0] || favorColor == arr[1] || favorColor == arr[2] || favorColor == arr[3]) {

            alert('well done! This is my favorite color');
            score++;
            console.log(score);
            break;
        }
        else {
            favorColor = prompt('What is my favorite color?');
        }
    }

    alert('pink  purple  grey  blue');
}
question7(favorColor);

alert('your score  ' + score + ' from 7 ');