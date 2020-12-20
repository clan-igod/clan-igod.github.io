fetch("https://eu.mc-api.net/v3/server/ping/notmrmario.aternos.me")
.then(function (response)  {
    return response.json()
})

.then(function (json) {
    document.querySelector('#stus').innerHTML = json.online ? 'Online' : 'Offline';
        document.querySelector("#nply").innerHTML = json.online ? 'Jugadores: ' + `<b>${json.players.online}</b>` + '/<b>50</b>' : 'Server Offline';
        document.querySelector('#motd').innerHTML = json.online ? json.description.text.replace(/\§4/gi, ' ')
        .replace(/\§a/gi, ' ')
        .replace(/\§d/gi, ' ')
        .replace(/\§l/gi, ' ')
        .replace(/\§2/gi, ' ')
        .replace(/\§f/gi, ' ')
        .replace(/\§6/gi, ' ')
        .replace(/\§7/gi, ' ')
        .replace(/\§8/gi, ' ') : 'Servidor offline';
        
})