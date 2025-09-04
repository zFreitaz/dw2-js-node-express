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

const homemAranha = new Heroi ("HomemAranha", 500, 100, 350);
homemAranha.teia = 1;

homemAranha.sentidoAranha = () => {
    return " Detectou um grande perigo!!!"
};

const superMan = new Heroi ("SuperMan", 100000, 300, 100000);
superMan.podeVoar = 1;

superMan.visaoCalor = () => {
    return "Está utilizando visão de calor!!!"
};

const batman = new Heroi ("Batman", 100, 10, 40);
batman.esconder = 1;

batman.investigar = () => {
    return "Está investigando um crime!!!"
};

document.write (`
       O Herói Homem-Aranha: ${homemAranha.sentidoAranha()}<br>
       O Herói Superman: ${superMan.visaoCalor()}<br>
       O Herói Batman: ${batman.investigar()}<br>   
    `);   
