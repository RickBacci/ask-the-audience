var socket = io();

var connectionCount = document.getElementById('connection-count');

socket.on('usersConnected', function(count) {
  connectionCount.innerText = 'Connected Users: ' + count;
});

var statusMessage = document.getElementById('status-message');

socket.on('statusMessage', function(message) {
  statusMessage.innerText = message;
});

var buttons = document.querySelectorAll('#choices-button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    socket.send('voteCast', this.innerText);
  });
}

var votingTotals = document.getElementById('voting-totals');
var totalAvotes  = document.getElementById('total-a-votes');
var totalBvotes  = document.getElementById('total-b-votes');
var totalCvotes  = document.getElementById('total-c-votes');
var totalDvotes  = document.getElementById('total-d-votes');

socket.on('voteCount', function(votes) {
  votingTotals.innerText = "Current Voting Totals";
  totalAvotes.innerText = "A: " + votes.A;
  totalBvotes.innerText = "B: " + votes.B;
  totalCvotes.innerText = "C: " + votes.C;
  totalDvotes.innerText = "D: " + votes.D;
});


var currentVote = document.getElementById('current-vote');

socket.on('currentVote', function(message) {
  currentVote.innerText = "You have voted for: " + message;
});
