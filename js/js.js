'use strict';
let userName = prompt('please enter your name ');
    console.log('welcome ' + userName);
    alert ('welcome ' + userName);

    
    let respectPeople = prompt('Do I respect the others?'); 
    switch (respectPeople.toLocaleLowerCase()) {
        case 'yes':
            alert('yes I respect the others'); 
            console.log(respectPeople);           
            break;
        case 'y':
        alert('yes I respect the others'); 
        console.log(respectPeople);           
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

    let cooPerson = prompt('Do you think that I am  a cooperative person ?'); 
    switch (cooPerson.toLocaleLowerCase()) {
        case 'yes':
            alert('thank you'); 
            console.log(cooPerson);           
            break;
        case 'y':
        alert('thank you'); 
        console.log(cooPerson);           
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

    let haveCat = prompt('Do I have a cat? '); 
    switch (haveCat.toLocaleLowerCase()) {
        case 'yes':
            alert('yes I have a cat'); 
            console.log(haveCat);           
            break;
        case 'y':
        alert('yes I have a cat'); 
        console.log(haveCat);           
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

    let summarVac = prompt('Did I ever go to a summar vacation?'); 
    switch (summarVac.toLocaleLowerCase()) {
        case 'yes':
            alert('yes I went to Florida'); 
            console.log(summarVac);           
            break;
        case 'y':
        alert('yes I went to Florida'); 
        console.log(summarVac);           
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

    let feelLone = prompt('Can I be alone without feeling lonely?'); 
    switch (feelLone.toLocaleLowerCase()) {
        case 'yes':
            alert('yes I dont feel lonely , I feel relax'); 
            console.log(feelLone);           
            break;
        case 'y':
        alert('yes I dont feel lonely , I feel relax'); 
        console.log(feelLone);           
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