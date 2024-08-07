function modernTimesOfHashtag (text){
let words = text.split(' ');

    for(let word of words){
        if(word.startsWith('#') && word.length > 1){
            console.log(word.slice(1));
        }
    }


}
modernTimesOfHashtag('Nowadays everyone uses # to tag a #special word word in #socialMedia');