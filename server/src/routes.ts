import express from 'express'
import knex from './database/connection'

const routes = express.Router() 

routes.get('/items', async(req, resp) => {

    const items = await knex('items').select('*');

    const serializedItems = items.map(item =>{
        return { 
            id: item.id,
            titulo: item.titulo,
            url_imagem: `http://localhost:3333/uploads/${item.imagem}`
         }
    }) 

    return resp.json(serializedItems);
})

routes.post('/points', async(req, resp) => {

    const {
        nome, 
        email,
        whatsapp,
        latitude,
        longitude,
        cidade,
        uf,
        items
    } = req.body;

   await knex('points').insert({
        imagem: 'imagem-fake',
        nome, 
        email,
        whatsapp,
        latitude,
        longitude,
        cidade,
        uf
    });

    return resp.json( { success: true });

})


export default routes;