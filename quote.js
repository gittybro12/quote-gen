let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");


const quotes = [{
    quote: " Frankly, my dear, I don't give a damn.",
    person: "Rhett Butler", 

},{
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    person: "Thomas Edison	", 

},{
    quote: "He travels the fastest who travels alone.",
    person: "Rudyard Kipling", 

},{
    quote: "Hell has no fury like a woman scorned.	",
    person: "William Congreve", 

},{
    quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.	",
    person: "Martin Luther King", 

},{
    quote: "I love the smell of napalm in the morning.",
    person: "Lt. Kilgore", 

},{
    quote: "I think therefore I am.",
    person: "Rene Descartes", 

},{
    quote: "If at first you don’t succeed, try, try again.",
    person: "W. E. Hickson", 

},{
    quote: "If you are going through hell, keep going.",
    person: "Winston Churchill", 

},{
    quote: "If you want something done right, do it yourself",
    person: "Charles-Guillaume Étienne", 

}]

btn.addEventListener("click",function(){
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText =  quotes[random].person;
})