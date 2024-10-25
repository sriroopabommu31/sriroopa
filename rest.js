function rest(...args)
{
    let result=0;
    for(let arg of args){
        result=result+args;
    }
    console.log(result);
}
rest(10,20,30);