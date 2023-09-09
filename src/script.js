document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name:'harry',
            img:'src/images/hp.webp',
        },
        {
            name:'hermione',
            img:'src/images/hermione.webp',
        },
        {
            name:'ron',
            img:'src/images/ron.webp',
        },
        {
            name:'dobby',
            img:'src/images/dobby.webp',
        },
        {
            name:'dumbledore',
            img:'src/images/dum.webp',
        },
        {
            name:'voldemort',
            img:'src/images/v.webp',
        },
        {
            name:'harry',
            img:'src/images/hp.webp',
        },
        {
            name:'hermione',
            img:'src/images/hermione.webp',
        },
        {
            name:'ron',
            img:'src/images/ron.webp',
        },
        {
            name:'dobby',
            img:'src/images/dobby.webp',
        },
        {
            name:'dumbledore',
            img:'src/images/dum.webp',
        },
        {
            name:'voldemort',
            img:'src/images/v.webp',
        }
    ]

    cardArray.sort(() => 0.5 - Math.random()) //random() gives back a random number between 0 and 1 
    console.log(cardArray)

    const grid = document.querySelector('.grid');

    let cardsChosen = [];
    let cardsChosenIds = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            const card = document.createElement('img');
            card.setAttribute('src', 'src/images/logo.webp');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id');       
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenIds.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosenIds.length === 2) {
            setTimeout(checkForMatch, 500)
        }
       
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1]
        if (optionOneId === optionTwoId) {
            alert('You clicked the same card');
            cards[optionOneId].setAttribute('src', 'src/images/logo.webp');
        }
    }

    createBoard()
    

})