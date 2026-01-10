export function initRoundOneUI(roundOneManager)
{
    playCardBtn.addEventListener('click', function() {
        roundOneManager.playCard(selectedCards)
    })
}

export function startPlay()
{       
    document.querySelectorAll('.selected').forEach(element => {
        element.classList.remove('selected');
    });

    confirmCribBtn.classList.add('hidden');
    deckDiv.classList.remove('hidden');
    setScore(0)
}

export function showButtonsRoundOne()
{
    controlsDiv.classList.add('show')
    playCardBtn.classList.remove('hidden')
    goBtn.classList.remove('hidden')
}