const FRONT = "card_front";
const BACK = "card_back";
let cards = null

let techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
];
startGame();

function startGame(){
     cards = createCardFromTechs(techs)
     shufleCards(cards);
}
function shufleCards(cards){
    //Embaralhador de cartas
    let currentIndex = cards.length;
    let randomIndex = 0;
    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random * CurrentIndex);
        currentIndex --;
        [cards[randomIndex] , cards[currentIndex] = cards[currentIndex] , cards[randomIndex]]
    }
}
function createCardFromTechs(techs) {
    //função principal
    let cards = [];

    for (let tech of techs) {
        cards.push(createPairFromTech(tech))
    };
    return cards.flatMap(pair => pair);
}

function createPairFromTech(tech) {
    //devolve 2 objetos para a função principal
    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }, {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }]
};

function createIdWithTech(tech) {
    //Cria um id aleatorio (Random)
    return tech + parseInt(Math.random() * 1000);
};
