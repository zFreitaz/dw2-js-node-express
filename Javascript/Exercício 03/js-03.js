class Heroi {
    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }
    correr () {
        return "O Herói está correndo!"
    }
    andar() {
        return "O Herói está andando!"
    }
    atacar() {
        return "O Herói está atacando!"
    }
    defender() {
        return "O Herói está se defendendo!"
    }       
}

const homemAranha = new Herói ("HomemAranha", 200, 50, 150);
homemAranha.teia = 1;

homemAranha.sentidoAranha = () => {
    return "Ele detectou perigo!!!"
}

const superMan = new Herói ("SuperMan", 100000, 100, 100000);
superMan.podeVoar = 1;

superMan.visaoCalor = () => {
    return "Está utilizando visão de calor!!!"
}

const batman = new Herói ("Batman", 100, 10, 40);
batman.esconder = 1;

batman.investigar = () => {
    return "Está investigando!!!"
}