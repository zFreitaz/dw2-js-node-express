//  CLASSES JAVASCRIPT

// Criando uma classe

// Nome de classes devem iniciar com a primeira letra maiscúla

class Carro {
    // Para criar os ATRIBUTOS da Classe deve-se utilizar o método "constructor"
    constructor(marca, modelo, ano) {
        // THIS representa a instãncia (objeto)
        // O valor que for enviado a classe será atribuido a  instãncia
        // ATRIBUTOS
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    // MÉTODOS
    buzinar() {
        return "Beep! Beep!";
    }
}

// Criando INSTÂNCIAS (objetos) derivadas de classe carro
const carroPopular = new Carro("Fiat", "Uno", 2012);
document.write(
    `<p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano de ${carroPopular.ano}. Quando buzina faz ${carroPopular.buzinar()}</p>`
);

//Objeto - Carro Esportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Camaro"
carroEsportivo.ano = 2024

document.write(
    `<p>O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano de ${carroEsportivo.ano}. Quando buzina faz ${carroEsportivo.buzinar()}</p>`
);

// Adicionar um novo atributo
carroEsportivo.corNeon = "Azul"

// Adicionando método
carroEsportivo.turbo = () => {
    return "VAI CURINTIA! O Carro está brocando muito!!!";
};

document.write(`<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} também possui neon da dor ${carroEsportivo.corNeon}. E quando usa turbo ${carroEsportivo.turbo()}</p>`)
