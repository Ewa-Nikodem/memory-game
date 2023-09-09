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
    const result = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenIds = [];
    let cardsWon = [];

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
        //const cardsName = document.querySelectorAll('name'); //i can store the names exactly the same as IDs as well
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1]
        if (optionOneId === optionTwoId) {
            alert('You clicked the same card');
            cards[optionOneId].setAttribute('src', 'src/images/logo.webp');
            cards[optionTwoId].setAttribute('src', 'src/images/logo.webp');
        }
        else if(cardsChosen[0] === cardsChosen[1]) {
            //alert('You have found a match');
            cards[optionOneId].setAttribute('src', 'src/images/white.png');
            cards[optionTwoId].setAttribute('src', 'src/images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard); //The removeEventListener() method removes an event handler from an element. We use it to prevent from clicking again on a pick
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        }
        else {
            if (optionOneId != optionTwoId) {
            cards[optionOneId].setAttribute('src', 'src/images/logo.webp');
            cards[optionTwoId].setAttribute('src', 'src/images/logo.webp');
        }
        }
        cardsChosen = []; //simple way to remove anything from previosuly populated array. So we can start over
        cardsChosenIds = [];
        result.textContent =  cardsWon.length; //display how many arrays are in the cardsWon
        if (cardsWon.length === cardArray.length / 2) {
            result.textContent = "You won"
        }

        console.log(cardsChosen);
        console.log(cardsWon);
    }

    createBoard()
    

})