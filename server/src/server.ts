import express from 'express';

const app = express()

app.get('/users', (req, resp) => {
    console.log('Listagem de usuários');

    resp.json([
        'Dyana',
        'Allyson',
        'Snoopy'
    ]);

})

app.listen(3333);