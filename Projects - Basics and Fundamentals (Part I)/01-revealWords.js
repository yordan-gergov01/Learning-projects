function revealWords (word, text){
    let words = word.split(', ');
    for(let word of words){
        text = text.replace('*'.repeat(word.length), word);
    }
    console.log(text);

}
revealWords('great', 'softuni is ***** place for learning new programming languages');