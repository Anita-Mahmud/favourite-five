document.getElementById('player-list').addEventListener('click', function(event) {
    const playerName = event.target.parentNode.parentNode.children[0].innerText;
    // const selectedPlayers = document.querySelectorAll('selected');
    // const nameList = document.querySelectorAll('name-list');
    // console.log(event.target.innerText)
    const players = [];
    // products-cart

    const cartContainer = document.getElementById("name-list");


    for (let i = 0; i < players.length; i++) {


        const li = document.createElement("li");

        li.innerText = players[i].playerName;
        cartContainer.appendChild(li);
    }






})