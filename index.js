// Code your solutions in this file
function writeCards(names, msg) {

    let message = [] 

    for (let i = 0; i < names.length; i++){
        message.push(`Thank you, ${names[i]}, for the wonderful ${msg} gift!`)
    }
    return message;
}




function countDown (number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}