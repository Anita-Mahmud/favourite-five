const nameList = [];

function selectPlayers(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const selected = {
        playerName: playerName
    };
    nameList.push(selected);

    displayPlayers();

}

function displayPlayers() {
    const nameContainer = document.getElementById('name-list');
    nameContainer.textContent = "";
    for (let i = 0; i < nameList.length; i++) {

        if (i != 5) {
            const li = document.createElement('li');
            li.innerText = nameList[i].playerName;
            nameContainer.appendChild(li);

        } else {
            alert('You Have already selected 5 Players')
        }

    }

}