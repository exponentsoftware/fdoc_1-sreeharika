const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

function countWords (paragraph, word1, word2){
    let word1count = 0;
    let word2count = 0;
    
input = paragraph.split('');//paragraph words can be split and put into sub strings in input variable//
// for loop will iterate the string values//
for (let i=0; i<input.length; i++){
if(input[i] == word1){
    word1count++;
}
if(input[i] == word2){
    word2count++;
}
}
//compare the given two words count//
if(word1count > word2count){
    // return word1;
    console.log("most repeated word is" + word2);
}
else {
    // return word2;
    console.log("most repeated word is" + word1);
}

}

console.log(countWords(paragraph, 'love', 'you'));