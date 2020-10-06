document.addEventListener('DOMContentLoaded', () => {
    // o codigo vai ser adicionado depois desta Linha 

    // como vamos estar constantemente a manipular a grelha do jogo e a pontuaçao,
    // vamos guardar já as referencias para evitar estarmos a escrever sempre o mesmo codigo.
    
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    
    //arrays a serem utilizados durante o jogo 
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsFound = [];

    //array com as nossas cartas de jogo 
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'   
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        }
    ];
    
    //função para criar quadro de jogo 
    function createBoard() {
        //ordenar o array das imagens de forma aleatoria
        cardArray.sort(() => 0.5 - Math.random())
        //vamos entao adcionar as imagens das cartas 
        for (let i = 0; i < cardArray.length; i++)
        {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/card.png'); //BLANK CARD TALVEZ 
            card.setAttribute('data-id', i);

            card.addEventListener('click',flipCard); //nova linha
            grid.appendChild(card);
        }
    }    
    
    // executar a criaçao do quadro do jogo
    createBoard();

    //intelegencia do jogo 
    //baseia-se em 2 validaçoes: posiçao da carta e nome da carta
    function checkForMatch() {
        //imagens das cartas 
        var cards = document.querySelectorAll('img');

        //cartas selecionadas 
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        //carta 1 e a carta sao a mesma carta posiçao igual ? 
        if(optionOneId == optionTwoId)
        {
            cards[optionOneId].setAttribute('src', 'images/card.png');
            cards[optionTwoId].setAttribute('src', 'images/card.png');
            alert('Carregou na mesma imagem!');
        }
        else 
        {
            // a carta 1 e carta 2 sao imagens iguais mas posiçoe sdiferentes 
            if (cardsChosen[0] === cardsChosen[1])
            {
                alert('Imagem Igual +1 Ponto!');
                //mostarmos o espçao em branco 
                cards[optionOneId].setAttribute('src', 'images/blank.png');
                cards[optionTwoId].setAttribute('src', 'images/blank.png');
                //removemos os eventeos das cartas ja encontradas 
                cards[optionOneId].removeEventListener('click', flipCard);
                cards[optionTwoId].removeEventListener('click', flipCard);
                //adicionamos a carta a lista de cartas ja encontradas 
                cardsFound.push(cardsChosen);
            }
            else
            {
                //nao é a mesma posiçao nem imagem igual 
                //jogada sem sucesso
                cards[optionOneId].setAttribute('src', 'images/card.png');
                cards[optionTwoId].setAttribute('src', 'images/card.png');
                alert('Lamento, tenta novamente!');
            }
        }
        // Limpar as opções 
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsFound.length;

        //se ja temos todas as cartas descobertas
        if (cardsFound.length === cardArray.length/2)
        {
            resultDisplay.textContent = ' Parabens! Encontrou todas!';
        }
    }

    //virar carta 
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if (cardsChosen.length ===2){  //verificar o estado do jogo de 2 em 2 cartas
            setTimeout(checkForMatch, 100); // adiamos a verificaçao 100ms
        }                                   // para permitir o evento que vire a carta
    }
    // o codigo vai ser adicianado antes desta Linha 
});