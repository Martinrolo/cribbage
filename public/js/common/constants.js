const params = new URLSearchParams(window.location.search);
const room = params.get('room');
const socket = io('http://localhost:5000/')