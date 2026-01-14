function atualizarRelogio() {
    const msg = document.getElementById('msg');
    const img = document.getElementById('imagem');
    const agora = new Date();

    let hora = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    hora = hora.toString().padStart(2, '0');
    minutos = minutos.toString().padStart(2, '0');
    segundos = segundos.toString().padStart(2, '0');

    msg.innerHTML = `A hora certa é ${hora}:${minutos}:${segundos}.`;

    if (hora < 12) {
        img.src = 'manha.jpg';
    } else if (hora < 18) {
        img.src = 'tarde.jpg';
    } else {
        img.src = 'noite.jpg';
    }

    setTimeout(atualizarRelogio, 1000);
}

atualizarRelogio();
