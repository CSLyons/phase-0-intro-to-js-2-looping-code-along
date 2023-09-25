function writeCards(list,occasion){
    let completedCards = [];
    for (let i = 0; i < list.length; i++){
        let recipient = list[i];
        completedCards.push(`Thank you, ${recipient}, for the wonderful ${occasion} gift!`)
    }
    return completedCards
}

function countDown(number){
    let count = number;
    while (count >= 0){
        console.log(count);
        count--
    }
}
