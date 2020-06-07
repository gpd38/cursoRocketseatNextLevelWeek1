import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 
// Rota: endereço completo da requisição
// Recurso: qual entidade estamos acessando do sistema

// GET: buscar uma ou mais informações do backend
// POST: criar uma nova informação no backend
// PUT: atualizar uma informação existente no backend
// DELETE: remover uma informação do backend

// POST http://localhost:3333/users = criar um usuário
// GET http:localhost:3333/users = listar usuários
// GET http:localhost:3333/users/5 = buscar dados do usuário com ID = 5

// Request Param: Parâmetros que vem na própria rota normalmente OBRIGATÓRIO que identificam um recurso 
// Query Param: Parâmetros que vem na própria rota geralmente OPCIONAIS para filtros, paginação
// Request Body: Parâmetros para criação / atualização de informações

// Banco - Select * FROM users WHERE name = 'Marcia'
// knex('users').WHERE('name','Marcia').select('*')

const users = [
    'Diego',    // 0
    'Daniel',   // 1
    'Claudia',  // 2
    'Marcia'    // 3
];

app.get('/users',(request, response) =>{
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    // JSON
    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) =>{
    const id = Number(request.params.id);

    const user = users[id];
    
    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

 */