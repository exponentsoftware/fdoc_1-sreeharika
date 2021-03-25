function sevenRandomNumbers(){
    let arr = [];
    for(let i=0; i<=9; i++);{
        var num = Math.floor(Math.random() * 9) + 1;
        if(arr.indexOf(num) === -1){
        arr.push(num);
    }
}
console.log(arr);
}
sevenRandomNumbers()
