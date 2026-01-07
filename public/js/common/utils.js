function numToSymbol(num)
{
    const ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    const suits = ['♠','♥','♦','♣'];

    const rank = ranks[num % 13];
    const suit = suits[Math.floor(num / 13)];

    return { rank, suit };
}

function getIndexPlayer(players)
{
    return players[0].playerId == localPlayerId ? 0 : 1;
}

function getCardValue(num)
{
    if(num % 13 < 10) return num + 1;
    else return 10;
}