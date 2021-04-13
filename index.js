// Code your solutions in this file

    let friends = ["Lisa", "Kaitlin", "Jan"];
    let event = "surprise"; 

function writeCards(friends, event){
     
    let birthday = [];
    for (let i = 0; i < friends.length; i++){
    
        friends.push(`Thank you, ${friends[i]}, for the wonderful ${event} gift!`);
        
    }
    return birthday;
}

writeCards();

 let num = 10;

function countDown(num){
   
    while (num >= 0)
    console.log(num--);

    

}

countDown();