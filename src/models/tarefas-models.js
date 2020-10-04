const tarefa = [
    { 
        id: 1, 
        titulo: "Ler um livro", 
        descricao: "Preciso ler um livro após acordar", 
        prazo: "28/10/2020", 
        responsavel:"Fabi",
        dataCriacao: new Date()
    },
    { 
        id: 2, 
        titulo: "Estudar biologia", 
        descricao: "Estudar biologia para o vestibular", 
        prazo: "18/12/2020", 
        responsavel:"Claudia",
        dataCriacao: new Date()
    }
    
]

//quer dizer que pode ser exportado 
//node trabalha com modulos 
// representa 1 modulo exportado 
module.exports = tarefa;