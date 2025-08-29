const listaClientes = [{
    nome: "Vinícius",
    endereco: "RUA Joaquim",
    cpf: 123456789
    
},
{
    nome: "João",
    endereco: "RUA Pinheiro",
    cpf: 444578945
},
{
    nome: "Douglas",
    endereco: "RUA Newton",
    cpf: 334284950
}];

listaClientes.forEach(cliente => {
    document.write(`
        Nome: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
        `);
    });
    
document.write("<hr>")
listaClientes.push({
     nome: "Lívia",
     endereco: "Avenida Ribeira",
     cpf: 88899900
});

listaClientes.forEach(cliente => {
   document.write(`
        Nome: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
    `);
});
document.write("<hr>")
listaClientes.unshift({
    nome: "Juliana",
    endereco: "Rua Almir",
    cpf: 34324823942
});

listaClientes.forEach(cliente => {
   document.write(`
       Nome: ${cliente.nome}<br>
       Endereço: ${cliente.endereco}<br>
       CPF: ${cliente.cpf}<br><br> 
  `);
});
