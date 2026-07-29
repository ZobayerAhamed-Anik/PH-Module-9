let count = 0;
while(count < 10){
    count++;
    if(count % 2 == 0){
        continue;
    }
    console.log('Value of count:', count);
}