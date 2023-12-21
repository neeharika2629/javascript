
function addpy(string){
    if(string[0] !='p' && string[1] != 'y') {
        var result = 'py'+ string;
        return result;
    }
    else{
        return string;
    }
};
let word1 = "python";
let word2 = "javascript"
console.log(addpy(word1));
console.log(addpy(word2));





/*function addpy(string) {
    if (string[0] != 'p' && string[1] != 'y') {
        var result = 'py' + string;
        return result;
    } else {
        return string;
    }
};
let word = "python";
console.log(addpy(word));*/