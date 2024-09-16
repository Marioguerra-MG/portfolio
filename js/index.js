const modal = document.getElementById('modalSobre');

const openModalSobre = document.getElementById('openModalSobre');

const fechar = document.getElementsByClassName("fechar")[0];

openModalSobre.onclick = function(){
    modal.style.display = 'block';
}

fechar.onclick = function(){
    modal.style.display = 'none';
}

