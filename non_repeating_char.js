function nonrep(s)
{
    const count={};
    for(const char of s){
        count[char]=(count[char]||0)+1;
    }
    for(const char of s)
    {
        if(count[char]==1){
            return char;
        }
    }
return null;
}
console.log(nonrep("aappllee"))