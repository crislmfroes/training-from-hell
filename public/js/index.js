const divContainer = document.querySelector('div.container');
const sourceThumbnail = document.querySelector('#templateThumbnail');
const thumbnail = Handlebars.compile(sourceThumbnail.innerHTML);
let playlists = [];
if (Persistencia.existe('playlists')) {
    playlists = Persistencia.carrega('playlists');
}
for (playlist of playlists) {
    let propriedades = {
        'nome': playlist.nome,
        'atual': playlist.atual,
        'total': playlist.videos.length,
    };
    divContainer.innerHTML += thumbnail(propriedades);
}
