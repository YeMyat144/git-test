document.addEventListener('DOMContentLoaded', function () {
    // Fetch player data and tournament schedule dynamically
    fetchPlayerData();
    fetchTournamentSchedule();
});

function fetchPlayerData() {
    // Example: Fetch player data from an API
    // This is a simplified example; in a real scenario, you would make an AJAX request
    const playerList = document.getElementById('player-list');

    // Sample data for illustration
    const players = ['Ryu', 'Chun-Li', 'Ken', 'Guile', 'Zangief'];

    players.forEach(player => {
        const listItem = document.createElement('li');
        listItem.textContent = player;
        playerList.appendChild(listItem);
    });
}

function fetchTournamentSchedule() {
    // Example: Fetch tournament schedule from an API
    // This is a simplified example; in a real scenario, you would make an AJAX request
    const scheduleTable = document.getElementById('schedule-table');

    // Sample data for illustration
    const schedule = [
        { round: 'Round 1', time: '12:00 PM', location: 'Arena A' },
        { round: 'Round 2', time: '2:00 PM', location: 'Arena B' },
        { round: 'Semi-finals', time: '4:00 PM', location: 'Main Stage' },
        { round: 'Finals', time: '6:00 PM', location: 'Main Stage' }
    ];

    schedule.forEach(match => {
        const row = scheduleTable.insertRow();
        row.insertCell(0).textContent = match.round;
        row.insertCell(1).textContent = match.time;
        row.insertCell(2).textContent = match.location;
    });
}
