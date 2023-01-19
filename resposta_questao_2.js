function tupleMake(input){
    let newTuple = []
    for(let i=0;i<input.length;i++){
        for(let j=i+1;j<input.length;j++){
            if(input[i] === input[j]){
                newTuple[newTuple.length]=input[i]
            }
        }
    }
        return newTuple;
}

console.log(tupleMake([4,5,44,98,4,5,6,6]))
