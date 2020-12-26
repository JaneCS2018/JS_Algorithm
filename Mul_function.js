//Mul function ---- don't know why...
function example(x){
    return (y)=>{
        return (z)=>{
            return x * y * z
        }
    }
}

console.log(example(5)(2)(2));