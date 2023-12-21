var multiply=function(a){
    return function(b){
        let result1=a*b;
        return result1;
    };
};
console.log(multiply(10)); 