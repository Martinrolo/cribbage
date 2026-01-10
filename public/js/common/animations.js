async function dealCardsAnimation(nbCards, players) {
    for (let i = 0; i < nbCards; i++) {
        const indexPlayer = getIndexPlayer(players)
        
        await dealOneCardAnimation(true, players[indexPlayer].cards[i], i);
        await dealOneCardAnimation(false, null, i);
    }
}

async function dealOneCardAnimation(isPlayer, cardData, index) {
    return new Promise(resolve => {
        const hand = isPlayer ? playerHand : opponentHand;

        const deckRect = deck.getBoundingClientRect();
        const handRect = hand.getBoundingClientRect();

        const startX = deckRect.left + deckRect.width / 2 - 20;
        const startY = deckRect.top + deckRect.height / 2 - 35;
        const targetY = handRect.top + handRect.height / 2 - 35;

        const card = document.createElement('div');
        card.className = 'dealt-card';
        card.style.left = `${startX}px`;
        card.style.top = `${startY}px`;

        document.body.appendChild(card);

        requestAnimationFrame(() => {
            card.style.transform = `translateY(${targetY - startY}px)`;
        });

        // fin animation
        setTimeout(() => {
            card.remove();

            hand.appendChild(createCard(isPlayer, cardData, index));

            resolve()
        }, 200);
    });
}

function createCard(isPlayer, cardData, index)
{
    const cardDiv = document.createElement('div');

    if(isPlayer)
    {
        const convertedCardData = numToSymbol(cardData)
        cardDiv.className = 'card';
        cardDiv.textContent = convertedCardData.rank + convertedCardData.suit;
        if(convertedCardData.suit == '♥' || convertedCardData.suit == '♦')
        {
            cardDiv.style.color = 'red'
        }

        cardDiv.dataset.index = index;
        cardDiv.dataset.card = cardData; 
        cardDiv.addEventListener('click', onCardClick);
    }

    else
    {
        cardDiv.className = 'card back';
    }

    return cardDiv;
}

function onCardClick(e) {
    const card = e.currentTarget;

    // Désélection
    if (card.classList.contains('selected')) {
        card.classList.remove('selected');
        selectedCards = selectedCards.filter(c => c !== card);
        return;
    }

    // Max atteint
    if (selectedCards.length >= maxSelectedCards) return;

    // Sélection
    card.classList.add('selected');
    selectedCards.push(card);
}

function moveCardsToCribAnimation(isPlayer) {    
    const crib = isPlayer? document.getElementById('player-crib') : document.getElementById('opponent-crib');
    crib.classList.add('visible');
    
    if(!document.querySelector('.cribCard'))
    {
        const back = document.createElement('div');
        back.className = 'card back cribCard';
        crib.appendChild(back);
    }
}

function removeSelectedCards(playerId) {
    if(playerId == localPlayerId)
    {
        selectedCards.forEach(card => card.remove());
        selectedCards = [];
    }

    else
    {
        const cards = opponentHand.querySelectorAll('.card');

        for (let i = 0; i < 2; i++) {
            cards[i].remove();
        }
    }
}

function setScore(score)
{
    midMessageDiv.textContent = "Compte: " + score
}


