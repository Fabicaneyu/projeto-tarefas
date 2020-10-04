const express = require('express');
const router = express.Router();

//importa 
//importar a nossa controller aqui dentro de tarefas-routes
//só é possível pq tem o exports no tarefas-controller
const tarefaController = require('../controllers/tarefas-controllers');

//@route GET Tarefas
//@desc Retornar todas as tarefas (desc é de descrição)
//@acces Public
//@endpoint http://localhost:porta/tarefas
//lembre-se que a API pode ser IdeNTERNA>PRIVADA(ex:login)>PUBLICA(ex: usar api do gmail para logar)
router.get('/tarefas', tarefaController.getTarefas);

//@route GET Tarefas
//@query Titulo
//@desc Retornar apenas titulos
//@acces Public
//@endpoint http://localhost:porta/tarefas/titulo
router.get('/tarefas/titulo', tarefaController.getPorTitulo);


//@route GET Tarefas
//@params :id
//@desc Retornar apenas uma única tarefa pelo seu id: identificador
//@acces Public
//@endpoint http://localhost:porta/tarefas:id
router.get('/tarefas/:id', tarefaController.getIdTarefas);

//@route POST Tarefas
//@desc Criar uma tarefa
//@access Public
//@endpoint http://localhost:porta/tarefas
router.post('/tarefas', tarefaController.criarTarefas);


//@route DELETE Tarefas
//@desc Deletar uma tarefa
//@access Public
//@endpoint http://localhost:porta/:id
router.delete('/tarefas/:id', tarefaController.deletarTarefas);


//e agora exporta
module.exports = router; 