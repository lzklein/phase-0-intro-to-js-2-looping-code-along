// Code your solutions in this file
const names = []
function writeCards(names, event){
    var cards = [];
    for(let i=0; i<names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}
function countDown(count){
    var count
    while (count >= 0){
        console.log(count);
        count--;
    }
}