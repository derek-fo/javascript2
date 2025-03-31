let amigo = {
    nome: 'josé',
    sexo: 'M',
    peso: '77.5',
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p

}}

amigo.peso = parseInt(amigo.peso) + 3
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)