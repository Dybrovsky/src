let name = "ToMas"
let surname = "DybroVsky"


function makeUpperCaseForFirstLetter(word){
    let firstLetterUpperCase = word[0].toUpperCase()
    let lowerCaseWord = word.toLowerCase();
    let modefiedWord = firstLetterUpperCase+lowerCaseWord.slice(1);

    let analize = word === modefiedWord ? "the same" : "changed";
    console.log(analize);

    return modefiedWord;
}

console.log(makeUpperCaseForFirstLetter(name));
console.log(makeUpperCaseForFirstLetter(surname));    

