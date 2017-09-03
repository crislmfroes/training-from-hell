/* global document */
let videos = [];
const form1 = document.querySelectorAll('form')[0];
const form2 = document.querySelectorAll('form')[1];
const divVideos = document.querySelector('#videos');
form1.addEventListener('submit', function(event) {
    const nome = form1.nomeDaPlaylist.value;
    Persistencia.adiciona('playlists', playlist(nome, videos));
    const source = document.querySelector('#templateSucesso');
    const template = Handlebars.compile(source.innerHTML);
    const sucesso = document.querySelector('#sucesso');
    sucesso.innerHTML = template({'nome': nome});
    form1.reset();
    event.preventDefault();
});
form2.addEventListener('submit', function(event) {
    const video = form2.idDoVideo.value;
    videos.push(video);
    let span = document.createElement('span');
    span.classList.add('badge', 'badge-default');
    span.innerText = video;
    divVideos.appendChild(span);
    form2.reset();
    event.preventDefault();
});
