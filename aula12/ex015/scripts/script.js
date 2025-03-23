function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) { //bom dia
        img.src = 'imgs/fotomanha.jpg'
        document.body.style.background ='rgb(236, 223, 195)'
    }
    else if (hora >= 12 && hora < 18) {
        img.src = 'imgs/fototarde.jpg'
        document.body.style.background ='rgb(151, 191, 192)'
    }
    else {
        img.src = 'imgs/fotonoite.jpg'
        document.body.style.background ='rgb(71, 86, 100)'
    }
}