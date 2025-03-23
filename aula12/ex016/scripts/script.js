function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '250px'
        img.style.height = 'auto'

        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imgs/foto-bebe-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imgs/foto-jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imgs/foto-adulto-m.jpg')
            }
            else {
                img.setAttribute('src', 'imgs/foto-idoso-m.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imgs/foto-bebe-f.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imgs/foto-jovem-f.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imgs/foto-adulto-f.jpg')
            }
            else {
                img.setAttribute('src', 'imgs/foto-idoso-f.jpg')

            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
    res.appendChild(img)





}
