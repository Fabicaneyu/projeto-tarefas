//parâmetros = params é quando vc pega aquele parametro a partir do perfil que esta acessandoDica
 
//importar o nosso model aqui dentro de tarefas-controller
//só é possível pq tem o exports no tarefas-models
const tarefaModel = require('../models/tarefas-models');


//endpoint get 
//obter todas as tarefas
const getTarefas = (requisicao, resposta) => {
    resposta.status(200).json(tarefaModel);
}

//endpoint get 
//obter somente uma tarefa
// podem utilizar o getById
//www.reprograma.com.br/perfil/:id
const getIdTarefas = (requisicao, resposta) => {
    const {id} = requisicao.params;

    const tarefa = tarefaModel.find(tarefa => tarefa.id == id);

    resposta.status(200).json(tarefa);

}


//endpoint get 
//obter pelo título da tarefa
//getByTitle
//query = é de querystrings , um filtro/uma pesquisa que contenha o que o client perguntou 
// resquest, response
//req, res
//www.reprograma.com.br/titulo?titulo=Ler
const getPorTitulo = (requisicao, resposta) => {
    const { titulo } = requisicao.query;

    const tarefa = tarefaModel.find(tarefa => tarefa.titulo == titulo)
    resposta.status(200).json(tarefa);
}

//post 
//post(criar) necessita de um corpo com informações
// dentro de requisicao.body vc coloca os campos que adiciona no array 
const criarTarefas = (requisicao, resposta) => {
    const {body} = requisicao; 
    const{titulo, descricao, prazo, responsavel} = requisicao.body;

    const tarefaId = tarefaModel.map(tarefa => tarefa.id == id); 

    const novoId = tarefaID.length > 0 ? Math.max.apply(Math, tarefaId) + 1 : 1;

    const novaTarefa = {
        id: novoId, 
        titulo: requisicao.body.titulo, 
        descricao: requisicao.body.descricao, 
        prazo: requisicao.body.prazo,
        responsavel: requisicao.body.responsavel,
        dataCriacao: new Date()
    }

    tarefaModel.push(novaTarefa);

    resposta.status(201).json(novaTarefa);
}

//delete
// método deletar 
// pelo /:id 
//router.delete
const deletarTarefas = (requisicao, resposta) => {
    const { id } = requisicao.params; 

    //filtrar
    const tarefa = tarefaModel.filter(tarefas => tarefas.id != id); //diferente de ID pq quer dizer que ele sumiu 

    if(!tarefa) resposta.status(404).json({mensagem: "Tarefa não foi excluida"});
    
    resposta.status(204).json({mensagem: "Tarefa deletada com sucesso"})
}



//Ao final desta controller tb faz exports
module.exports = {
    getTarefas,
    getIdTarefas,  
    getPorTitulo,
    criarTarefas,
    deletarTarefas
    
}

