import express from 'express';

const app = express()

const users = [
    'Dyana',
    'Allyson',
    'Snoopy'
];

//Busca todos os usuários
app.get('/users', (req, resp) => {
    resp.json(users);
})

//Busca um único usuário
app.get('/users/:id', (req, resp) =>{
    const id = Number(req.params.id);

    return resp.json(users[id])
})

app.post('/users', (req,resp) => {
    
    const user = {
        'name': 'Dyana',
        'email': 'dyana.tavares1@gmail.com'
    };

    return resp.json(user);
})

app.listen(3333);