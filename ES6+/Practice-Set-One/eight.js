// Write a function that takes a string as input and determines if it contains the word "hello".

// Your ES6 code here

const isHelloPresent = (str) => {
    const strCheck = "hello";
    for(let i = 0; i < str.length - strCheck.length; i++){
        let j;
        for(j = 0; j < strCheck.length; j++){
            if(strCheck[i + j].toLowerCase() !== str[j].toLowerCase()){
                break;
            }
        }
        if(j === strCheck.length){
            return true;
        }
    }
    return false;
}

console.log(isHelloPresent("Hello World")) // true
console.log(isHelloPresent("World")) // false