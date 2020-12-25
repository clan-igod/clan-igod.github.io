fetch("https://eu.mc-api.net/v3/server/ping/notmrmario.aternos.me")
.then(function (response)  {
    return response.json()
})

.then(function (json) {
    document.querySelector('#stus').innerHTML = json.online ? '<b draggable="true">Estado:</b> Online' : '<b draggable="true">Estado:</b> Offline';
        document.querySelector("#nply").innerHTML = json.online ? `<b draggable="true">Número de jugadores: </b><b>${json.players.online}</b>` + ` <xd draggable="true">de</xd> <b>${json.players.max}</b>` : '<b draggable="true">Número de jugadores:</b> Server Offline';
        document.querySelector('#motd').innerHTML = json.online ? json.description.text.replace(/\§4/gi, ' ')
        .replace(/\§a/gi, ' ')
        .replace(/\§d/gi, ' ')
        .replace(/\§l/gi, ' ')
        .replace(/\§2/gi, ' ')
        .replace(/\§f/gi, ' ')
        .replace(/\§6/gi, ' ')
        .replace(/\§7/gi, ' ')
        .replace(/\§8/gi, ' ') : 'Servidor offline';
        document.querySelector('#version').innerHTML = json.online ? '<b draggable="true">Versión: </b>' + json.version.name
        .replace(/\§4/, ' ')
        .replace(/\● /, ' ') : '<b draggable="true">Versión:</b> Servidor offline';
        
})