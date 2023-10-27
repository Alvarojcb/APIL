var API_key="RGAPI-a863b56b-06ec-4d4b-a7b8-5cc86a4d7777";
var player_n ="";
var br1 = "https://br1.api.riotgames.com";


function procurar_jogador(){
    player_n = document.getElementById("player_n").value;
    console.log(player_n);
    data()
}

async function data(){
    var playerUrl = "/lol/summoner/v4/summoners/by-name/"+player_n;
    var playerUrlcompleto = br1 + playerUrl+"?api_key="+API_key;
    console.log(playerUrlcompleto);
    const dataPlayer_1 = await fetch(playerUrlcompleto);
    const dataPlayer_Completo = await dataPlayer_1.json();
    console.log(dataPlayer_Completo);

    var level = dataPlayer_Completo.summonerLevel;
    console.log(level);
    document.getElementById("playerlevel_data").innerHTML = player_n +" é level " + level;

    var idperfil = dataPlayer_Completo.profileIconId;
    var urlperfil = "https://ddragon.leagueoflegends.com/cdn/13.21.1/img/profileicon/"+ idperfil +".png";
    document.getElementById("summonerprofilepic_picture").src = urlperfil;
}

