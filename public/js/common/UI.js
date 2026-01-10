const roomIdSpan = document.getElementById('room-id');
const copyBtn = document.getElementById('copy-room');
const overlay = document.getElementById('table-overlay');
const waitingText = document.getElementById('waitingText');

const deckDiv = document.getElementById('deck');
const playerHand = document.getElementById('player-hand');
const opponentHand = hand = document.getElementById('opponent-hand');
const playerScoreDiv = document.querySelectorAll('.player-score')
const centerTableDiv = document.querySelector('.center-table')
const midMessageDiv = document.getElementById('midMessage');

const controlsDiv = document.querySelector('.controls');

const startBtn = document.getElementById('startGameBtn');
const confirmCribBtn = document.getElementById('confirmCrib');
const playCardBtn = document.getElementById('playCardBtn')
const goBtn = document.getElementById('goBtn')


roomIdSpan.textContent = localRoomId;

