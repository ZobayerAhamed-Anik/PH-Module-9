for( let i = 0; i <=10; i++){
    if(i > 5){
        break;
    }
    console.log(i);
}

console.log('Using while loop....');
let count = 0;
while (count < 10){
    if(count > 5){
        console.log("That's Enough for today");
        break;
    }
    console.log('Value of count:', count);
    count++
}
console.log('Goodbye guys');